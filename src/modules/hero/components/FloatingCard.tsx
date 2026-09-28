import type { FloatingCardData } from "../hero.types";
import { CategoryCard } from "./cards/CategoryCard";
import { ProgressCard } from "./cards/ProgressCard";
import { RatingCard } from "./cards/RatingCard";

type FloatingCardProps = {
  data: FloatingCardData;
  className?: string;
};

export function FloatingCard({ data, className }: FloatingCardProps) {
  switch (data.kind) {
    case "category":
      return <CategoryCard data={data} className={className} />;
    case "progress":
      return <ProgressCard data={data} className={className} />;
    case "rating":
      return <RatingCard data={data} className={className} />;
  }
}
