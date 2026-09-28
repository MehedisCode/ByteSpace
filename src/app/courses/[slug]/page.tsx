import { PlaceholderPage } from "@/components/PlaceholderPage";

type CourseDetailsProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseDetailsRoute({
  params,
}: CourseDetailsProps) {
  const { slug } = await params;

  return (
    <PlaceholderPage
      title="Course Details"
      description={`Details for "${slug}" are coming soon.`}
    />
  );
}
