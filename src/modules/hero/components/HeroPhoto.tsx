import { cn } from "@/lib/utils";
import { HERO_PHOTO } from "../hero.data";
import { FrameImage } from "./FrameImage";

type HeroPhotoProps = {
  className?: string;
};

/** Bottom-anchored hero portrait, clipped by the section. */
export function HeroPhoto({ className }: HeroPhotoProps) {
  return (
    <FrameImage
      asset={HERO_PHOTO}
      priority
      className={cn("z-10 object-cover object-top", className)}
    />
  );
}
