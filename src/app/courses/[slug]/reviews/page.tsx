import type { Metadata } from "next";
import { ReviewsMain } from "@/modules/course-reviews";

export const metadata: Metadata = {
  title: "Course Reviews — ByteSpace",
  description: "Read what students say about this course.",
};

type CourseReviewsProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseReviewsRoute({
  params,
}: CourseReviewsProps) {
  const { slug } = await params;

  return <ReviewsMain slug={slug} />;
}
