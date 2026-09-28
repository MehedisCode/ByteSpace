import type { CategoryCard as CategoryCardData } from "../../hero.types";
import { GlassCard } from "./GlassCard";

type CategoryCardProps = {
  data: CategoryCardData;
  className?: string;
};

export function CategoryCard({ data, className }: CategoryCardProps) {
  return (
    <GlassCard className={className}>
      <p className="font-sans text-base font-medium text-ink">{data.title}</p>
      <div className="mt-1 flex items-center gap-2 font-sans text-xs text-muted">
        {data.meta.map((item, index) => (
          <span key={item} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden>•</span>}
            {item}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
