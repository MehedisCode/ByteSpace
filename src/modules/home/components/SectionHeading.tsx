import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  titleClassName?: string;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  titleClassName,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[917px] px-6 text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "font-display text-[30px] font-semibold leading-[1.15] text-navy sm:text-[34px] lg:text-[36px]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-sans text-base leading-relaxed text-muted lg:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
