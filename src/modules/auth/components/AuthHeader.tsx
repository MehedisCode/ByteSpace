import Link from "next/link";
import { BRAND } from "@/modules/hero";

export function AuthHeader() {
  return (
    <header className="relative z-30 flex h-[120px] items-center px-6 lg:px-[122px]">
      <Link href="/" className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BRAND.logo} alt="" width={29} height={32} />
        <span className="font-brand text-2xl font-bold text-subtle">
          {BRAND.name}
        </span>
      </Link>
    </header>
  );
}
