import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const auditDir = join(root, "content", "audit");
const outputDir = join(root, "public", "scraped-assets");
const manifestPath = join(auditDir, "downloaded-assets.json");

const assets = JSON.parse(await readFile(join(auditDir, "assets.json"), "utf8"));
await mkdir(outputDir, { recursive: true });

const downloaded = [];

for (const [index, asset] of assets.entries()) {
  const url = asset.url;

  try {
    const response = await fetch(url, {
      headers: {
        "user-agent": "EmergencyPhysiciansPreviewAssetCollector/1.0",
      },
    });

    if (!response.ok) {
      downloaded.push({ url, ok: false, status: response.status });
      continue;
    }

    const contentType = response.headers.get("content-type") ?? "";
    const sourceName = decodeURIComponent(basename(new URL(url).pathname));
    const ext = extensionFor(sourceName, contentType);
    const fileName = `${String(index + 1).padStart(2, "0")}-${slugify(sourceName.replace(extname(sourceName), ""))}${ext}`;
    const bytes = Buffer.from(await response.arrayBuffer());

    await writeFile(join(outputDir, fileName), bytes);

    downloaded.push({
      url,
      ok: true,
      contentType,
      bytes: bytes.length,
      publicPath: `/scraped-assets/${fileName}`,
      seenOn: asset.seenOn,
    });
  } catch (error) {
    downloaded.push({
      url,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

await writeFile(manifestPath, `${JSON.stringify(downloaded, null, 2)}\n`);
console.log(`Downloaded ${downloaded.filter((item) => item.ok).length} of ${assets.length} asset(s).`);
console.log("Wrote public/scraped-assets and content/audit/downloaded-assets.json");

function extensionFor(fileName, contentType) {
  if (contentType.includes("png")) return ".png";
  if (contentType.includes("webp")) return ".webp";
  if (contentType.includes("jpeg") || contentType.includes("jpg")) return ".jpg";
  if (contentType.includes("svg")) return ".svg";
  const current = extname(fileName).toLowerCase();
  if (current) return current;
  return ".asset";
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 90);
}
