"use client";

import React from 'react';
import PillsHeading from '@/components/Atoms/PillsHeading';
import { IMAGE_URLS } from '@/constants/images.constants';
import PortfolioCard from '@/components/Molecules/PortfolioCard/PortfolioCard';

const portfolioItems = [
    {
        title: "Business Transformation Services",
        description: "Adopt mobility, cloud, analytics, and process solutions to modernize operations",
        image: IMAGE_URLS.PORTFOLIO_BTS,
        column: 1
    },
    {
        title: "Custom Development",
        description: "Build scalable, secure solutions tailored to unique business requirements",
        image: IMAGE_URLS.PORTFOLIO_CUSTOM_DEV,
        column: 1
    },
    {
        title: "Rapid Deployment & BTP Applications for SAP",
        description: "Ready-to-deploy SAP BTP solutions enabling faster go-live timelines",
        image: IMAGE_URLS.PORTFOLIO_RAPID_DEPLOY,
        column: 2
    },
    {
        title: "Platform & Technology Integration Services (CPI)",
        description: "Integrate SAP and leading platforms for unified technology ecosystems",
        image: IMAGE_URLS.PORTFOLIO_CPI,
        column: 2
    },
    {
        title: "Staff Augmentation",
        description: "Skilled professionals to scale teams and accelerate project delivery",
        image: IMAGE_URLS.PORTFOLIO_STAFF_AUG,
        column: 2
    },
    {
        title: "Master Data As A Service (MDAAS)",
        description: "Cleanse, govern, enrich, and optimize master data for excellence",
        image: IMAGE_URLS.PORTFOLIO_MDAAS,
        column: 3
    },
    {
        title: "Application Management Services (AMS)",
        description: "Continuous application support to enhance performance and system stability",
        image: IMAGE_URLS.PORTFOLIO_AMS,
        column: 3
    }
];

const OurPortfolio = () => {
    const col1 = portfolioItems.filter(item => item.column === 1);
    const col2 = portfolioItems.filter(item => item.column === 2);
    const col3 = portfolioItems.filter(item => item.column === 3);

    return (
        <section className='OurPortfolio relative py-24 bg-[#F5F7FA] overflow-hidden min-h-[1000px]'>
            {/* Purple background div in center */}
            <div
                className="absolute top-1/2 w-[738px] blur-[250px] bg-[#5B49E933] h-[812px] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0"

            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <PillsHeading text="Our Portfolio" className="mb-6" />
                    <h2 className="section-title-h2 text-gradient font-semibold">Our Service Offerings</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {/* First Column */}
                    <div className="flex flex-col gap-8 lg:mt-[160px]">
                        {col1.map((item, idx) => (
                            <PortfolioCard key={idx} item={item} />
                        ))}
                    </div>

                    {/* Second Column */}
                    <div className="flex flex-col gap-8">
                        {col2.map((item, idx) => (
                            <PortfolioCard key={idx} item={item} />
                        ))}
                    </div>

                    {/* Third Column */}
                    <div className="flex flex-col gap-8 lg:mt-[160px]">
                        {col3.map((item, idx) => (
                            <PortfolioCard key={idx} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurPortfolio;