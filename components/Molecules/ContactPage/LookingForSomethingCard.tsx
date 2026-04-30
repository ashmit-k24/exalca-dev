import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { IMAGE_URLS } from "@/constants/images.constants";

interface LookingForSomethingCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
  index: number
}

const LookingForSomethingCard: React.FC<LookingForSomethingCardProps> = ({
  image,
  title,
  description,
  className = "",
  index
}) => {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-[8px] shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)] bg-white p-8 border border-border transition-all duration-300  ${className}`}
    >
      <div className="relative mb-6 flex h-[200px] items-center justify-center">
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center transition-all duration-500">
          <Image
            src={IMAGE_URLS.LOOKING_FOR_SOMETHING_BG}
            alt=""
            width={500}
            height={500}
            className="h-full w-full object-contain  transition-all duration-1000"
          />
        </div>

        <div className={`relative z-10 h-[75%] w-[75%] transition-all duration-700 ${index === 0 ? 'group-hover:-translate-1' : index === 1 ? 'group-hover:translate-x-2' : 'group-hover:translate-1.5'}`}>
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <h3 className="text-[24px] font-semibold leading-8 text-[#0B0B0B]">
            {title}
          </h3>
          <ArrowUpRight className="h-5 w-5 text-[#0B0B0B] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="text-[14px] leading-[22px] text-[#666666]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default LookingForSomethingCard;
