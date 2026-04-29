import PillsHeading from "@/components/Atoms/PillsHeading";
import Image from "next/image";
import React from "react";
import { IMAGE_URLS } from "@/constants/images.constants";

const Accreditations = () => {
  return (
    <section className="sec_padding">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
          <div className="w-full lg:w-5/12">
            <PillsHeading text="Recognition" className="mb-6" />
            <h2 className="section-title-h2 text-gradient font-semibold">
              Accreditations & Partnerships
            </h2>
          </div>
          <div className="w-full lg:w-7/12 flex items-center justify-center lg:justify-end xl:pr-10 pt-10 lg:pt-0">
            <div className="flex items-center justify-center -space-x-1 md:-space-x-1 lg:-space-x-1 relative">
              {/* 1. Microsoft Gold Partner */}
              <div className="relative z-10 bg-white border border-[#D0D5DD] shadow-[0px_4px_11px_-1px_#0A0A0A0A] w-[90px] h-[90px] md:w-[110px] md:h-[110px] flex items-center justify-center p-2">
                <Image
                  src={IMAGE_URLS.MICROSOFT_GOLD}
                  alt="Microsoft Gold Partner"
                  width={90}
                  height={90}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 2. ISO 9001:2015 */}
              <div className="relative z-20 bg-white border border-[#D0D5DD] shadow-[0px_4px_11px_-1px_#0A0A0A0A] w-[120px] h-[120px] md:w-[140px] md:h-[140px] flex items-center justify-center p-3">
                <Image
                  src={IMAGE_URLS.ISO_CERTIFIED}
                  alt="ISO 9001:2015"
                  width={110}
                  height={110}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 3. SAP Build Partner */}
              <div className="relative z-30 bg-white border border-[#D0D5DD] shadow-[0px_4px_11px_-1px_#0A0A0A0A] w-[140px] h-[140px] md:w-[180px] md:h-[180px] flex flex-col items-center justify-center p-4">
                {/* Stars */}
                <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#F4C73E"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 md:w-7 md:h-7"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
                <Image
                  src={IMAGE_URLS.SAP_BUILD}
                  alt="SAP Build Partner"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 4. ISO 27001:2013 */}
              <div className="relative z-20 bg-white border border-[#D0D5DD] shadow-[0px_4px_11px_-1px_#0A0A0A0A] w-[120px] h-[120px] md:w-[140px] md:h-[140px] flex items-center justify-center p-3">
                <Image
                  src={IMAGE_URLS.ISO_27001}
                  alt="ISO 27001:2013"
                  width={110}
                  height={110}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 5. SAP Certified */}
              <div className="relative z-10 bg-white border border-[#D0D5DD] shadow-[0px_4px_11px_-1px_#0A0A0A0A] w-[90px] h-[90px] md:w-[110px] md:h-[110px] flex items-center justify-center p-2">
                <Image
                  src={IMAGE_URLS.SAP_CERTIFIED}
                  alt="SAP Certified"
                  width={90}
                  height={90}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
