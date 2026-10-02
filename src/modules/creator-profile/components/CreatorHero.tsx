import Image from "next/image";
import { HeroGrid, HeroHeader } from "@/modules/hero";
import { CREATOR } from "../creator.data";

export function CreatorHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand lg:h-[592px]">
      <HeroGrid />

      <div className="relative z-20 mx-auto w-full max-w-[1440px]">
        <HeroHeader />

        <div className="flex flex-col gap-10 px-6 pt-10 lg:px-[122px] lg:pt-[52px]">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-6">
              <Image
                src={CREATOR.avatar}
                alt={CREATOR.name}
                width={96}
                height={96}
                priority
                className="size-24 shrink-0 rounded-[24px] object-cover"
              />
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="font-display text-[28px] font-semibold text-white sm:text-[36px]">
                    {CREATOR.name}
                  </h1>
                  <span className="flex h-[35px] items-center rounded-pill bg-accent px-4 font-sans text-base font-medium text-ink">
                    {CREATOR.badge}
                  </span>
                </div>
                <p className="mt-1 font-sans text-lg text-subtitle">
                  {CREATOR.role}
                </p>
              </div>
            </div>

            <p className="max-w-[1197px] whitespace-pre-line font-sans text-lg leading-relaxed text-subtitle">
              {CREATOR.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {CREATOR.stats.map((stat) => (
                <span
                  key={stat.label}
                  className="flex h-[46px] items-center gap-1.5 rounded-pill bg-white px-5 font-sans text-lg font-medium"
                >
                  <span className="text-brand">{stat.value}</span>
                  <span className="text-ink">{stat.label}</span>
                </span>
              ))}
            </div>

            <button
              type="button"
              className="h-[46px] shrink-0 rounded-pill bg-accent px-6 font-sans text-lg font-medium text-navy transition-colors hover:bg-accent-strong"
            >
              {CREATOR.follow}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
