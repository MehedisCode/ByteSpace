import Image from "next/image";
import { TintedImage } from "@/components/tinted-image";
import { FLOATING_SHADOW_FILTER } from "@/lib/floating-shadow";
import { RatingCard } from "@/modules/hero";
import { RevenueCard } from "./GrowthCards";

const HAPPY_STUDENTS = {
  kind: "rating",
  title: "Happy Students",
  score: "4.5",
  reviews: "(240)",
  badge: "2K+",
  box: { x: 0, y: 0, width: 258, height: 123 },
} as const;

/** "Create & Manage Courses" showcase: portrait + revenue + students. */
export function GrowthShowcaseTwo() {
  return (
    <div className="flex w-full justify-center lg:justify-start">
      <div className="relative h-[596px] w-[541px] origin-top scale-[0.55] sm:scale-75 lg:scale-100">
        <RevenueCard
          title="Total Revenue"
          period="July 1-28"
          amount="$120.29"
          delta="+12$"
          ratio={0.56}
          className="absolute left-0 top-[44px] w-[232px]"
        />

        <RevenueCard
          title="Year to Date"
          period="2023"
          amount="$1,200.38"
          delta="+12$"
          className="absolute left-0 top-[194px] w-[134px]"
        />

        <Image
          src="/figma/home/creator-block.png"
          alt=""
          width={435}
          height={596}
          style={{ filter: FLOATING_SHADOW_FILTER }}
          className="pointer-events-none absolute left-[28px] top-0 h-[596px] w-[435px] object-cover"
        />

        <RatingCard
          data={HAPPY_STUDENTS}
          className="absolute left-[283px] top-[413px] w-[258px]"
        />

        <TintedImage
          src="/figma/home/zigzag.png"
          tint="#d4fb20"
          className="absolute left-[305px] top-[114px] h-[215px] w-[215px]"
        />
      </div>
    </div>
  );
}
