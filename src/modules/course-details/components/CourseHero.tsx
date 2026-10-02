import Link from "next/link";
import { creatorProfile } from "@/config/routes";
import { HeroGrid, HeroHeader } from "@/modules/hero";
import { COURSE_DETAILS } from "../course-details.data";
import { LevelIcon, ShareIcon, StarIcon, StudentsIcon } from "./icons";

const META_ICONS = {
  level: LevelIcon,
  rating: StarIcon,
  students: StudentsIcon,
} as const;

export function CourseHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand lg:h-[957px]">
      <HeroGrid />

      <div className="relative z-20 mx-auto w-full max-w-[1440px]">
        <HeroHeader />

        <div className="flex flex-col gap-8 px-6 pt-10 lg:flex-row lg:items-start lg:justify-between lg:px-[122px] lg:pt-[52px]">
          <div className="max-w-[820px]">
            <h1 className="font-display text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px] lg:whitespace-nowrap">
              {COURSE_DETAILS.title}
            </h1>
            <p className="mt-3 font-display text-lg font-semibold text-white sm:text-xl">
              {COURSE_DETAILS.subtitle}
            </p>
            <p className="mt-3 font-sans text-lg font-medium text-subtitle">
              by{" "}
              <Link
                href={creatorProfile(COURSE_DETAILS.creatorSlug)}
                className="text-accent transition-opacity hover:opacity-75"
              >
                {COURSE_DETAILS.author}
              </Link>
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {COURSE_DETAILS.meta.map((item) => {
                const Icon = META_ICONS[item.key];
                return (
                  <span
                    key={item.key}
                    className="flex h-10 items-center gap-2 rounded-[20px] bg-white/90 px-4 font-sans text-base font-medium text-ink backdrop-blur"
                  >
                    <Icon className="size-6 text-brand" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="flex h-10 shrink-0 items-center gap-2 self-start rounded-[20px] bg-accent px-4 font-sans text-base font-medium text-ink transition-colors hover:bg-accent-strong"
          >
            <ShareIcon className="size-6" />
            {COURSE_DETAILS.share}
          </button>
        </div>
      </div>
    </section>
  );
}
