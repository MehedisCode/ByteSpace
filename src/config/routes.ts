/** Central route map — mirrors the frames in the Figma "Design" page. */
export const ROUTES = {
  home: "/",
  register: "/register",
  login: "/login",
  search: "/search",
  courses: "/courses",
  creators: "/creators",
} as const;

export const courseDetails = (slug: string) => `/courses/${slug}`;
export const courseLessons = (slug: string) => `/courses/${slug}/lessons`;
export const courseReviews = (slug: string) => `/courses/${slug}/reviews`;
export const creatorProfile = (slug: string) => `/creators/${slug}`;
