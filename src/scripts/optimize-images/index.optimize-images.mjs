import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const INPUT_DIR = "public/products";
const WIDTHS = [320, 640, 960, 1280];

const isImage = (name) => /\.(png|jpe?g|webp|avif)$/i.test(name);

async function processImage(filePath, baseName, outDir) {
  const buffer = fs.readFileSync(filePath);
  for (const w of WIDTHS) {
    // AVIF
    await sharp(buffer)
      .resize({ width: w })
      .avif({ quality: 28 })
      .toFile(path.join(outDir, `${baseName}-${w}.avif`));
    // WebP
    await sharp(buffer)
      .resize({ width: w })
      .webp({ quality: 75 })
      .toFile(path.join(outDir, `${baseName}-${w}.webp`));
    // JPEG (fallback antigo – opcional)
    await sharp(buffer)
      .resize({ width: w })
      .jpeg({ quality: 75 })
      .toFile(path.join(outDir, `${baseName}-${w}.jpg`));
  }
}

function baseFromFilename(name) {
  return name.replace(/\.(png|jpe?g|webp|avif)$/i, "");
}

async function run() {
  const entries = fs.readdirSync(INPUT_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isFile() && isImage(entry.name)) {
      const base = baseFromFilename(entry.name);
      const outDir = path.join(INPUT_DIR, base);
      fs.mkdirSync(outDir, { recursive: true });
      await processImage(path.join(INPUT_DIR, entry.name), base, outDir);
      console.log(`✓ Gerado: ${base} (AVIF/WebP/JPG em várias larguras)`);
    }
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
