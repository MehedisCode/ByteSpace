import { cn } from "@/lib/utils";
import { ORNAMENTS } from "../hero.data";
import { FrameImage } from "./FrameImage";

type HeroOrnamentsProps = {
  className?: string;
};

/** Scattered 3D shapes that frame the hero. */
export function HeroOrnaments({ className }: HeroOrnamentsProps) {
  return (
    <FrameImage
      asset={ORNAMENTS}
      className={cn("pointer-events-none z-10 select-none", className)}
    />
  );
}
