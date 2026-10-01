import { TintedImage } from "@/components/tinted-image";
import { cn } from "@/lib/utils";

type Ornament = {
  x: number;
  y: number;
  size: number;
  src: string;
  tint: string;
  blend: "color" | "screen";
};

/** Frame offsets from the 1440 centre, matching Figma's CTA ornament group. */
const ORNAMENTS: Ornament[] = [
  { x: 360, y: 0, size: 188, src: "/figma/home/cone-2.png", tint: "#d4fb20", blend: "color" },
  { x: 390, y: 289, size: 330, src: "/figma/home/squiggle-lime.png", tint: "#d4fb20", blend: "color" },
  { x: -838, y: -162, size: 385, src: "/figma/home/zigzag.png", tint: "#d4fb20", blend: "color" },
  { x: -542, y: 5, size: 175, src: "/figma/home/zigzag.png", tint: "#f5f5f6", blend: "screen" },
  { x: -768, y: 225, size: 188, src: "/figma/home/cta-white-1.png", tint: "#f5f5f6", blend: "screen" },
  { x: -700, y: 299, size: 342, src: "/figma/home/cone-1.png", tint: "#d4fb20", blend: "color" },
  { x: 506, y: 6, size: 370, src: "/figma/home/cta-white-2.png", tint: "#f5f5f6", blend: "screen" },
];

type CtaOrnamentsProps = {
  className?: string;
};

export function CtaOrnaments({ className }: CtaOrnamentsProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-10", className)}
    >
      {ORNAMENTS.map((ornament) => (
        <div
          key={`${ornament.x}-${ornament.y}`}
          className="absolute"
          style={{
            left: `calc(50% + ${ornament.x}px)`,
            top: ornament.y,
            width: ornament.size,
            height: ornament.size,
          }}
        >
          <TintedImage
            src={ornament.src}
            tint={ornament.tint}
            blend={ornament.blend}
            className="h-full w-full"
            sizes={`${ornament.size}px`}
          />
        </div>
      ))}
    </div>
  );
}
