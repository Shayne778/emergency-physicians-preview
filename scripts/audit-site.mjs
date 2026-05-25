import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const startUrl = process.argv[2];
const maxPages = Number(process.env.MAX_PAGES ?? 120);
const delayMs = Number(process.env.CRAWL_DELAY_MS ?? 350);

if (!startUrl) {
  console.error("Usage: npm run audit:site -- https://example.com");
  process.exit(1);
}

const origin = new URL(startUrl).origin;
const queue = [new URL(startUrl).href];
const visited = new Set();
const pages = [];
const assets = new Map();

await mkdir(join(root, "content", "audit"), { recursive: true });

while (queue.length && visited.size < maxPages) {
  const url = queue.shift();
  if (!url || visited.has(url)) continue;
  visited.add(url);

  try {
    const response = await fetch(url, {
      headers: {
        "user-agent": "EmergencyPhysiciansPreviewAudit/1.0",
      },
    });

    const contentType = response.headers.get("content-type") ?? "";
    if (!response.ok || !contentType.includes("text/html")) {
      pages.push({ url, status: response.status, skipped: true, reason: contentType || "non-html" });
      continue;
    }

    const html = await response.text();
    const links = unique(extractAttributes(html, "a", "href").map((href) => resolveUrl(href, url)).filter(Boolean));
    const images = unique(extractAttributes(html, "img", "src").map((src) => resolveUrl(src, url)).filter(Boolean));

    for (const image of images) {
      assets.set(image, {
        url: image,
        seenOn: assets.get(image)?.seenOn ? unique([...assets.get(image).seenOn, url]) : [url],
      });
    }

    for (const link of links) {
      if (link.startsWith(origin) && !visited.has(link) && !queue.includes(link) && isLikelyPage(link)) {
        queue.push(link);
      }
    }

    pages.push({
      url,
      status: response.status,
      title: matchContent(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
      description: matchContent(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/i),
      headings: extractHeadings(html),
      text: htmlToText(html),
      links,
      images,
    });

    await sleep(delayMs);
  } catch (error) {
    pages.push({ url, error: error instanceof Error ? error.message : String(error) });
  }
}

const output = {
  crawledAt: new Date().toISOString(),
  startUrl,
  pageCount: pages.length,
  pages,
};

await writeFile(join(root, "content", "audit", "pages.json"), `${JSON.stringify(output, null, 2)}\n`);
await writeFile(join(root, "content", "audit", "assets.json"), `${JSON.stringify([...assets.values()], null, 2)}\n`);
await writeFile(join(root, "content", "audit", "sitemap.txt"), `${pages.map((page) => page.url).join("\n")}\n`);

console.log(`Audited ${pages.length} pages from ${origin}`);
console.log("Wrote content/audit/pages.json, assets.json, and sitemap.txt");

function extractAttributes(html, tag, attr) {
  const values = [];
  const tagPattern = new RegExp(`<${tag}\\b[^>]*>`, "gi");
  const attrPattern = new RegExp(`${attr}\\s*=\\s*["']([^"']+)["']`, "i");
  for (const match of html.matchAll(tagPattern)) {
    const attrMatch = match[0].match(attrPattern);
    if (attrMatch?.[1]) values.push(attrMatch[1]);
  }
  return values;
}

function extractHeadings(html) {
  return [...html.matchAll(/<h([1-3])[^>]*>([\s\S]*?)<\/h\1>/gi)].map((match) => ({
    level: Number(match[1]),
    text: cleanText(stripTags(match[2])),
  }));
}

function htmlToText(html) {
  return cleanText(
    stripTags(
      html
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<noscript[\s\S]*?<\/noscript>/gi, " "),
    ),
  );
}

function stripTags(value) {
  return value.replace(/<[^>]+>/g, " ");
}

function cleanText(value) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function matchContent(html, pattern) {
  const match = html.match(pattern);
  return match?.[1] ? cleanText(match[1]) : "";
}

function resolveUrl(value, base) {
  if (!value || value.startsWith("mailto:") || value.startsWith("tel:") || value.startsWith("#")) return null;
  try {
    const parsed = new URL(value, base);
    parsed.hash = "";
    return parsed.href;
  } catch {
    return null;
  }
}

function isLikelyPage(url) {
  return !/\.(zip|pdf|jpg|jpeg|png|gif|webp|svg|css|js|ico|xml)$/i.test(new URL(url).pathname);
}

function unique(values) {
  return [...new Set(values)];
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
