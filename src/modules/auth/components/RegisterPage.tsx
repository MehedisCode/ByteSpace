import { HeroGrid } from "@/modules/hero";
import { frameBoxStyle, frameLeft } from "@/lib/frame";
import { REGISTER_FORM, REGISTER_INTRO } from "../register.data";
import { AuthHeader } from "./AuthHeader";
import { RegisterCollage } from "./RegisterCollage";
import { RegisterForm } from "./RegisterForm";
import { RegisterIntro } from "./RegisterIntro";

export function RegisterPage() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-brand">
      <HeroGrid />

      <div className="relative mx-auto w-full max-w-[1440px] lg:h-[1024px]">
        <AuthHeader />

        {/* Desktop composition */}
        <div className="hidden lg:block">
          <div className="absolute" style={frameBoxStyle(REGISTER_INTRO.box)}>
            <RegisterIntro />
          </div>

          <RegisterCollage />

          <div
            className="absolute"
            style={{
              left: frameLeft(REGISTER_FORM.box),
              top: REGISTER_FORM.box.y,
              width: REGISTER_FORM.box.width,
            }}
          >
            <RegisterForm />
          </div>
        </div>

        {/* Mobile / tablet stack */}
        <div className="px-6 pb-16 pt-4 lg:hidden">
          <RegisterIntro />
          <RegisterForm className="mx-auto mt-8 max-w-[579px]" />
        </div>
      </div>
    </section>
  );
}
