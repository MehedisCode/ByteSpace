import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Browse Courses — ByteSpace",
};

export default function SearchRoute() {
  return <PlaceholderPage title="Search Page" />;
}
