import { access, stat } from "node:fs/promises";
import { watches } from "../src/data/watches.js";
import { collections } from "../src/data/collections.js";
import { brandAssets, campaignAssets, detailAssets } from "../src/data/assets.js";

const root = new URL("../", import.meta.url);
const failures = [];

async function validateFile(publicPath, label = publicPath) {
  const relative = publicPath.startsWith("/") ? `public${publicPath}` : publicPath;
  const file = new URL(relative, root);
  try {
    await access(file);
    const fileStat = await stat(file);
    if (!fileStat.isFile() || fileStat.size === 0) failures.push(`${label} is empty or not a file`);
  } catch {
    failures.push(`${label} is missing (${relative})`);
  }
}

const ids = watches.map(({ id }) => id);
const references = watches.map(({ reference }) => reference);
if (watches.length !== 24) failures.push(`Expected 24 watches, found ${watches.length}`);
if (collections.length !== 6) failures.push(`Expected 6 collections, found ${collections.length}`);
if (new Set(ids).size !== ids.length) failures.push("Watch IDs are not unique");
if (new Set(references).size !== references.length) failures.push("Reference codes are not unique");

for (const collection of collections) {
  const count = watches.filter((item) => item.collectionId === collection.id).length;
  if (count !== 4) failures.push(`${collection.name} must contain four watches; found ${count}`);
  await validateFile(collection.heroImage, `${collection.name} collection image`);
}

for (const item of watches) {
  if (!item.width || !item.height) failures.push(`${item.id} is missing image dimensions`);
  if (!item.cardColor || !item.textColor || !item.accentColor) failures.push(`${item.id} is missing card colors`);
  if (/^https?:\/\//.test(item.image) || /^https?:\/\//.test(item.frontImage)) failures.push(`${item.id} uses a remote image URL`);
  await validateFile(item.image, `${item.id} main render`);
  await validateFile(item.frontImage, `${item.id} front render`);
  await validateFile(item.fallbackImage, `${item.id} SVG fallback`);
}

for (const [name, asset] of Object.entries(brandAssets)) await validateFile(asset, `Brand asset: ${name}`);
for (const asset of detailAssets) await validateFile(asset);
for (const asset of campaignAssets) await validateFile(asset);

for (const name of ["meridian-crystal", "meridian-hands", "meridian-dial", "meridian-chapter-ring", "meridian-movement", "meridian-case", "meridian-caseback", "meridian-crown", "meridian-strap-left", "meridian-strap-right"]) await validateFile(`/images/exploded/${name}.webp`);
await validateFile("/images/exploded/meridian-exploded-no-straps.png", "Strap-free photorealistic Meridian exploded render");
for (const name of ["dial-ticks", "orbital-grid", "timing-grid", "lume-indices", "pressure-lines", "tachymeter-ring", "elevation-lines", "prism-rings", "machining-lines", "noise"]) await validateFile(`/textures/${name}.svg`);

await validateFile("src/app/icon.svg", "SVG favicon");
await validateFile("src/app/favicon.ico", "ICO favicon");
await validateFile("src/app/apple-icon.png", "Apple touch icon");
await validateFile("public/brand/orvyn-social-avatar.svg", "Apple/social icon");
await validateFile("public/opengraph-image.png", "Open Graph image");

if (failures.length) {
  console.error(`Asset validation failed with ${failures.length} issue${failures.length === 1 ? "" : "s"}:`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Asset validation passed: 6 collections, 24 watches, 48 product renders, and every required supporting asset are present.");
