import type { Metadata } from "next";
import { CourseMain } from "@/modules/course-details";

export const metadata: Metadata = {
  title: "Course — ByteSpace",
  description:
    "Course overview, curriculum highlights and creator details on ByteSpace.",
};

type CourseDetailsProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseDetailsRoute({
  params,
}: CourseDetailsProps) {
  const { slug } = await params;

  return <CourseMain slug={slug} />;
}
