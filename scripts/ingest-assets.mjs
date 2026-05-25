import { copyFile, mkdir, readdir, stat, writeFile } from "node:fs/promises";
import { extname, join, parse } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const sourceDir = join(root, "source-assets");
const targetDir = join(root, "public", "physicians");
const supported = new Set([".jpg", ".jpeg", ".png", ".webp", ".svg"]);

await mkdir(sourceDir, { recursive: true });
await mkdir(targetDir, { recursive: true });

const files = await readdir(sourceDir);
const manifest = [];

for (const file of files) {
  const source = join(sourceDir, file);
  const info = await stat(source);
  const ext = extname(file).toLowerCase();

  if (!info.isFile() || !supported.has(ext)) continue;

  const slug = slugify(parse(file).name);
  const targetName = `${slug}${ext === ".jpeg" ? ".jpg" : ext}`;
  await copyFile(source, join(targetDir, targetName));

  manifest.push({
    source: `source-assets/${file}`,
    publicPath: `/physicians/${targetName}`,
    suggestedSlug: slug,
  });
}

await writeFile(join(root, "content", "audit", "asset-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Copied ${manifest.length} asset(s) into public/physicians`);
console.log("Wrote content/audit/asset-manifest.json");

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
