import sharp from 'sharp';
import { readFileSync, existsSync, mkdirSync } from 'fs';
import { join, basename } from 'path';

const THUMB_SIZE = 600;
const PHOTOS_FILE = join(import.meta.dirname, '..', 'src', 'data', 'photos.ts');
const PUBLIC_DIR = join(import.meta.dirname, '..', 'public');
const THUMBS_DIR = join(PUBLIC_DIR, 'images', 'thumbs');

mkdirSync(THUMBS_DIR, { recursive: true });

const src = readFileSync(PHOTOS_FILE, 'utf-8');
const urls = [...src.matchAll(/imageUrl:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);

let created = 0;
let skipped = 0;

for (const url of urls) {
  const filename = basename(url);
  const thumbPath = join(THUMBS_DIR, filename);
  const srcPath = join(PUBLIC_DIR, url);

  if (existsSync(thumbPath)) {
    skipped++;
    continue;
  }

  if (!existsSync(srcPath)) {
    console.warn(`  SKIP  ${url} (source not found)`);
    continue;
  }

  try {
    await sharp(srcPath)
      .resize(THUMB_SIZE, THUMB_SIZE, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toFile(thumbPath);

    console.log(`  THUMB  ${filename}`);
    created++;
  } catch (err) {
    console.warn(`  ERROR  ${filename}: ${err.message}`);
  }
}

console.log(`\nDone: ${created} created, ${skipped} already existed.`);
