/**
 * Figma "smooth shadow" stack used on the floating composites — 8 stacked
 * black drop-shadows (small, tight to very large/soft).
 */
const SHADOWS: Array<{ r: number; x: number; y: number; a: number }> = [
  { r: 3.04, x: 1, y: 1, a: 0.04 },
  { r: 5.72, x: 2, y: 3, a: 0.06 },
  { r: 9.57, x: 5, y: 8, a: 0.07 },
  { r: 16.09, x: 10, y: 15, a: 0.08 },
  { r: 24, x: 17, y: 24, a: 0.09 },
  { r: 36, x: 26, y: 37, a: 0.1 },
  { r: 56, x: 37, y: 53, a: 0.105 },
  { r: 72, x: 51, y: 73, a: 0.13 },
];

export const FLOATING_SHADOW_FILTER = SHADOWS.map(
  ({ r, x, y, a }) =>
    `drop-shadow(${x}px ${y}px ${r}px rgba(0,0,0,${a}))`,
).join(" ");
