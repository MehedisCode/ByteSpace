import type { CSSProperties } from "react";

/**
 * A rectangle expressed in the coordinate space of a 1440px-wide Figma frame,
 * measured from the frame's top-left corner.
 */
export type FrameBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const FRAME_WIDTH = 1440;
export const FRAME_CENTER_X = FRAME_WIDTH / 2;

/** Centers a frame box horizontally while keeping its design-space offset. */
export function frameLeft(box: FrameBox): string {
  return `calc(50% + ${box.x - FRAME_CENTER_X}px)`;
}

/** Full absolute-position styles for a frame box. */
export function frameBoxStyle(box: FrameBox): CSSProperties {
  return {
    left: frameLeft(box),
    top: box.y,
    width: box.width,
    height: box.height,
  };
}
