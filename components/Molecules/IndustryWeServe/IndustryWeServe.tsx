"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import { IMAGE_URLS } from "@/constants/images.constants";
import PillsHeading from "@/components/Atoms/PillsHeading";

interface IndustryItem {
  id: number;
  title: string;
  icon: string;
}

interface IndustryWeServeProps {
  pillsTitle?: string;
  title?: string;
  highlightedTitle?: string;
  items?: IndustryItem[];
}

const IndustryWeServe = ({
  pillsTitle = "Portfolio",
  title = "Industry",
  highlightedTitle = "We Serve",
  items = [
    { id: 1, title: "Manufacturing", icon: IMAGE_URLS.MANUFACTURING },
    { id: 2, title: "Pharma", icon: IMAGE_URLS.PHARMA },
    { id: 3, title: "Automobile", icon: IMAGE_URLS.AUTOMOBILE },
    { id: 4, title: "Power & Cement", icon: IMAGE_URLS.POWER_CEMENT },
    { id: 5, title: "Engineering", icon: IMAGE_URLS.ENGINEERING },
    { id: 6, title: "Agro", icon: IMAGE_URLS.AGRO },
    { id: 7, title: "FMCG", icon: IMAGE_URLS.FMCG },
  ],
}: IndustryWeServeProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="sec_padding pb-0! bg-[#F5F7FA]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div className="w-full md:w-5/12">
            <PillsHeading text={pillsTitle} className="mb-4" />
            <h2 className="section-title-h2 text-gradient font-semibold">
              {title} <span className="text-[#3F21A1]">{highlightedTitle}</span>
            </h2>
          </div>

          <div className="flex gap-4 mb-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 md:w-[52px] md:h-[52px] cursor-pointer rounded-full flex items-center justify-center text-[#0E121B] hover:bg-gray-50 transition-colors bg-[#f2f3f5] z-50"
              style={{
                border: "1px solid #FFFFFF",
                boxShadow:
                  "0px 2px 6px 0px #FFFFFF inset, 0px -2px 4px 0px rgba(14, 18, 27, 0.08) inset, 0px 16px 24px -8px rgba(24, 27, 37, 0.1), 0px 0px 0px 1px #F0F2F5",
              }}
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 md:w-[52px] md:h-[52px] cursor-pointer rounded-full bg-[#1A1A24] flex items-center justify-center text-white hover:bg-black transition-colors z-50"
              style={{
                border: "1px solid var(--stroke-strong-950, #0E121B)",
                boxShadow:
                  "0px 2px 6px 0px #FFFFFF33 inset, 0px -2px 4px 0px #0E121B inset, 0px 16px 24px -8px #181B251A, 0px 0px 0px 1px var(--neutral800, #2C303D)",
              }}
            >
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            className="pb-12!"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="bg-white rounded-[8px] flex flex-col items-center justify-center border border-[#E1E4EA] transition-all duration-500 group cursor-pointer"
                  style={{
                    boxShadow: "0px 16px 32px -12px #0E121B1A",
                  }}
                >
                  <div className="relative w-full flex items-center justify-center py-[30px]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={285}
                      height={158}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <h3 className="text-[24px] font-semibold text-[#0E121B] text-center pb-[30px]">
                    {item.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default IndustryWeServe;
