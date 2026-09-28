import type { FrameBox } from "@/lib/frame";

export const REGISTER_INTRO = {
  eyebrow: "Sign up and come in",
  description:
    "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
  box: { x: 122, y: 120, width: 475, height: 127 } as FrameBox,
} as const;

export const REGISTER_FORM = {
  eyebrow: "Create an Account",
  title: "Welcome to ByteSpace",
  fields: [
    { name: "name", label: "Full Name", placeholder: "Jamie Davis", type: "text" },
    {
      name: "email",
      label: "Email",
      placeholder: "designer@example.com",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "********",
      type: "password",
    },
  ],
  action: "Continue",
  footerQuestion: "Already have an account?",
  footerAction: "Login",
  box: { x: 741, y: 120, width: 579, height: 784 } as FrameBox,
} as const;
