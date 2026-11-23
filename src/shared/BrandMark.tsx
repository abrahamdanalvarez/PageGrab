/**
 * The PageGrab brand mark: a page with a folded corner and a grab arrow on a
 * blue tile. Same artwork as the toolbar icon (scripts/generate-icons.mjs).
 * Brand colors are fixed, not themed, so the mark matches the toolbar icon.
 */
export function BrandMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" aria-hidden="true">
      <rect x="6" y="6" width="116" height="116" rx="28" fill="#1E40AF" />
      <path
        d="M38 24 H74 L96 46 V100 a6 6 0 0 1 -6 6 H38 a6 6 0 0 1 -6 -6 V30 a6 6 0 0 1 6 -6 Z"
        fill="#FFFFFF"
      />
      <path d="M74 24 V40 a6 6 0 0 0 6 6 H96 Z" fill="#93C5FD" />
      <g
        stroke="#1E40AF"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      >
        <path d="M64 52 V84" />
        <path d="M50 71 L64 85 L78 71" />
        <path d="M46 96 H82" />
      </g>
    </svg>
  );
}
