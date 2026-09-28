import Image from "next/image";
import { FLOATING_CARDS, HERO_PHOTO } from "../hero.data";
import { FloatingCard } from "./FloatingCard";

/** Simplified stacked layout shown below the desktop breakpoint. */
export function HeroShowcaseMobile() {
  return (
    <div className="relative z-20 mt-8 flex flex-col items-center gap-6 px-6 pb-16 lg:hidden">
      <Image
        src={HERO_PHOTO.src}
        alt={HERO_PHOTO.alt}
        width={HERO_PHOTO.box.width}
        height={HERO_PHOTO.box.height}
        className="h-auto w-[300px] max-w-full"
      />
      <div className="flex w-full max-w-[360px] flex-col gap-4">
        {FLOATING_CARDS.map((card) => (
          <FloatingCard key={card.kind} data={card} className="w-full" />
        ))}
      </div>
    </div>
  );
}
