import Link from "next/link";
import { BRAND } from "@/modules/hero";

export function AuthHeader() {
  return (
    <header className="relative z-30 flex h-[120px] items-center px-6 lg:px-[122px]">
      <Link
        href="/"
        className="flex items-center gap-2 lg:absolute lg:left-[122px] lg:top-[35px] lg:block lg:h-[37px] lg:w-[171px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BRAND.logo}
          alt=""
          width={29}
          height={32}
          className="lg:absolute lg:left-0 lg:top-0"
        />
        <span className="font-brand text-2xl font-bold text-subtle lg:absolute lg:left-[37px] lg:top-[7px] lg:leading-[30px]">
          {BRAND.name}
        </span>
      </Link>
    </header>
  );
}
