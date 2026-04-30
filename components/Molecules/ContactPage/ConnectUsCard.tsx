import React from "react";
import Image from "next/image";
import { IMAGE_URLS } from "@/constants/images.constants";

interface ConnectUsCardProps {
  image: string;
  title: string;
  className?: string;
}

const ConnectUsCard: React.FC<ConnectUsCardProps> = ({
  image,
  title,
  className = "",
}) => {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden transition-all duration-300 ${className}`}
    >
      <div className="relative mb-8 flex h-[210px] items-center justify-center">
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center transition-all duration-500">
          <Image
            src={IMAGE_URLS.CONNECT_BG_ELEMENT}
            alt=""
            width={520}
            height={520}
            className="h-full w-full object-contain transition-all  group-hover:translate-y-2 duration-1000"
          />
        </div>

        <div className="relative z-10 h-[72%] w-[72%] transition-all duration-700 group-hover:-translate-y-3 group-hover:rotate-5">
          <Image
            src={image}
            alt={title}
            width={420}
            height={420}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col text-center">
        <h3 className="mb-4 text-[24px] font-semibold leading-8 text-foreground">
          {title}
        </h3>
        
      </div>
    </div>
  );
};

export default ConnectUsCard;
