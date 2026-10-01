import type { FrameBox } from "@/lib/frame";

export const LOGIN_INTRO = {
  eyebrow: "Sign in with ease",
  description:
    "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  box: { x: 122, y: 120, width: 475, height: 98 } as FrameBox,
} as const;

export const LOGIN_FORM = {
  eyebrow: "Sign In",
  title: "Welcome Back",
  fields: [
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
  action: "Sign In",
  dividerLabel: "or",
  socials: [
    { provider: "facebook", label: "Sign in with Facebook" },
    { provider: "google", label: "Sign in with Google" },
  ],
  footerQuestion: "New user?",
  footerAction: "Create an account",
  box: { x: 741, y: 120, width: 579, height: 784 } as FrameBox,
} as const;
