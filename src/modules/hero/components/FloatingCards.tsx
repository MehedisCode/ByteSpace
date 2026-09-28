import { cn } from "@/lib/utils";
import { FLOATING_CARDS } from "../hero.data";
import { frameBoxStyle } from "../hero.layout";
import { FloatingCard } from "./FloatingCard";

type FloatingCardsProps = {
  className?: string;
};

/** Desktop-only layer of absolutely positioned stat cards. */
export function FloatingCards({ className }: FloatingCardsProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-20", className)}
    >
      {FLOATING_CARDS.map((card) => (
        <div
          key={card.kind}
          className="absolute"
          style={frameBoxStyle(card.box)}
        >
          <FloatingCard data={card} className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}
