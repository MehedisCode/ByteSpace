import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  className?: string;
  children: ReactNode;
};

/** Frosted white card used for the floating hero stats. */
export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-card bg-white/90 p-4 shadow-[0_16px_40px_-12px_rgba(2,12,60,0.35)] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
