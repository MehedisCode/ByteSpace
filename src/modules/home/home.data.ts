export const LOGO_STRIP = {
  src: "/figma/home/logo-partner.png",
  alt: "Trusted partners",
} as const;

export const SKILLS_HEADING = {
  title: "Discover Your Passion, Build Your Skills",
  subtitle:
    "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
} as const;

export const CATEGORY_FILTERS: string[][] = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export const FILTERS_ACTIVE = "Featured";

export type Course = {
  title: string;
  author: string;
  image: string;
  rating: string;
  level: string;
  badges: string[];
  price: string;
  priceSuffix: string;
};

export const COURSES: Course[] = [
  {
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    image: "/figma/home/course-1.png",
    rating: "4.5",
    level: "Beginner",
    badges: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    price: "$25",
    priceSuffix: "/lifetime",
  },
  {
    title: "Build Digital Asset",
    author: "by purepearl studio",
    image: "/figma/home/course-2.png",
    rating: "4.5",
    level: "Beginner",
    badges: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    price: "$25",
    priceSuffix: "/lifetime",
  },
  {
    title: "the Power of Big Data",
    author: "by purepearl studio",
    image: "/figma/home/course-3.png",
    rating: "4.5",
    level: "Beginner",
    badges: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    price: "$25",
    priceSuffix: "/lifetime",
  },
  {
    title: "Balancing Productivity and Self-Care",
    author: "by purepearl studio",
    image: "/figma/home/course-4.png",
    rating: "4.5",
    level: "Beginner",
    badges: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    price: "$25",
    priceSuffix: "/lifetime",
  },
  {
    title: "Mastering Money Management",
    author: "by purepearl studio",
    image: "/figma/home/course-5.png",
    rating: "4.5",
    level: "Beginner",
    badges: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    price: "$25",
    priceSuffix: "/lifetime",
  },
  {
    title: "From Idea to Startup Success",
    author: "by purepearl studio",
    image: "/figma/home/course-6.png",
    rating: "4.5",
    level: "Beginner",
    badges: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    price: "$25",
    priceSuffix: "/lifetime",
  },
];

export const COURSE_AVATARS = "/figma/home/course-avatars.png";
export const COURSE_LEARNERS_BADGE = "26+";

export const PATHS_HEADING = {
  title: "Explore Diverse Learning Paths at Bytespace",
  subtitle:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
} as const;

export type LearningPath = {
  label: string;
  icon: string;
};

export const LEARNING_PATHS: LearningPath[] = [
  { label: "Design", icon: "/figma/home/category-design.png" },
  { label: "Development", icon: "/figma/home/category-development.png" },
  { label: "IT & Software", icon: "/figma/home/category-it-software.png" },
  { label: "Business", icon: "/figma/home/category-business.png" },
  { label: "Marketing", icon: "/figma/home/category-marketing.png" },
  { label: "Photography", icon: "/figma/home/category-photography.png" },
];

export const GROWTH = {
  heading: "Your Path to Professional Growth Starts Here!",
  subtitle:
    "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
  stats: [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
  ],
  showcase: {
    src: "/figma/home/growth-showcase-1.png",
    alt: "Course highlights and learning progress",
  },
} as const;

export const CREATOR_BLOCK = {
  heading: "Create & Manage Courses Easily.",
  subtitle:
    "ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.",
  benefits: [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ],
  image: {
    src: "/figma/home/growth-showcase-2.png",
    alt: "Creator revenue dashboard",
  },
} as const;

export const CREATOR_CTA = {
  heading: "Unlock Your Potential as a Creator with ByteSpace",
  subtitle:
    "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
  action: "Join as Creator",
  // Same 3D ornament composition as the hero, re-used here.
  ornaments: "/figma/hero/ornament-group.png",
} as const;

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export const TESTIMONIALS_HEADING = {
  title: "Discover What Our Community Is Saying",
  subtitle:
    "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.",
} as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    avatar: "/figma/home/testimonial-1.png",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    avatar: "/figma/home/testimonial-2.png",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    avatar: "/figma/home/testimonial-3.png",
  },
];

export const FOOTER = {
  tagline:
    "Stay Up to date with our latest features and releases by joining our newsletter.",
  emailPlaceholder: "Enter your email",
  subscribe: "Search",
  legal:
    "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
  columns: [
    ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
    ["Development", "Marketing", "Photography", "Finance", "Sport"],
    ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  ],
  copyright: "@ 2023 ByteSpace. All rights reserved.",
  bottomLinks: ["Privacy Policy", "Terms of Service", "Cookies Settings"],
} as const;
