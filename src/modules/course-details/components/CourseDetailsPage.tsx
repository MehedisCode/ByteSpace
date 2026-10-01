import Image from "next/image";
import { SiteFooter } from "@/modules/home";
import { COURSE_DETAILS } from "../course-details.data";
import { CourseHero } from "./CourseHero";
import { CourseMain } from "./CourseMain";
import { EnrollCard } from "./EnrollCard";

export function CourseDetailsPage() {
  return (
    <>
      <CourseHero />

      <section className="relative z-30 bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-6 pb-16 lg:-mt-[541px] lg:pb-[100px]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_412px] lg:gap-[68px]">
            <div className="min-w-0">
              <Image
                src={COURSE_DETAILS.heroImage}
                alt={COURSE_DETAILS.title}
                width={720}
                height={479}
                priority
                className="h-auto w-full rounded-[24px] object-cover"
              />

              <div className="mt-10 lg:mt-[62px]">
                <CourseMain />
              </div>
            </div>

            <EnrollCard className="lg:sticky lg:top-6 lg:self-start" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
