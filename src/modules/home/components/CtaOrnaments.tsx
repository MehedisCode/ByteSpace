import { MaskedOrnament } from "@/components/masked-ornament";
import { cn } from "@/lib/utils";

type Ornament = {
  x: number;
  y: number;
  size: number;
  src: string;
  color: string;
};

/** Frame offsets from the 1440 centre, matching Figma's CTA ornament group. */
const ORNAMENTS: Ornament[] = [
  { x: 360, y: 0, size: 188, src: "/figma/home/cone-2.png", color: "#d4fb20" },
  { x: 390, y: 289, size: 330, src: "/figma/home/squiggle-lime.png", color: "#d4fb20" },
  { x: -838, y: -162, size: 385, src: "/figma/home/zigzag.png", color: "#d4fb20" },
  { x: -542, y: 5, size: 175, src: "/figma/home/zigzag.png", color: "#f5f5f6" },
  { x: -768, y: 225, size: 188, src: "/figma/home/cta-white-1.png", color: "#f5f5f6" },
  { x: -700, y: 299, size: 342, src: "/figma/home/cone-1.png", color: "#d4fb20" },
  { x: 506, y: 6, size: 370, src: "/figma/home/cta-white-2.png", color: "#f5f5f6" },
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
          <MaskedOrnament
            src={ornament.src}
            color={ornament.color}
            className="h-full w-full"
          />
        </div>
      ))}
    </div>
  );
}
