import Image from "next/image";
import { cn } from "@/lib/utils";
import { frameLeft } from "../hero.layout";
import type { ImageAsset } from "../hero.types";

type FrameImageProps = {
  asset: ImageAsset;
  className?: string;
  priority?: boolean;
};

/** Renders a raster asset at its exact design-frame position. */
export function FrameImage({ asset, className, priority }: FrameImageProps) {
  const { src, alt, box } = asset;

  return (
    <Image
      src={src}
      alt={alt}
      width={box.width}
      height={box.height}
      priority={priority}
      className={cn("absolute max-w-none", className)}
      style={{
        left: frameLeft(box),
        top: box.y,
        width: box.width,
        height: box.height,
      }}
    />
  );
}
