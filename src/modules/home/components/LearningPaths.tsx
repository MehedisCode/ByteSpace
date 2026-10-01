import Image from "next/image";
import { LEARNING_PATHS, PATHS_HEADING } from "../home.data";
import { SectionHeading } from "./SectionHeading";

export function LearningPaths() {
  return (
    <section className="bg-white pt-16 pb-16 lg:pt-[72px] lg:pb-[120px]">
      <SectionHeading
        title={PATHS_HEADING.title}
        subtitle={PATHS_HEADING.subtitle}
      />

      <div className="mx-auto mt-12 grid w-full max-w-[1202px] grid-cols-2 gap-6 px-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
        {LEARNING_PATHS.map((path) => (
          <div
            key={path.label}
            className="flex aspect-square flex-col items-center justify-center gap-4 rounded-[24px] border border-[#ced0d3] bg-white"
          >
            <Image
              src={path.icon}
              alt=""
              width={60}
              height={60}
              className="size-[60px]"
            />
            <span className="px-3 text-center font-sans text-base font-medium text-ink lg:text-xl">
              {path.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
