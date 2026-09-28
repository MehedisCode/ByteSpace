import { cn } from "@/lib/utils";
import { LIME_RING } from "../hero.data";
import { frameLeft } from "../hero.layout";

type HeroLimeRingProps = {
  className?: string;
};

/** Decorative lime ring sitting behind the hero photo. */
export function HeroLimeRing({ className }: HeroLimeRingProps) {
  const { box, borderWidth } = LIME_RING;

  return (
    <div
      aria-hidden
      className={cn("absolute rounded-full", className)}
      style={{
        left: frameLeft(box),
        top: box.y,
        width: box.width,
        height: box.height,
        border: `${borderWidth}px solid var(--color-accent-strong)`,
      }}
    />
  );
}
