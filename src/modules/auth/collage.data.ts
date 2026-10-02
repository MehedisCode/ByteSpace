import { DEFAULT_CREATOR_SLUG } from "@/config/creators";
import type { FrameBox } from "@/lib/frame";
import type { Course } from "@/modules/home";

export const HAPPY_STUDENTS = {
  title: "Happy Students",
  score: "4.5",
  reviews: "(240)",
  badge: "2K+",
  box: { x: 348, y: 740, width: 258, height: 123 } as FrameBox,
} as const;

export const HAPPY_STUDENT_AVATARS = Array.from(
  { length: 7 },
  (_, index) => `/figma/hero/avatar-${index + 1}.png`,
);

const COLLAGE_COURSE_BASE = {
  author: "by purepearl studio",
  creatorSlug: DEFAULT_CREATOR_SLUG,
  rating: "4.5",
  level: "Beginner",
  badges: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
  price: "$25",
  priceSuffix: "/lifetime",
};

/** Two course cards layered into the auth collage (shared by Login/Register). */
export const COLLAGE_COURSES: { course: Course; box: FrameBox }[] = [
  {
    course: {
      ...COLLAGE_COURSE_BASE,
      slug: "build-digital-asset",
      title: "Build Digital Asset",
      image: "/figma/courses/course-2.jpg",
    },
    box: { x: 122, y: 394, width: 373, height: 384 },
  },
  {
    course: {
      ...COLLAGE_COURSE_BASE,
      slug: "the-power-of-big-data",
      title: "the Power of Big Data",
      image: "/figma/courses/course-3.jpg",
    },
    box: { x: 233, y: 305, width: 373, height: 384 },
  },
];

type CollageOrnament = {
  src: string;
  /** Flat silhouette colour applied over the render's alpha mask. */
  color: string;
  box: FrameBox;
};

export const COLLAGE_ORNAMENTS: CollageOrnament[] = [
  {
    src: "/figma/home/cone-1.png",
    color: "#d4fb20",
    box: { x: 151, y: 320, width: 146, height: 146 },
  },
  {
    src: "/figma/home/cone-2.png",
    color: "#d4fb20",
    box: { x: 97, y: 702, width: 188, height: 188 },
  },
  {
    src: "/figma/home/zigzag.png",
    color: "#f5f5f6",
    box: { x: 470, y: 626, width: 175, height: 175 },
  },
];
