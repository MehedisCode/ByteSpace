import type { SVGProps } from "react";

export function SignalBarsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <rect x="2" y="12" width="3" height="6" rx="1" fill="currentColor" />
      <rect x="7.5" y="8" width="3" height="10" rx="1" fill="currentColor" />
      <rect x="13" y="4" width="3" height="14" rx="1" fill="currentColor" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.3l-5.8 3.06 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z" />
    </svg>
  );
}

export function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
