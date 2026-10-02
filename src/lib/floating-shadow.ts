/**
 * Figma "smooth shadow" stack — reduced from 8 to 4 layers for performance.
 * Keeps the largest shadows for visual impact.
 */
const SHADOWS: Array<{ r: number; x: number; y: number; a: number }> = [
  { r: 16.09, x: 10, y: 15, a: 0.08 },
  { r: 24, x: 17, y: 24, a: 0.09 },
  { r: 36, x: 26, y: 37, a: 0.1 },
  { r: 56, x: 37, y: 53, a: 0.105 },
];

export const FLOATING_SHADOW_FILTER = SHADOWS.map(
  ({ r, x, y, a }) =>
    `drop-shadow(${x}px ${y}px ${r}px rgba(0,0,0,${a}))`,
).join(" ");
