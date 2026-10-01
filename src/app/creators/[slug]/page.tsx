import type { Metadata } from "next";
import { CreatorProfilePage } from "@/modules/creator-profile";

export const metadata: Metadata = {
  title: "Creator Profile — ByteSpace",
  description:
    "Explore the creator's portfolio, courses, followers and more on ByteSpace.",
};

export default function CreatorProfileRoute() {
  return (
    <main className="flex-1">
      <CreatorProfilePage />
    </main>
  );
}
