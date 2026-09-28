const GRID_SIZE = 120;
const LINE_COLOR = "rgba(255, 255, 255, 0.12)";

/** Subtle 120px blueprint grid rendered over the brand background. */
export function HeroGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(to right, ${LINE_COLOR} 2px, transparent 2px), linear-gradient(to bottom, ${LINE_COLOR} 2px, transparent 2px)`,
        backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
      }}
    />
  );
}
