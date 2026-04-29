import Image from "next/image";
import { IMAGE_URLS } from "@/constants/images.constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroScreen3 = () => {
  return (
    <div className="relative w-full flex h-screen flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={IMAGE_URLS.BANNER_3}
          alt="Banner Background"
          height={880}
          width={1920}
          className="object-cover object-center w-full h-fit"
        />
      </div>

      <div className="container relative h-full flex flex-col justify-center">
        {/* Main Content Area */}
        <div className="grow flex flex-col items-start justify-center text-left  z-10 max-w-[800px] w-full animate-hero-text">
          <div className="inline-block border border-white/30 bg-[#FAFAFF33] backdrop-blur-[1px] rounded-md px-4 py-2 mb-6">
            <p className="text-white text-sm md:text-base font-normal tracking-wide">
              Requisition | Procurement | GRN | Invoice Verification | Approval
              Workflow | Vendor Payments
            </p>
          </div>

          <h2 className="section-title-h1 font-semibold text-white mb-4 tracking-[-2%]">
            Procure To Pay
          </h2>

          <p className="text-base md:text-[16px] text-white text-left font-normal mb-8 max-w-[600px]">
            Experience your procurement lifecycle with Vproc - the intelligent,
            unified Procure-to-Pay platform. Empower your organization with
            seamless automation, real-time insights, and total spend control.
          </p>

          <Button
            asChild
            className="py-3! bg-white text-[#0E121B] hover:text-white"
          >
            <Link href="/schedule-demo">Let&apos;s Connect</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen3;
