import React from 'react';
import Image from 'next/image';
import { IMAGE_URLS } from '@/constants/images.constants';

interface OurExcellenceCardProps {
    image: string;
    count: string;
    title: string;
    description: string;
    className?: string;
}

const OurExcellenceCard: React.FC<OurExcellenceCardProps> = ({
    image,
    count,
    title,
    description,
    className = ""
}) => {
    return (
        <div
            className={`relative group bg-white rounded-[8px] hover:-translate-y-1 duration-300 transition-all h-fit border border-[#E1E4EA] shadow-[0px_16px_32px_-12px_#0E121B1A] flex flex-col gap-5 items-center text-center overflow-hidden ${className}`}
        >
            {/* Image Container - Full Width */}
            <div className="top-section px-10 w-full">
                <div className="relative w-full h-[200px] flex items-center justify-center">
                    {/* Background Elements - Backside of img-container */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 transition-opacity duration-500">
                        <Image
                            src={IMAGE_URLS.OUR_EXCELLENCE_BG_ELEMENTS}
                            alt="Background Elements"
                            fill
                            className="object-cover w-[60%] group-hover:translate-y-2  transition-all duration-1000"
                        />
                    </div>

                    {/* Main Icon Image */}
                    <div className="relative w-[60%] transition-all duration-600 group-hover:-translate-y-3 group-hover:rotate-5 h-[60%] z-10">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 py-5 px-10 flex flex-col items-center pt-0">
                <h3 className="text-[40px] font-semibold text-[#0E121B] mb-3">
                    {count}
                </h3>
                <p className="text-[18px] font-semibold text-[#0E121B] mb-5" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="text-[16px] leading-[28px] text-sub-body-text ">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default OurExcellenceCard;
