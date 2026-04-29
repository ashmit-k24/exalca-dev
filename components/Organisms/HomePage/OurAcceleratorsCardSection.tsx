"use client";

import React, { useState, useEffect } from "react";
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
        logo: IMAGE_URLS.FSCNXT_ICON,
        gradient: "linear-gradient(110.45deg, rgba(109, 149, 254, 0.5) 4.39%, rgba(186, 221, 255, 0.5) 24.1%, rgba(230, 243, 255, 0.5) 49.2%, rgba(236, 254, 246, 0.5) 74.29%, rgba(113, 214, 108, 0.5) 97.59%)",
        side: "left",
    },
    {
        id: "vproc",
        name: "Vproc",
        fullName: "Vproc - AI powered p2p Suit for SAP",
        description: "Optimize your procure-to-pay process with AI-driven insights.",
        icon: IMAGE_URLS.VPROC_ICON,
        logo: IMAGE_URLS.VPROC_ICON,
        gradient: "linear-gradient(110.45deg, rgba(109, 149, 254, 0.2) 4.39%, rgba(236, 254, 246, 0.2) 74.29%, rgba(113, 214, 108, 0.2) 97.59%)",
        side: "left",
    },
    {
        id: "vgenex",
        name: "VGenex",
        fullName: "VGenex – Weighbridge Integrated Gate Entry and Exit Application",
        description: "Seamlessly manage gate operations and weighbridge integration.",
        icon: IMAGE_URLS.VGENEX_ICON,
        logo: IMAGE_URLS.VGENEX_ICON,
        gradient: "linear-gradient(110.45deg, rgba(113, 214, 108, 0.2) 4.39%, rgba(236, 254, 246, 0.2) 24.1%, rgba(109, 149, 254, 0.2) 97.59%)",
        side: "right",
    },
    {
        id: "nexware",
        name: "Nexware",
        fullName: "Nexware – Smarter Mobile Warehouse Management Solution",
        description: "Modern mobile WMS for enhanced warehouse efficiency.",
        icon: IMAGE_URLS.NEXWARE_ICON,
        logo: IMAGE_URLS.NEXWARE_ICON,
        gradient: "linear-gradient(110.45deg, rgba(109, 149, 254, 0.2) 4.39%, rgba(186, 221, 255, 0.2) 24.1%, rgba(230, 243, 255, 0.2) 49.2%, rgba(236, 254, 246, 0.2) 74.29%, rgba(113, 214, 108, 0.2) 97.59%)",
        side: "right",
    },
    {
        id: "bpcloud",
        name: "BP Cloud",
        fullName: "BP Cloud - Business Partner Collaboration Platform",
        description: "Connect and collaborate with your business partners effectively.",
        icon: IMAGE_URLS.BP_CLOUD_ICON,
        logo: IMAGE_URLS.BP_CLOUD_ICON,
        gradient: "linear-gradient(110.45deg, rgba(186, 221, 255, 0.2) 24.1%, rgba(230, 243, 255, 0.2) 49.2%, rgba(236, 254, 246, 0.2) 74.29%)",
        side: "right",
    },
];

