import { PlaceholderPage } from "@/components/PlaceholderPage";

type CourseLessonsProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseLessonsRoute({
  params,
}: CourseLessonsProps) {
  const { slug } = await params;

  return (
    <PlaceholderPage
      title="Course Lessons"
      description={`Lessons for "${slug}" are coming soon.`}
    />
  );
}
