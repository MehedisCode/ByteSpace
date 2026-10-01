import { CourseCard } from "@/components/course-card";
import { SiteFooter } from "@/modules/home";
import { SearchFilterBar } from "@/modules/search";
import { CREATOR_COURSES } from "../creator.data";
import { CreatorHero } from "./CreatorHero";

export function CreatorProfilePage() {
  return (
    <>
      <CreatorHero />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1248px] px-6 pb-16 pt-10 lg:pt-[62px]">
          <SearchFilterBar />

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:mt-14">
            {CREATOR_COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
