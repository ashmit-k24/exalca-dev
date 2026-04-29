"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGE_URLS } from "@/constants/images.constants";

interface Accelerator {
    id: string;
    name: string;
    fullName: string;
    description: string;
    icon: string;
    logo: string;
    gradient: string;
    side: "left" | "right";
}

const accelerators: Accelerator[] = [
    {
        id: "mds",
        name: "MDS",
        fullName: "MDS - Master Data Solution For SAP",
        description: "Streamline your master data management with our integrated solution for SAP.",
        icon: IMAGE_URLS.MDS_ICON,
        logo: IMAGE_URLS.MDS_LOGO,
        gradient: "linear-gradient(110.45deg, rgba(161, 28, 195, 0.1) 0%, rgba(199, 41, 146, 0.1) 44.67%, rgba(245, 98, 96, 0.1) 100%)",
        side: "left",
    },
    {
        id: "fscnxt",
        name: "FSCNxt",
        fullName: "FSCNxt – Account Payable Automation Solution",
        description: "AI that simplifies payables from capture to closure.",
        icon: IMAGE_URLS.FSCNXT_ICON,
        logo: IMAGE_URLS.FSCNXT_LOGO,
        gradient: "linear-gradient(110.45deg, rgba(109, 149, 254, 0.5) 4.39%, rgba(186, 221, 255, 0.5) 24.1%, rgba(230, 243, 255, 0.5) 49.2%, rgba(236, 254, 246, 0.5) 74.29%, rgba(113, 214, 108, 0.5) 97.59%)",
        side: "left",
    },
    {
        id: "vproc",
        name: "Vproc",
        fullName: "Vproc - AI powered p2p Suit for SAP",
        description: "Optimize your procure-to-pay process with AI-driven insights.",
        icon: IMAGE_URLS.VPROC_ICON,
        logo: IMAGE_URLS.VPROC_LOGO,
        gradient: "linear-gradient(110.45deg, rgba(109, 149, 254, 0.2) 4.39%, rgba(236, 254, 246, 0.2) 74.29%, rgba(113, 214, 108, 0.2) 97.59%)",
        side: "left",
    },
    {
        id: "vgenex",
        name: "VGenex",
        fullName: "VGenex – Weighbridge Integrated Gate Entry and Exit Application",
        description: "Seamlessly manage gate operations and weighbridge integration.",
        icon: IMAGE_URLS.VGENEX_ICON,
        logo: IMAGE_URLS.VGENEX_LOGO,
        gradient: "linear-gradient(110.45deg, rgba(113, 214, 108, 0.2) 4.39%, rgba(236, 254, 246, 0.2) 24.1%, rgba(109, 149, 254, 0.2) 97.59%)",
        side: "right",
    },
    {
        id: "nexware",
        name: "Nexware",
        fullName: "Nexware – Smarter Mobile Warehouse Management Solution",
        description: "Modern mobile WMS for enhanced warehouse efficiency.",
        icon: IMAGE_URLS.NEXWARE_ICON,
        logo: IMAGE_URLS.NEXWARE_LOGO,
        gradient: "linear-gradient(110.45deg, rgba(109, 149, 254, 0.2) 4.39%, rgba(186, 221, 255, 0.2) 24.1%, rgba(230, 243, 255, 0.2) 49.2%, rgba(236, 254, 246, 0.2) 74.29%, rgba(113, 214, 108, 0.2) 97.59%)",
        side: "right",
    },
    {
        id: "bpcloud",
        name: "BP Cloud",
        fullName: "BP Cloud - Business Partner Collaboration Platform",
        description: "Connect and collaborate with your business partners effectively.",
        icon: IMAGE_URLS.BP_CLOUD_ICON,
        logo: IMAGE_URLS.BP_CLOUD_LOGO,
        gradient: "linear-gradient(110.45deg, rgba(186, 221, 255, 0.2) 24.1%, rgba(230, 243, 255, 0.2) 49.2%, rgba(236, 254, 246, 0.2) 74.29%)",
        side: "right",
    },
];

