import Image from "next/image";
import { HeroGrid } from "@/modules/hero";
import { CREATOR_CTA } from "../home.data";

export function CreatorCta() {
  return (
    <section className="relative isolate overflow-hidden bg-brand">
      <HeroGrid />

      <Image
        src={CREATOR_CTA.ornaments}
        alt=""
        width={1723}
        height={805}
        className="pointer-events-none absolute top-[-162px] left-[calc(50%_-_838px)] z-10 hidden max-w-none select-none lg:block"
      />

      <div className="relative z-20 mx-auto flex w-full max-w-[964px] flex-col items-center px-6 py-20 text-center lg:min-h-[488px] lg:justify-center lg:py-0">
        <h2 className="font-display text-[32px] font-semibold leading-[1.15] text-white lg:text-[44px]">
          {CREATOR_CTA.heading}
        </h2>
        <p className="mt-6 font-sans text-base leading-relaxed text-subtitle lg:text-lg">
          {CREATOR_CTA.subtitle}
        </p>
        <button
          type="button"
          className="mt-8 rounded-pill bg-accent px-6 py-3 font-sans text-lg font-medium text-ink transition-colors hover:bg-accent-strong"
        >
          {CREATOR_CTA.action}
        </button>
      </div>
    </section>
  );
}
