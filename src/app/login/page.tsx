import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
};

export default function LoginRoute() {
  return <PlaceholderPage title="Login" />;
}
