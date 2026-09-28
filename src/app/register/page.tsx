import type { Metadata } from "next";
import { RegisterPage } from "@/modules/auth";

export const metadata: Metadata = {
  title: "Create an Account — ByteSpace",
  description:
    "Sign up for ByteSpace quickly, easily, and at no cost to start learning.",
};

export default function RegisterRoute() {
  return (
    <main className="flex-1">
      <RegisterPage />
    </main>
  );
}
