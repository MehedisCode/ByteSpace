import type { Metadata } from "next";
import { LessonsMain } from "@/modules/course-lessons";

export const metadata: Metadata = {
  title: "Course Lessons — ByteSpace",
  description:
    "Explore the course modules, lesson content and your learning progress.",
};

type CourseLessonsProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseLessonsRoute({
  params,
}: CourseLessonsProps) {
  const { slug } = await params;

  return <LessonsMain slug={slug} />;
}
