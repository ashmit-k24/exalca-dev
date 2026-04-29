import Image from "next/image";
import { IMAGE_URLS } from "@/constants/images.constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroScreen1 = () => {
  return (
    <div className="relative w-full flex h-screen flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={IMAGE_URLS.BANNER_1}
          alt="Banner Background"
          height={741}
          width={1920}
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container relative h-full">
        {/* Main Content Area */}
        <div className="grow flex flex-col items-center justify-center text-center z-10 pt-20 animate-hero-text">
          <h1 className="section-title-h1 font-semibold text-white mb-4 tracking-wide">
            Exalca Technologies Pvt Ltd
          </h1>
          <h2 className="text-[18px] font-medium text-white mb-2">
            Your Trusted SAP & Digital Solution Partner
          </h2>
          <p className="text-base text-white text-center font-light mb-6 max-w-[740px]">
            Deep technology expertise in digital transformation across financial
            service, business partner collaboration and information excellence
            areas.
          </p>

          <Button
            asChild
            className="py-3 bg-white text-[#0E121B] hover:text-white"
          >
            <Link href="/schedule-demo">Let&apos;s Connect</Link>
          </Button>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="container absolute -bottom-30 left-0 right-0 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-[0px_16px_32px_-12px_#0E121B1A]">
          {/* Card 1 */}
          <div className="bg-white flex flex-col border-r-2 border-[#4DB151]">
            <div className="flex items-center p-6 pb-2">
              <div className="relative flex items-center h-[42px] w-[190px]">
                <Image
                  src={IMAGE_URLS.SHAPE_ARROW}
                  alt="Shape Arrow"
                  width={190}
                  height={42}
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <p className="relative z-10 text-white font-semibold text-base pl-6">
                  Who We are?
                </p>
              </div>
            </div>
            <p className="text-[16px] text-[#717784] px-6 py-4 font-normal leading-[28px]">
              A fast-growing enterprise application provider delivering
              AI-powered SAP and full-stack solutions.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white flex flex-col border-r-2 border-[#4DB151]">
            <div className="flex items-center p-6 pb-2">
              <div className="relative flex items-center h-[42px] w-[190px]">
                <Image
                  src={IMAGE_URLS.SHAPE_ARROW}
                  alt="Shape Arrow"
                  width={190}
                  height={42}
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <p className="relative z-10 text-white font-semibold text-base pl-6">
                  Why Exalca?
                </p>
              </div>
            </div>
            <p className="text-[16px] text-[#717784] px-6 py-4 font-normal leading-[28px]">
              Rooted in integrity and driven by innovation, at Exalca, we shape
              a culture of trust, collaboration, and continuous growth.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white flex flex-col">
            <div className="flex items-center p-6 pb-2">
              <div className="relative flex items-center h-[42px] w-[190px]">
                <Image
                  src={IMAGE_URLS.SHAPE_ARROW}
                  alt="Shape Arrow"
                  width={190}
                  height={42}
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <p className="relative z-10 text-white font-semibold text-base pl-6">
                  What We do?
                </p>
              </div>
            </div>
            <p className="text-[16px] text-[#717784] px-6 py-4 font-normal leading-[28px]">
              Empowering businesses to simplify complex operations and make
              smarter decisions through intuitive cloud and analytics solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen1;
