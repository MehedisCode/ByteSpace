import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type MaskedOrnamentProps = {
  src: string;
  /** Flat silhouette colour; the render only contributes its alpha mask. */
  color: string;
  className?: string;
};

/** Flat-coloured Figma ornament, masked by the render's alpha. */
export function MaskedOrnament({
  src,
  color,
  className,
}: MaskedOrnamentProps) {
  const mask = {
    maskImage: `url(${src})`,
    maskSize: "contain",
    maskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskImage: `url(${src})`,
    WebkitMaskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
  } satisfies CSSProperties;

  return (
    <span
      aria-hidden
      className={cn("block", className)}
      style={{ backgroundColor: color, ...mask }}
    />
  );
}
