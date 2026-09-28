import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Courses — ByteSpace",
};

export default function CoursesRoute() {
  return <PlaceholderPage title="Courses" />;
}
