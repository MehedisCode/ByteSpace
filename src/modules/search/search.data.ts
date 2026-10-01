import { COURSES } from "@/modules/home";
import type { Course } from "@/modules/home";

export const SEARCH_HERO = {
  title: "Find Your Next Course",
  placeholder: "Search",
  scope: "Courses",
} as const;

export type FilterKey = "filter" | "level" | "category";

export const SEARCH_FILTERS: { key: FilterKey; label: string }[] = [
  { key: "filter", label: "Filter" },
  { key: "level", label: "Level" },
  { key: "category", label: "Category" },
];

export const SEARCH_SORT = "Most relevant";

export const SEARCH_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
] as const;

export const SEARCH_ACTIVE_CATEGORY = "Featured";

/** The design repeats the same set of courses across six rows. */
export const SEARCH_RESULTS: Course[] = Array.from({ length: 3 }).flatMap(
  () => COURSES,
);

export const SEARCH_PAGINATION = {
  pages: [1, 2, 3, 4, 5],
  active: 1,
} as const;
