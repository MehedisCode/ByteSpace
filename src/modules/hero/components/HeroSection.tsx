import { FloatingCards } from "./FloatingCards";
import { HeroContent } from "./HeroContent";
import { HeroGrid } from "./HeroGrid";
import { HeroHeader } from "./HeroHeader";
import { HeroLimeRing } from "./HeroLimeRing";
import { HeroOrnaments } from "./HeroOrnaments";
import { HeroPhoto } from "./HeroPhoto";
import { HeroShowcaseMobile } from "./HeroShowcaseMobile";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand">
      <HeroGrid />

      <div className="relative mx-auto w-full max-w-[1440px] lg:h-[1024px]">
        <HeroLimeRing className="hidden lg:block" />
        <HeroOrnaments className="hidden lg:block" />
        <HeroPhoto className="hidden lg:block" />

        <HeroHeader />
        <HeroContent />

        <FloatingCards className="hidden lg:block" />
        <HeroShowcaseMobile />
      </div>
    </section>
  );
}
