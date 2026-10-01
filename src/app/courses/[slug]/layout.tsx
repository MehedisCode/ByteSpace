import type { ReactNode } from "react";
import { CourseShell } from "@/modules/course-details";

type CourseLayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

/**
 * Shared shell for the course pages: the hero, preview image, enroll sidebar
 * and footer render once, and only the tab content below swaps between
 * /courses/[slug], /lessons and /reviews.
 */
export default async function CourseLayout({
  children,
  params,
}: CourseLayoutProps) {
  const { slug } = await params;

  return <CourseShell slug={slug}>{children}</CourseShell>;
}
