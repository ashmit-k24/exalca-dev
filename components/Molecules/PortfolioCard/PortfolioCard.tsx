"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PortfolioItem {
    title: string;
    description: string;
    image: string;
}

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative"
        >
            {/* Outer Layer - Transparent Border Effect */}
            <div className="bg-[#F5F7FA]/50% rounded-[12px] p-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-border h-full min-h-[380px] flex flex-col">
                {/* Inner Layer */}
                <div className="rounded-[8px] flex-1 flex flex-col border border-border relative overflow-hidden bg-white">
                    <div className="p-8 pb-0! flex flex-col h-full z-10">
                        <h3 className="text-[20px] font-bold text-[#0E121B] leading-[30px] mb-4">
                            {item.title}
                        </h3>
                        <p className="text-[14px] text-[#64748B] leading-[24px] mb-8 max-w-[280px]">
                            {item.description}
                        </p>

                        <div className="mt-auto">
                            <Link href="#" className="flex w-fit min-w-[114px] py-2 px-5 border border-border rounded-[10px] items-center gap-2 text-[14px] font-semibold text-[#0E121B] hover:gap-3 transition-all duration-300">
                                Explore <span className="text-[18px]">›</span>
                            </Link>
                        </div>
                    </div>

                    {/* Absolute Image at Bottom Side */}
                    <div className=" w-full h-auto pointer-events-none">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={500}
                            height={500}
                            className="object-bottom w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioCard;
