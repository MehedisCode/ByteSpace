/** Figma radial glow: solid at the centre, fading to transparent. */
export function radialGlow(rgb: string, opacity: number): string {
  return `radial-gradient(closest-side, rgba(${rgb},${opacity}) 0%, rgba(${rgb},${opacity * 0.23}) 53%, rgba(${rgb},${opacity * 0.06}) 75%, rgba(${rgb},0) 100%)`;
}
