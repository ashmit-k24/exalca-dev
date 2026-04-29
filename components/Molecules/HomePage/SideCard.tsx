"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface Accelerator {
    id: string;
    name: string;
    fullName: string;
    description: string;
    icon: string;
    logo: string;
    gradient: string;
    side: "left" | "right";
}

interface SideCardProps {
    accelerator: Accelerator;
    isActive: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    progress: number;
    isPaused: boolean;
}

const SideCard = ({
    accelerator,
    isActive,
    onClick,
    onMouseEnter,
    onMouseLeave,
    progress,
    isPaused,
}: SideCardProps) => {
    return (
        <div
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`relative cursor-pointer group transition-all duration-500 py-6 px-9 flex flex-col ${isActive
                ? "bg-white shadow-[0_15px_35px_rgba(0,0,0,0.08)] scale-[1.01]"
                : "hover:bg-white/40"
                } ${accelerator.side === "right" ? "items-end text-right" : "items-start text-left"}`}
        >
            {!isActive && (
                <>

                    {accelerator.side === "left" ?
                        <div aria-hidden className="absolute inset-y-2 left-0 w-px bg-[#D0D5DD]" />
                        :
                        <div aria-hidden className="absolute inset-y-2 right-0 w-[0.5px] bg-[#D0D5DD]" />
                    }


                </>
            )}
            {isActive && (
                <div
                    style={{
                        height: `${Math.min(progress, 100)}%`,
                        transition: isPaused ? "none" : "height 30ms linear",
                    }}
                    className={`absolute z-10 top-0 w-[5px] bg-linear-to-t from-[#4DB151] to-[rgba(77,177,81,0.2)] ${accelerator.side === "left" ? "left-0" : "right-0"
                        }`}
                />
            )}
            {isActive && (
                <motion.div
                    layoutId={`activeBar-${accelerator.side}`}
                    className={`absolute top-0 bottom-0 w-[5px] bg-[#E2FFDF] ${accelerator.side === "left" ? "left-0" : "right-0"
                        }`}
                />
            )}
            <div className={`w-11 h-11 rounded-[8px] flex items-center justify-center mb-5 border transition-all duration-500 ${isActive ? "bg-white border-[#5B49E9]" : "border-[#E1E4EA] "
                }`}>
                <Image
                    src={accelerator.icon}
                    alt={accelerator.name}
                    width={24}
                    height={24}
                    className="object-contain w-6 h-6"
                />
            </div>

            <h4 className={`text-[18px] font-semibold leading-[32px] transition-all duration-500 w-11/12 "
                }`}>
                {accelerator.fullName}
            </h4>
        </div>
    );
};

export default SideCard;
