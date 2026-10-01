import type { SVGProps } from "react";

/** Outlined lesson/book glyph used in the module list badges. */
export function ModuleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden {...props}>
      <path
        d="M20 11.5c-2.6-2-6-2.8-9.5-2.2a1.4 1.4 0 0 0-1.2 1.4v17.6c0 .9.8 1.6 1.7 1.4 3.2-.5 6.3.2 9 2.1 2.7-1.9 5.8-2.6 9-2.1.9.2 1.7-.5 1.7-1.4V10.7c0-.7-.5-1.3-1.2-1.4-3.5-.6-6.9.2-9.5 2.2Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M20 11.5v20.3M14 16.5h.01M26 16.5h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
