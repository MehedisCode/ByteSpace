import type { CSSProperties } from "react";
import { FRAME_CENTER_X } from "./hero.constants";
import type { FrameBox } from "./hero.types";

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
