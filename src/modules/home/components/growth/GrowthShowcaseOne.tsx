import Image from "next/image";
import { CourseCard } from "@/components/course-card";
import { MaskedOrnament } from "@/components/masked-ornament";
import { FLOATING_SHADOW_FILTER } from "@/lib/floating-shadow";
import { COURSES } from "../../home.data";
import { MiniProgressCard } from "./GrowthCards";

/** "Your Path to Professional Growth" showcase: course card + portrait. */
export function GrowthShowcaseOne() {
  return (
    <div className="flex w-full justify-center lg:justify-end">
      <div className="relative h-[552px] w-[621px] origin-top scale-[0.55] sm:scale-75 lg:scale-100">
        <CourseCard
          course={COURSES[0]}
          link={false}
          className="absolute left-0 top-0 w-[373px]"
        />

        <Image
          src="/figma/hero/hero-student.png"
          alt=""
          width={577}
          height={540}
          style={{ filter: FLOATING_SHADOW_FILTER }}
          className="pointer-events-none absolute left-0 top-[12px] w-[577px]"
        />

        <MiniProgressCard
          label="Learning Progress"
          value="55%"
          ratio={0.56}
          className="absolute left-[345px] top-[213px] w-[232px]"
        />

        <MaskedOrnament
          src="/figma/home/squiggle-lime.png"
          color="#d4fb20"
          className="absolute left-[406px] top-[67px] h-[215px] w-[215px]"
        />
      </div>
    </div>
  );
}
