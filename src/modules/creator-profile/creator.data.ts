import type { Course } from "@/modules/home";

export const CREATOR = {
  name: "PurePearl Studio",
  badge: "Creator",
  role: "Passionate UI/UX, Web designer",
  description:
    "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  avatar: "/figma/hero/avatar-2.png",
  stats: [
    { value: "3", label: "Products" },
    { value: "12", label: "Followers" },
  ],
  follow: "Follow",
} as const;

const COURSE_BASE = {
  author: "by purepearl studio",
  rating: "4.5",
  level: "Beginner",
  badges: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
  price: "$25",
  priceSuffix: "/lifetime",
};

export const CREATOR_COURSES: Course[] = [
  {
    ...COURSE_BASE,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: "/figma/creator-profile/course-1.jpg",
  },
  {
    ...COURSE_BASE,
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    image: "/figma/creator-profile/course-2.jpg",
  },
  {
    ...COURSE_BASE,
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    image: "/figma/creator-profile/course-3.jpg",
  },
  {
    ...COURSE_BASE,
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    image: "/figma/creator-profile/course-4.jpg",
  },
  {
    ...COURSE_BASE,
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    image: "/figma/creator-profile/course-5.jpg",
  },
  {
    ...COURSE_BASE,
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: "/figma/creator-profile/course-6.jpg",
  },
];
