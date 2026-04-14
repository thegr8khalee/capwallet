import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');
const MIN_SIZE = 50 * 1024; // only process SVGs >= 50KB
const WEBP_QUALITY = 75;

const base64ImgRe = /data:image\/(png|jpe?g);base64,([A-Za-z0-9+/=]+)/g;

const files = (await fs.readdir(PUBLIC_DIR)).filter((f) => f.endsWith('.svg'));

let totalBefore = 0;
let totalAfter = 0;
let processed = 0;

for (const file of files) {
  const full = path.join(PUBLIC_DIR, file);
  const stat = await fs.stat(full);
  if (stat.size < MIN_SIZE) continue;

  const svg = await fs.readFile(full, 'utf8');
  if (!svg.includes('data:image/')) continue;

  let changed = false;
  const replacements = [];
  for (const m of svg.matchAll(base64ImgRe)) {
    replacements.push(m);
  }
  if (replacements.length === 0) continue;

  let out = svg;
  for (const m of replacements) {
    const [whole, fmt, b64] = m;
    try {
      const buf = Buffer.from(b64, 'base64');
      const webp = await sharp(buf).webp({ quality: WEBP_QUALITY }).toBuffer();
      if (webp.length < buf.length) {
        const newData = `data:image/webp;base64,${webp.toString('base64')}`;
        out = out.replace(whole, newData);
        changed = true;
      }
    } catch (e) {
      console.warn(`  skip image in ${file}: ${e.message}`);
    }
  }

  if (changed) {
    const before = stat.size;
    await fs.writeFile(full, out);
    const after = (await fs.stat(full)).size;
    totalBefore += before;
    totalAfter += after;
    processed++;
    console.log(`${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`);
  }
}

console.log(
  `\nProcessed ${processed} files. Total: ${(totalBefore / 1024).toFixed(0)}KB → ${(totalAfter / 1024).toFixed(0)}KB (saved ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`
);
