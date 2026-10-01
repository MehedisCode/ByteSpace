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
      <path d="M12 3.6l2.47 5.01 5.53.8-4 3.9.94 5.51L12 16.22l-4.94 2.6.94-5.51-4-3.9 5.53-.8L12 3.6z" />
    </svg>
  );
}
