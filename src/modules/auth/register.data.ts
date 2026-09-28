import type { FrameBox } from "@/lib/frame";
import type { Course } from "@/modules/home";

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

export const HAPPY_STUDENTS = {
  title: "Happy Students",
  score: "4.5",
  reviews: "(240)",
  badge: "2K+",
  box: { x: 348, y: 740, width: 258, height: 123 } as FrameBox,
} as const;

const COLLAGE_COURSE_BASE = {
  author: "by purepearl studio",
  rating: "4.5",
  level: "Beginner",
  badges: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
  price: "$25",
  priceSuffix: "/lifetime",
};

/** Two course cards layered into the left collage (register-specific art). */
export const COLLAGE_COURSES: { course: Course; box: FrameBox }[] = [
  {
    course: {
      ...COLLAGE_COURSE_BASE,
      slug: "build-digital-asset",
      title: "Build Digital Asset",
      image: "/figma/register/course-dashboard.jpg",
    },
    box: { x: 122, y: 394, width: 373, height: 384 },
  },
  {
    course: {
      ...COLLAGE_COURSE_BASE,
      slug: "the-power-of-big-data",
      title: "the Power of Big Data",
      image: "/figma/register/course-design-tools.jpg",
    },
    box: { x: 233, y: 305, width: 373, height: 384 },
  },
];

export type RegisterOrnament = {
  src: string;
  /** Tint applied over the grayscale 3D render (Figma's overlay colour). */
  tint: string;
  /** How the tint is blended: `color` for saturated tints, `screen` for light. */
  blend: "color" | "screen";
  box: FrameBox;
};

export const COLLAGE_ORNAMENTS: RegisterOrnament[] = [
  {
    src: "/figma/register/cone-1.png",
    tint: "#d4fb20",
    blend: "color",
    box: { x: 151, y: 320, width: 146, height: 146 },
  },
  {
    src: "/figma/register/cone-2.png",
    tint: "#d4fb20",
    blend: "color",
    box: { x: 97, y: 702, width: 188, height: 188 },
  },
  {
    src: "/figma/register/zigzag.png",
    tint: "#f5f5f6",
    blend: "screen",
    box: { x: 470, y: 626, width: 175, height: 175 },
  },
];

export const HAPPY_STUDENT_AVATARS = Array.from(
  { length: 7 },
  (_, index) => `/figma/hero/avatar-${index + 1}.png`,
);
