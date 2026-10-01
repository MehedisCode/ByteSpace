import { cn } from "@/lib/utils";

type RevenueCardProps = {
  title: string;
  period: string;
  amount: string;
  delta: string;
  ratio?: number;
  className?: string;
};

/** Blue revenue tile used in the "Create & Manage Courses" showcase. */
export function RevenueCard({
  title,
  period,
  amount,
  delta,
  ratio,
  className,
}: RevenueCardProps) {
  return (
    <div className={cn("rounded-2xl bg-brand p-4 text-subtle", className)}>
      <p className="font-sans text-base font-medium">{title}</p>
      <p className="font-sans text-[10px] font-normal">{period}</p>

      <div className="mt-2 flex items-center justify-between gap-2">
        <p className="font-display text-2xl font-semibold leading-none">
          {amount}
        </p>
        <span className="flex h-6 shrink-0 items-center rounded-pill bg-accent-strong px-3 font-sans text-[10px] font-medium text-ink">
          {delta}
        </span>
      </div>

      {ratio !== undefined && (
        <div className="mt-2 h-2 w-full overflow-hidden rounded-pill bg-white">
          <div
            className="h-full rounded-pill bg-accent"
            style={{ width: `${ratio * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}

type MiniProgressCardProps = {
  label: string;
  value: string;
  ratio: number;
  className?: string;
};

/** White "55%" progress tile. */
export function MiniProgressCard({
  label,
  value,
  ratio,
  className,
}: MiniProgressCardProps) {
  return (
    <div className={cn("rounded-2xl bg-white p-4", className)}>
      <p className="font-sans text-sm font-medium text-ink">{label}</p>
      <p className="mt-2 font-display text-4xl font-semibold leading-none text-ink">
        {value}
      </p>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-pill bg-track">
        <div
          className="h-full rounded-pill bg-accent"
          style={{ width: `${ratio * 100}%` }}
        />
      </div>
    </div>
  );
}
