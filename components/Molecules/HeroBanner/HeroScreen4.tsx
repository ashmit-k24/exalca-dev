import Image from "next/image";
import { IMAGE_URLS } from "@/constants/images.constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroScreen4 = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={IMAGE_URLS.BANNER_4}
          alt="Banner Background"
          height={880}
          width={1920}
          className="object-cover object-center w-full h-fit"
        />
      </div>

      <div className="container relative h-full flex flex-col justify-center">
        {/* Main Content Area */}
        <div className="grow flex flex-col items-start justify-center text-left  z-10 max-w-[800px] w-full animate-hero-text">
          <div className="inline-block border border-white bg-[#FAFAFF33] backdrop-blur-[1px] rounded-md px-4 py-2 mb-6">
            <p className="text-[#232323] text-sm md:text-base font-normal tracking-wide">
              Cloud Enablement | Process Automation | AI Solutions | App
              Innovation
            </p>
          </div>

          <h2 className="section-title-h1 font-semibold text-gradient mb-4 tracking-[-2%] max-w-[500px]">
            Drive Innovation With BTP
          </h2>

          <p className="text-base md:text-[16px] text-[#444444] text-left font-normal mb-8 max-w-[650px]">
            Empowering adaptive, connected, and data-driven enterprises.
          </p>

          <Button asChild className="py-3!">
            <Link href="/schedule-demo">Let&apos;s Connect</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen4;
