import type { ProgressCard as ProgressCardData } from "../../hero.types";
import { GlassCard } from "./GlassCard";

type ProgressCardProps = {
  data: ProgressCardData;
  className?: string;
};

export function ProgressCard({ data, className }: ProgressCardProps) {
  return (
    <GlassCard className={className}>
      <p className="font-sans text-sm font-medium text-ink">{data.title}</p>
      <p className="mt-1 font-display text-[48px] font-semibold leading-none text-ink">
        {data.value}
      </p>
      <div
        className="mt-auto h-2 w-full overflow-hidden rounded-pill bg-track"
        role="progressbar"
        aria-valuenow={Math.round(data.progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-pill bg-accent"
          style={{ width: `${data.progress * 100}%` }}
        />
      </div>
    </GlassCard>
  );
}
