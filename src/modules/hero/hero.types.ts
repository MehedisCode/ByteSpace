/**
 * A rectangle expressed in the coordinate space of the 1440×1024 Figma frame.
 * `x`/`y` are measured from the top-left corner of the frame.
 */
export type FrameBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};

export type Avatar = {
  src: string;
  alt: string;
};

export type CategoryCard = {
  kind: "category";
  title: string;
  meta: string[];
  box: FrameBox;
};

export type ProgressCard = {
  kind: "progress";
  title: string;
  value: string;
  /** Fill ratio of the progress bar, between 0 and 1. */
  progress: number;
  box: FrameBox;
};

export type RatingCard = {
  kind: "rating";
  title: string;
  score: string;
  reviews: string;
  badge: string;
  box: FrameBox;
};

export type FloatingCardData = CategoryCard | ProgressCard | RatingCard;

export type ImageAsset = {
  src: string;
  alt: string;
  box: FrameBox;
};
