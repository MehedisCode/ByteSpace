import Image from "next/image";
import { cn } from "@/lib/utils";

type TintedImageProps = {
  src: string;
  /** Colour applied over the grayscale Figma render. */
  tint: string;
  /** `color` keeps shading for saturated tints, `screen` lightens. */
  blend?: "color" | "screen";
  alt?: string;
  className?: string;
  sizes?: string;
};

/** Renders a Figma 3D render with its overlay tint (mask + blend). */
export function TintedImage({
  src,
  tint,
  blend = "color",
  alt = "",
  className,
  sizes = "100vw",
}: TintedImageProps) {
  return (
    <span className={cn("block", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain"
      />
      <span
        className="absolute inset-0"
        style={{
          backgroundColor: tint,
          mixBlendMode: blend,
          maskImage: `url(${src})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: `url(${src})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
      />
    </span>
  );
}
