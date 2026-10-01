import { CourseShell } from "@/modules/course-details";
import { LessonsMain } from "./LessonsMain";

type LessonsPageProps = {
  slug: string;
};

export function LessonsPage({ slug }: LessonsPageProps) {
  return (
    <CourseShell slug={slug}>
      <LessonsMain slug={slug} />
    </CourseShell>
  );
}
