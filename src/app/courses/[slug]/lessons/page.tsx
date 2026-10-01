import type { Metadata } from "next";
import { LessonsPage } from "@/modules/course-lessons";

export const metadata: Metadata = {
  title: "Course Lessons — ByteSpace",
  description:
    "Explore the course modules, lesson content and your learning progress.",
};

export default function CourseLessonsRoute() {
  return (
    <main className="flex-1">
      <LessonsPage />
    </main>
  );
}
