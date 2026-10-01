export const REVIEWS_CONTENT = {
  heading: "What Learners Are Saying",
  description:
    "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
  summary: {
    label: "Ratings",
    value: "4.7",
    /** Distribution rows — bar ratio per star level. */
    rows: [
      { stars: 5, count: 720, ratio: 260 / 282 },
      { stars: 4, count: 120, ratio: 103 / 282 },
      { stars: 3, count: 21, ratio: 27 / 282 },
      { stars: 2, count: 12, ratio: 10 / 282 },
      { stars: 1, count: 16, ratio: 15 / 282 },
    ],
  },
  listHeading: "Individual Reviews:",
  allRating: "All rating",
  filters: [5, 4, 3, 2, 1],
} as const;

export type Review = {
  name: string;
  role: string;
  date: string;
  rating: number;
  avatar: string;
  text: string;
};

export const REVIEWS: Review[] = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 5,
    avatar: "/figma/course-reviews/reviewer-1.jpg",
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 5,
    avatar: "/figma/course-reviews/reviewer-2.jpg",
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 5,
    avatar: "/figma/course-reviews/reviewer-3.jpg",
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    date: "a year ago",
    rating: 5,
    avatar: "/figma/course-reviews/reviewer-4.jpg",
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];
