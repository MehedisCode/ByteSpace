import { cn } from "@/lib/utils";
import { AVATARS, ICONS } from "../../hero.data";
import type { RatingCard as RatingCardData } from "../../hero.types";
import { GlassCard } from "./GlassCard";

type RatingCardProps = {
  data: RatingCardData;
  className?: string;
};

export function RatingCard({ data, className }: RatingCardProps) {
  return (
    <GlassCard className={className}>
      <p className="font-sans text-base font-medium text-ink">{data.title}</p>

      <div className="mt-1 flex items-center gap-1.5">
        <span className="font-sans text-xs text-muted">
          {data.score} {data.reviews}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ICONS.star} alt="" width={16} height={16} />
      </div>

      <div className="mt-2 flex items-center">
        {AVATARS.map((avatar, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={avatar.src}
            src={avatar.src}
            alt={avatar.alt}
            width={43}
            height={43}
            className={cn(
              "size-[43px] rounded-full ring-2 ring-white",
              index > 0 && "-ml-4",
            )}
          />
        ))}
        <span className="-ml-4 flex size-[43px] items-center justify-center rounded-full bg-accent font-sans text-xs font-bold text-ink ring-2 ring-white">
          {data.badge}
        </span>
      </div>
    </GlassCard>
  );
}
