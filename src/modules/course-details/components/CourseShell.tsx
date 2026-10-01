import type { ReactNode } from "react";
import { SiteFooter } from "@/modules/home";
import { CourseHero } from "./CourseHero";
import { CoursePreviewImage } from "./CoursePreviewImage";
import { EnrollCard } from "./EnrollCard";

type CourseShellProps = {
  slug: string;
  children: ReactNode;
};

/** Shared layout for the course detail/lessons/reviews pages. */
export function CourseShell({ slug, children }: CourseShellProps) {
  return (
    <>
      <CourseHero />

      <section className="relative z-30 flow-root bg-white">
        <div className="mx-auto w-full max-w-[1248px] px-6 pb-16 lg:-mt-[541px] lg:pb-[100px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_412px] lg:gap-[68px]">
            <div className="min-w-0">
              <CoursePreviewImage />
              <div className="mt-10 lg:mt-[125px]">{children}</div>
            </div>

            <EnrollCard
              slug={slug}
              className="lg:sticky lg:top-6 lg:self-start"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
