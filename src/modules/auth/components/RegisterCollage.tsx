import Image from "next/image";
import { CourseCard } from "@/modules/home";
import { frameBoxStyle } from "@/lib/frame";
import { cn } from "@/lib/utils";
import { COLLAGE_COURSES, COLLAGE_ORNAMENTS, HAPPY_STUDENTS } from "../register.data";
import { HappyStudentsCard } from "./HappyStudentsCard";

type RegisterCollageProps = {
  className?: string;
};

export function RegisterCollage({ className }: RegisterCollageProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-10", className)}
    >
      {COLLAGE_COURSES.map(({ course, box }) => (
        <div key={course.title} className="absolute" style={frameBoxStyle(box)}>
          <CourseCard course={course} className="h-full" />
        </div>
      ))}

      <div className="absolute" style={frameBoxStyle(HAPPY_STUDENTS.box)}>
        <HappyStudentsCard />
      </div>

      {COLLAGE_ORNAMENTS.map((ornament) => (
        <div
          key={ornament.src}
          className="absolute"
          style={frameBoxStyle(ornament.box)}
        >
          <Image
            src={ornament.src}
            alt=""
            fill
            sizes={`${ornament.box.width}px`}
            className="object-contain"
          />
          <span
            className="absolute inset-0"
            style={{
              backgroundColor: ornament.tint,
              mixBlendMode: ornament.blend,
              maskImage: `url(${ornament.src})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskImage: `url(${ornament.src})`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
            }}
          />
        </div>
      ))}
    </div>
  );
}
