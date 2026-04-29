"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import { IMAGE_URLS } from "@/constants/images.constants";
import PillsHeading from "@/components/Atoms/PillsHeading";

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const ACCOLADES_DATA = [
  {
    id: 1,
    quote:
      "Exalca’s Master Data Solution streamlined our master data processes and significantly reduced manual effort.",
    description:
      "The platform’s de-duplication algorithm, configurable workflows, and seamless SAP integration helped Amaraja Group improve data quality and operational efficiency.",
    author: "M Bhaskara Rao",
    role: "SAP Head, Amaraja Group (Amaron Batteries)",
    logo: IMAGE_URLS.AMARON_ICON,
  },
  {
    id: 2,
    quote:
      "Exalca’s MDM solution improved our master data quality and strengthened governance across our SAP ecosystem.",
    description:
      "With duplicate detection, rule-based automation, approval workflows, and seamless SAP integration, the platform helped United Breweries maintain accurate and well-governed master data.",
    author: "Derek Lopez",
    role: "General Manager – IT, United Breweries Ltd",
    logo: IMAGE_URLS.UB_ICON,
  },
  {
    id: 3,
    quote:
      "Exalca’s MDM solution improved our master data quality and streamlined our approval processes.",
    description:
      "With duplicate checking, rule-based automation, and structured workflows, the platform helped V-Guard simplify master data creation and improve operational efficiency.",
    author: "Prasanth V",
    role: "Deputy Manager, V-Guard Industries Limited",
    logo: IMAGE_URLS.VGURAD_ICON,
  },
  {
    id: 4,
    quote:
      "Exalca’s AP Automation improved our efficiency, accuracy, and compliance across invoice processing.",
    description:
      "With OCR, workflow approvals, and seamless SAP integration, the solution helped us reduce turnaround time, improve cash flow management, and handle exceptions efficiently.",
    author: "Sumit Gulati",
    role: "DGM, PISCIN – Panasonic Life Solutions India Pvt. Ltd.",
    logo: IMAGE_URLS.PANASONIC_ICON,
  },
];

const OurAccolades = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="sec_padding bg-[#F5F7FA]">
      <div className="container">
        <div className="text-center">
          <PillsHeading text="Our Accolades" className="mb-6" />
          <h2 className="section-title-h2 text-gradient text-center font-semibold">
            Trusted. Tested. Proven.
          </h2>
        </div>

        <div className="relative pt-12 px-6 md:px-12">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            className="w-full"
          >
            {ACCOLADES_DATA.map((item) => (
              <SwiperSlide key={item.id} className="pt-8 pb-4">
                <div className="bg-white p-10 md:px-8! md:py-10! relative mt-6 shadow-[0px_0px_20px_0px_#4721C81F]">
                  {/* Logo overlapping the top border */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white border-4 border-white  flex items-center justify-center overflow-hidden z-10 before:content-[''] before:absolute before:inset-0 before:rounded-full">
                    <Image
                      src={item.logo}
                      alt={`${item.author} company`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 md:gap-[65px] relative z-0">
                    {/* Left Quote */}
                    <div className="shrink-0 pt-2">
                      <QuoteIcon className="w-12 h-12 text-[#0E121B] " />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-5">
                      <h3 className="text-2xl md:text-[32px] font-semibold text-[#0E121B] mb-4">
                        {item.quote}
                      </h3>
                      <p className="text-[#444444] text-base mb-8 font-normal">
                        {item.description}
                      </p>

                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                          <h3 className="font-semibold text-[#0E121B] text-[20px]">
                            {item.author}
                          </h3>
                          <p className="text-[#717784] text-sm mt-2">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Quote */}
                    <div className="shrink-0 items-center mt-auto mb-28 hidden md:block">
                      <QuoteIcon className="w-12 h-12 text-[#0E121B] rotate-180" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Absolute Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 md:left-[75%] top-[73%] -translate-y-1/2 w-10 h-10 md:w-[52px] md:h-[52px] cursor-pointer rounded-full flex items-center justify-center text-[#0E121B] hover:bg-gray-50 transition-colors bg-[#f2f3f5] z-50"
            style={{
              border: "1px solid #FFFFFF",
              boxShadow:
                "0px 2px 6px 0px #FFFFFF inset, 0px -2px 4px 0px rgba(14, 18, 27, 0.08) inset, 0px 16px 24px -8px rgba(24, 27, 37, 0.1), 0px 0px 0px 1px #F0F2F5",
            }}
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 md:right-[16%] top-[73%] -translate-y-1/2 w-10 h-10 md:w-[52px] md:h-[52px] cursor-pointer rounded-full bg-[#1A1A24] flex items-center justify-center text-white hover:bg-black transition-colors z-50"
            style={{
              border: "1px solid var(--stroke-strong-950, #0E121B)",
              boxShadow:
                "0px 2px 6px 0px #FFFFFF33 inset, 0px -2px 4px 0px #0E121B inset, 0px 16px 24px -8px #181B251A, 0px 0px 0px 1px var(--neutral800, #2C303D)",
            }}
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurAccolades;
