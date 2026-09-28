import { HERO_COPY } from "../hero.data";
import { HeroSearchBar } from "./HeroSearchBar";

export function HeroContent() {
  return (
    <div className="relative z-20 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 pt-10 text-center lg:pt-[49px]">
      <h1 className="max-w-[935px] font-display text-[40px] font-semibold leading-[1.12] text-white sm:text-[56px] lg:text-[72px]">
        {HERO_COPY.title}
      </h1>
      <p className="mt-5 max-w-[819px] font-sans text-base text-subtitle sm:text-lg lg:mt-8">
        {HERO_COPY.subtitle}
      </p>
      <HeroSearchBar className="mt-8 lg:mt-[60px]" />
    </div>
  );
}
