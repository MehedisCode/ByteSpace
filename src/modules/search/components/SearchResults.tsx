import { CourseCard } from "@/components/course-card";
import { SEARCH_RESULTS } from "../search.data";

export function SearchResults() {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {SEARCH_RESULTS.map((course, index) => (
        <CourseCard key={`${course.slug}-${index}`} course={course} />
      ))}
    </div>
  );
}
