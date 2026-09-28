import { COURSES } from "../home.data";
import { CourseCard } from "./CourseCard";

export function CourseGrid() {
  return (
    <section className="bg-white pt-16 lg:pt-[92px]">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </section>
  );
}
