"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import HeroScreen1 from "./HeroScreen1";
import HeroScreen2 from "./HeroScreen2";
import HeroScreen3 from "./HeroScreen3";
import HeroScreen4 from "./HeroScreen4";
import Image from "next/image";
import { IMAGE_URLS } from "@/constants/images.constants";

const HeroBanner = () => {
  const [direction, setDirection] = useState<"is-forward" | "is-backward">(
    "is-forward",
  );

  return (
    <section
      className={`relative w-full group h-screen min-h-[880px] ${direction}`}
    >
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        onSlideNextTransitionStart={() => setDirection("is-forward")}
        onSlidePrevTransitionStart={() => setDirection("is-backward")}
        navigation={{
          nextEl: ".hero-button-next",
          prevEl: ".hero-button-prev",
        }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <HeroScreen1 />
        </SwiperSlide>

        <SwiperSlide>
          <HeroScreen2 />
        </SwiperSlide>

        <SwiperSlide>
          <HeroScreen3 />
        </SwiperSlide>

        <SwiperSlide>
          <HeroScreen4 />
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        <button className="hero-button-next w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm cursor-pointer z-50 bg-[#1A0066]/30">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <button className="hero-button-prev w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm cursor-pointer z-50">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      </div>

      <div className="sap-image absolute top-[70px] right-10 z-999">
        <Image
          src={IMAGE_URLS.SAP_PARTNER_LOGO}
          alt="sap-image"
          height={70}
          width={116}
          className="h-auto w-auto object-contain"
        />
      </div>

      {/* Mouse Scroll Icon */}
      <div className="absolute right-8 bottom-36 z-20 hidden md:block">
        <div className="w-[30px] h-[50px] border-2 border-[#3B3B3B] rounded-full bg-white flex justify-center pt-2 cursor-pointer ">
          <div className="w-1 h-2 bg-black rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
