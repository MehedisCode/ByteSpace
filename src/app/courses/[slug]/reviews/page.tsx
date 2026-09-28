import { PlaceholderPage } from "@/components/PlaceholderPage";

type CourseReviewsProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseReviewsRoute({
  params,
}: CourseReviewsProps) {
  const { slug } = await params;

  return (
    <PlaceholderPage
      title="Course Reviews"
      description={`Reviews for "${slug}" are coming soon.`}
    />
  );
}
