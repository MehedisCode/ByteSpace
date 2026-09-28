import type { Metadata } from "next";
import { LoginPage } from "@/modules/auth";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
  description:
    "Sign in to ByteSpace and get instant access to your courses and creators.",
};

export default function LoginRoute() {
  return (
    <main className="flex-1">
      <LoginPage />
    </main>
  );
}
