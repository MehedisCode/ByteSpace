import { CourseMain } from "./CourseMain";
import { CourseShell } from "./CourseShell";

type CourseDetailsPageProps = {
  slug: string;
};

export function CourseDetailsPage({ slug }: CourseDetailsPageProps) {
  return (
    <CourseShell slug={slug}>
      <CourseMain slug={slug} />
    </CourseShell>
  );
}
