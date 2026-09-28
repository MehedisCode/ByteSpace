import Image from "next/image";
import { cn } from "@/lib/utils";
import { HAPPY_STUDENT_AVATARS, HAPPY_STUDENTS } from "../collage.data";

type HappyStudentsCardProps = {
  className?: string;
};

export function HappyStudentsCard({ className }: HappyStudentsCardProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col rounded-card bg-accent p-4",
        className,
      )}
    >
      <p className="font-sans text-base font-medium text-ink">
        {HAPPY_STUDENTS.title}
      </p>

      <div className="mt-1 flex items-center gap-1.5">
        <span className="font-sans text-[10px] text-[#424348]">
          {HAPPY_STUDENTS.score} {HAPPY_STUDENTS.reviews}
        </span>
        <svg viewBox="0 0 24 24" className="size-4 fill-brand" aria-hidden>
          <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.3l-5.8 3.06 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z" />
        </svg>
      </div>

      <div className="mt-auto flex items-center">
        {HAPPY_STUDENT_AVATARS.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={43}
            height={43}
            className={cn(
              "size-[43px] rounded-full ring-2 ring-accent",
              index > 0 && "-ml-4",
            )}
          />
        ))}
        <span className="-ml-4 flex size-[43px] items-center justify-center rounded-full bg-ink font-sans text-xs font-bold text-subtle ring-2 ring-accent">
          {HAPPY_STUDENTS.badge}
        </span>
      </div>
    </div>
  );
}