const OurAcceleratorsCardSection = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Start with MDS
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);
    const progressRef = useRef(0);

    const selectedId = accelerators[activeIndex].id;
    const selectedAccelerator = accelerators[activeIndex];

    const isAutoplayPaused = hoveredId !== null;
    const isProgressPaused = hoveredId !== null && hoveredId !== selectedId;

    const leftColumnAccs = accelerators.filter((acc) => acc.side === "left");
    const rightColumnAccs = accelerators.filter((acc) => acc.side === "right");

    const isAutoplayPausedRef = useRef(isAutoplayPaused);
    const isProgressPausedRef = useRef(isProgressPaused);

    useEffect(() => {
        isAutoplayPausedRef.current = isAutoplayPaused;
        isProgressPausedRef.current = isProgressPaused;
    }, [isAutoplayPaused, isProgressPaused]);

    useEffect(() => {
        const interval = setInterval(() => {
            // return;
            if (isProgressPausedRef.current) return;

            progressRef.current += 1;

            if (progressRef.current >= 100) {
                if (!isAutoplayPausedRef.current) {
                    setActiveIndex((curr) => (curr + 1) % accelerators.length);
                    progressRef.current = 0;
                    setProgress(0);
                } else {
                    progressRef.current = 100;
                    setProgress(100);
                }
            } else {
                setProgress(progressRef.current);
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="OurAcceleratorsCardSection py-24 bg-[#F5F7FA] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-0">

                    {/* Left Column */}
                    <div className="flex-1 flex flex-col justify-center py-6">
                        {leftColumnAccs.map((acc) => {
                            const index = accelerators.findIndex(a => a.id === acc.id);
                            return (
                                <SideCard
                                    key={acc.id}
                                    accelerator={acc}
                                    isActive={selectedId === acc.id}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        progressRef.current = 0;
                                        setProgress(0);
                                    }}
                                    onMouseEnter={() => setHoveredId(acc.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    progress={selectedId === acc.id ? progress : 0}
                                    isPaused={isProgressPaused}
                                />
                            );
                        })}
                    </div>

                    {/* Middle Column */}
                    <div className="flex-1 flex flex-col relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedAccelerator.id}
                                initial={{ scale: 0.99 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.99 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="relative w-full flex-1 flex flex-col z-10"
                            >
                                {/* Outer Glow/Shadow effect */}
                                <div className="absolute -inset-6 bg-white/30 rounded-[48px] blur-2xl -z-10" />

                                {/* Layer 1 — outermost white border + shadow */}
                                <div className="bg-white rounded-[24px] flex-1 flex flex-col p-[12px]">
                                    {/* Layer 2 — mid border ring */}
                                    <div className="rounded-[12px] flex-1 flex flex-col p-[8px] border border-[#E1E4EA] relative bg-black/2 z-0">
                                        <div className="rounded-[8px] flex-1 flex flex-col border border-[#E1E4EA] overflow-hidden relative z-10 bg-white ">
                                            <div className="card-inner rounded-[8px] flex-1 relative overflow-hidden">
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={selectedAccelerator.id}
                                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                                        className="absolute inset-0"
                                                    >
                                                        <Image
                                                            src={selectedAccelerator.logo}
                                                            alt={selectedAccelerator.name}
                                                            fill
                                                            sizes="w-full"
                                                            className="object-cover"
                                                            priority
                                                        />

                                                        {/* Bottom Content Overlay */}
                                                        <div className="absolute inset-x-0 top-[55%] bottom-0 p-6 pt-0 bg-linear-to-t  text-left">
                                                            <motion.h3
                                                                initial={{ y: 20, opacity: 0 }}
                                                                animate={{ y: 0, opacity: 1 }}
                                                                transition={{ duration: 0.4, delay: 0.2 }}
                                                                className="text-foreground text-[24px] font-semibold leading-[32px] text-center mb-4"
                                                            >
                                                                {selectedAccelerator.fullName}
                                                            </motion.h3>
                                                            <motion.p
                                                                initial={{ y: 20, opacity: 0 }}
                                                                animate={{ y: 0, opacity: 1 }}
                                                                transition={{ duration: 0.4, delay: 0.3 }}
                                                                className="text-sub-body-text text-[16px] font-normal leading-[28px] text-center"
                                                            >
                                                                {selectedAccelerator.description}
                                                            </motion.p>
                                                        </div>
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col justify-center py-6">
                        {rightColumnAccs.map((acc) => {
                            const index = accelerators.findIndex(a => a.id === acc.id);
                            return (
                                <SideCard
                                    key={acc.id}
                                    accelerator={acc}
                                    isActive={activeIndex === index}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        progressRef.current = 0;
                                        setProgress(0);
                                    }}
                                    onMouseEnter={() => setHoveredId(acc.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    progress={activeIndex === index ? progress : 0}
                                    isPaused={isProgressPaused}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

const SideCard = ({
    accelerator,
    isActive,
    onClick,
    onMouseEnter,
    onMouseLeave,
    progress,
    isPaused,
}: {
    accelerator: Accelerator;
    isActive: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    progress: number;
    isPaused: boolean;
}) => {
    return (
        <div
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`relative cursor-pointer group transition-all duration-500 p-8 flex flex-col ${isActive
                ? "bg-white shadow-[0_15px_35px_rgba(0,0,0,0.08)] scale-[1.01]"
                : "hover:bg-white/40"
                } ${accelerator.side === "right" ? "items-end text-right" : "items-start text-left"}`}
        >
            {/* Vertical Indicator Bar */}

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

export default OurAcceleratorsCardSection;