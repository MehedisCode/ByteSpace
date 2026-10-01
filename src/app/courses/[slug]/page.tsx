import { CourseDetailsPage } from "@/modules/course-details";

type CourseDetailsProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseDetailsRoute({
  params,
}: CourseDetailsProps) {
  const { slug } = await params;

  return (
    <main className="flex-1">
      <CourseDetailsPage slug={slug} />
    </main>
  );
}
