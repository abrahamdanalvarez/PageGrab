// Generates the extension icons (16/48/128 px) from a single SVG source.
// Run with: npm run icons
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const outDir = 'public/icons';

/**
 * PageGrab mark: a page with a folded corner and a grab arrow on a blue tile.
 * Keep in sync with src/shared/BrandMark.tsx.
 */
function svg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <rect x="6" y="6" width="116" height="116" rx="28" fill="#1E40AF"/>
  <path d="M38 24 H74 L96 46 V100 a6 6 0 0 1 -6 6 H38 a6 6 0 0 1 -6 -6 V30 a6 6 0 0 1 6 -6 Z" fill="#FFFFFF"/>
  <path d="M74 24 V40 a6 6 0 0 0 6 6 H96 Z" fill="#93C5FD"/>
  <g stroke="#1E40AF" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M64 52 V84"/>
    <path d="M50 71 L64 85 L78 71"/>
    <path d="M46 96 H82"/>
  </g>
</svg>`;
}

await mkdir(outDir, { recursive: true });

for (const size of [16, 48, 128]) {
  await sharp(Buffer.from(svg())).resize(size, size).png().toFile(`${outDir}/icon${size}.png`);
  console.log(`✓ generated ${outDir}/icon${size}.png`);
}

console.log('Icons generated.');
