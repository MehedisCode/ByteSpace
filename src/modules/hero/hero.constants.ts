/** Reference design frame the hero was built from. */
export const HERO_FRAME = {
  width: 1440,
  height: 1024,
} as const;

/** Horizontal offset from the frame's center, used for centered layers. */
export const FRAME_CENTER_X = HERO_FRAME.width / 2;

/** Assumed breakpoint where the desktop canvas is shown. */
export const DESKTOP_BREAKPOINT = 1024;
