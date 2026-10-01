import type { Metadata } from "next";
import { SearchPage } from "@/modules/search";

export const metadata: Metadata = {
  title: "Browse Courses — ByteSpace",
  description:
    "Search and filter thousands of courses by level, category and relevance.",
};

export default function SearchRoute() {
  return (
    <main className="flex-1">
      <SearchPage />
    </main>
  );
}
