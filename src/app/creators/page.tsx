import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Creators — ByteSpace",
};

export default function CreatorsRoute() {
  return <PlaceholderPage title="Creators" />;
}
