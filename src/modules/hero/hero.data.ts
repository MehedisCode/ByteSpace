import type {
  Avatar,
  FloatingCardData,
  ImageAsset,
  NavLink,
} from "./hero.types";

export const BRAND = {
  name: "ByteSpace",
  logo: "/figma/hero/logo-mark.svg",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#", active: true },
  { label: "Courses", href: "#" },
  { label: "Creators", href: "#" },
];

export const AUTH_LINKS: NavLink[] = [
  { label: "Sign In", href: "#" },
  { label: "Join Us", href: "#" },
];

export const HERO_COPY = {
  title: "Get Access to Hundreds Courses Available",
  subtitle:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
} as const;

export const SEARCH_COPY = {
  placeholder: "Course, topic, creator",
  action: "Search",
} as const;

export const ICONS = {
  search: "/figma/hero/icon-search.svg",
  star: "/figma/hero/icon-star.svg",
  bag: "/figma/hero/icon-globe.svg",
} as const;

export const AVATARS: Avatar[] = Array.from({ length: 7 }, (_, index) => ({
  src: `/figma/hero/avatar-${index + 1}.png`,
  alt: `Student avatar ${index + 1}`,
}));

export const HERO_PHOTO: ImageAsset = {
  src: "/figma/hero/hero-student.png",
  alt: "Student learning on ByteSpace",
  box: { x: 431, y: 512, width: 578, height: 541 },
};

export const ORNAMENTS: ImageAsset = {
  src: "/figma/hero/ornament-group.png",
  alt: "",
  box: { x: -118, y: 221, width: 1723, height: 805 },
};

/**
 * Thick lime ring that sits behind the hero photo (a stroked ellipse in Figma).
 */
export const LIME_RING = {
  box: { x: 145, y: 582, width: 1149, height: 1149 },
  borderWidth: 320,
} as const;

export const FLOATING_CARDS: FloatingCardData[] = [
  {
    kind: "category",
    title: "UI/UX Design",
    meta: ["200 Courses", "1000+ Students"],
    box: { x: 404, y: 639, width: 208, height: 70 },
  },
  {
    kind: "progress",
    title: "Learning Progress",
    value: "55%",
    progress: 0.56,
    box: { x: 842, y: 651, width: 232, height: 131 },
  },
  {
    kind: "rating",
    title: "Happy Students",
    score: "4.5",
    reviews: "(240)",
    badge: "2K+",
    box: { x: 328, y: 837, width: 258, height: 121 },
  },
];
