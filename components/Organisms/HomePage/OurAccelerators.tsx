"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PillsHeading from '@/components/Atoms/PillsHeading';
import OurAccelatorsSvg from '@/components/Atoms/svgComponents/bgElements/ourAccelatorsSvg';

const OurAccelerators = () => {
    return (
        <section className='OurAccelerators relative py-24 bg-[#F5F7FA] overflow-hidden min-h-[700px] md:min-h-[900px] flex flex-col items-center'>
            {/* Header Content - Stays inside container */}
            <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <PillsHeading text="Our Accelerators" className="mb-8" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-[1.1] mb-10 max-w-4xl"
                >
                    Ready Solutions - Accelerated Return On SAP Investment
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[18px] md:text-[20px] text-sub-body-text leading-relaxed max-w-3xl mb-32"
                >
                    Our ready solution are industry demanding, ready to deploy with
                    fixed scope and fixed time line that define, realize and sustain
                    real business change.
                </motion.p>
            </div>

            {/* Responsive Curve and Icons Container */}
            <div className="relative -mt-60 w-full aspect-1440/500 mx-auto z-10">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <OurAccelatorsSvg className="w-full h-full object-contain" />
                </div>
            </div>
        </section>
    );
}

export default OurAccelerators;