const OurAcceleratorsCardSection = () => {
    const [selectedId, setSelectedId] = useState(accelerators[1].id); // Default to FSCNxt

    const selectedAccelerator =
        accelerators.find((acc) => acc.id === selectedId) || accelerators[0];

    const leftColumnAccs = accelerators.filter((acc) => acc.side === "left");
    const rightColumnAccs = accelerators.filter((acc) => acc.side === "right");

    useEffect(() => {
        const timer = setTimeout(() => {
            setSelectedId((prevId) => {
                const currentIndex = accelerators.findIndex((acc) => acc.id === prevId);
                const nextIndex = (currentIndex + 1) % accelerators.length;
                return accelerators[nextIndex].id;
            });
        }, 3000);

        return () => clearTimeout(timer);
    }, [selectedId]);

    return (
        <section className="OurAcceleratorsCardSection py-24 bg-[#F5F7FA] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-0">

                    {/* Left Column */}
                    <div className="flex-1 flex flex-col justify-center py-6">
                        {leftColumnAccs.map((acc) => (
                            <SideCard
                                key={acc.id}
                                accelerator={acc}
                                isActive={selectedId === acc.id}
                                onClick={() => setSelectedId(acc.id)}
                            />
                        ))}
                    </div>

                    {/* Middle Column */}
                    <div className="flex-1 flex flex-col relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedAccelerator.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="relative w-full flex-1 flex flex-col z-10"
                            >
                                {/* Outer Glow/Shadow effect */}
                                <div className="absolute -inset-6 bg-white/30 rounded-[48px] blur-2xl -z-10" />

                                {/* Layer 1 — outermost white border + shadow */}
                                <div className="bg-white rounded-[40px] flex-1 flex flex-col p-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#DDE4EF]">
                                    {/* Layer 2 — mid border ring */}
                                    <div className="rounded-[35px] flex-1 flex flex-col p-[5px] border border-[#E8EDF7] relative bg-black/5 z-0">
                                        {/* Layer 3 — bg-white blocks black/50; overflow-hidden clips corners */}
                                        <div className="rounded-[30px] flex-1 flex flex-col border border-[#EDF1FA] overflow-hidden relative z-10 bg-white">
                                            <div
                                                className="rounded-[28px] flex-1 flex flex-col items-center justify-center p-12 text-center transition-all duration-1000"
                                                style={{ background: selectedAccelerator.gradient }}
                                            >
                                                <div className="relative w-full flex-1 flex items-center justify-center mb-10">


                                                    <motion.div
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ duration: 0.4, delay: 0.2 }}
                                                        className="relative z-10 w-full"
                                                    >
                                                        <Image
                                                            src={selectedAccelerator.logo}
                                                            alt={selectedAccelerator.name}
                                                            width={360}
                                                            height={180}
                                                            className="object-contain h-[200px] drop-shadow-2xl mx-auto"
                                                        />
                                                    </motion.div>
                                                </div>

                                                <div className="relative z-20 mt-auto">
                                                    <motion.h3
                                                        initial={{ y: 10, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ duration: 0.3, delay: 0.3 }}
                                                        className="text-2xl font-extrabold text-[#0E121B] mb-4 leading-tight tracking-tight"
                                                    >
                                                        {selectedAccelerator.fullName}
                                                    </motion.h3>
                                                    <motion.p
                                                        initial={{ y: 10, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ duration: 0.3, delay: 0.4 }}
                                                        className="text-[#64748B] text-base font-medium leading-relaxed max-w-[340px] mx-auto"
                                                    >
                                                        {selectedAccelerator.description}
                                                    </motion.p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col justify-center py-6">
                        {rightColumnAccs.map((acc) => (
                            <SideCard
                                key={acc.id}
                                accelerator={acc}
                                isActive={selectedId === acc.id}
                                onClick={() => setSelectedId(acc.id)}
                            />
                        ))}
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
}: {
    accelerator: Accelerator;
    isActive: boolean;
    onClick: () => void;
}) => {
    return (
        <div
            onClick={onClick}
            className={`relative cursor-pointer group transition-all duration-500 p-8 flex flex-col ${isActive
                ? "bg-white shadow-[0_15px_35px_rgba(0,0,0,0.08)] scale-[1.01]"
                : "hover:bg-white/40"
                } ${accelerator.side === "right" ? "items-end text-right" : "items-start text-left"}`}
        >
            {/* Vertical Indicator Bar */}

            {isActive && (
                <motion.div
                    layoutId={`activeProgressBar-${accelerator.side}`}
                    initial={{ height: "0%" }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 3, ease: "linear" }}
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
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border-2 transition-all duration-500 shadow-sm ${isActive ? "bg-white border-[#F1F5F9]" : "bg-[#F8FAFC] border-transparent "
                }`}>
                <Image
                    src={accelerator.icon}
                    alt={accelerator.name}
                    width={36}
                    height={36}
                    className="object-contain"
                />
            </div>

            <h4 className={`text-lg font-bold leading-snug transition-all duration-500 w-11/12 ${isActive ? "text-[#0E121B]" : "text-[#94A3B8] group-hover:text-[#64748B]"
                }`}>
                {accelerator.fullName}
            </h4>
        </div>
    );
};

export default OurAcceleratorsCardSection;