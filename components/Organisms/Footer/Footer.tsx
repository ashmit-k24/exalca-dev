"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { IMAGE_URLS } from "@/constants/images.constants";
import { Linkedin } from "@/components/Atoms/svgComponents/footer/Linkedin";
import { Instagram } from "@/components/Atoms/svgComponents/footer/Instagram";

const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white relative pt-12 mt-auto overflow-hidden">
      {/* Background Watermark */}

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-white/20">
          <div className="mb-6 md:mb-0">
            <Image
              src={IMAGE_URLS.EXALCA_FOOTER_LOGO}
              alt="Exalca"
              width={180}
              height={50}
              className="h-10 w-auto"
            />
          </div>
          <nav className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Site Map
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Contact Us
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Career
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Cookies
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 pt-10">
          {/* Social Icons */}
          <div className="flex gap-6 lg:col-span-1">
            <Link
              href="#"
              className="hover:text-white text-gray-200 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="hover:text-white text-gray-200 transition-colors"
            >
              <XIcon />
            </Link>
            <Link
              href="#"
              className="hover:text-white text-gray-200 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="hover:text-white text-gray-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          {/* Corporate Office */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-sm mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-secondary block"></span> Corporate
              Office
            </h4>
            <p className="text-[13px] text-gray-300 mb-4 leading-relaxed">
              #433, 3rd Floor, 19th Main,
              <br />
              Sector 4, HSR Layout,
              <br />
              Bangalore - 560 102
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+918041115686"
                className="text-[13px] text-gray-300 flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" /> +91 80 4111 5686
              </a>
              <a
                href="mailto:sales@exalca.com"
                className="text-[13px] text-gray-300 flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" /> sales@exalca.com
              </a>
            </div>
          </div>

          {/* Delivery Center 1 */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-sm mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-secondary block"></span> Delivery
              Center
            </h4>
            <p className="text-[13px] text-gray-300 mb-4 leading-relaxed">
              2nd Floor, Tower C, India
              <br />
              Land Tech Park, KGISL SEZ,
              <br />
              Saravanampatti,
              <br />
              Coimbatore - 641035
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+914224273434"
                className="text-[13px] text-gray-300 flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" /> +91 422 - 4273434
              </a>
              <a
                href="mailto:support@exalca.com"
                className="text-[13px] text-gray-300 flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" /> support@exalca.com
              </a>
            </div>
          </div>

          {/* Delivery Center 2 */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-sm mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-secondary block"></span> Delivery
              Center
            </h4>
            <p className="text-[13px] text-gray-300 mb-4 leading-relaxed">
              5th Floor, Raheja Titanium,
              <br />
              Western Urban Road,
              <br />
              Goregaon - East,
              <br />
              Mumbai - 400063
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919900064683"
                className="text-[13px] text-gray-300 flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" /> +91 99000 64683
              </a>
              <a
                href="mailto:sales@exalca.com"
                className="text-[13px] text-gray-300 flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" /> sales@exalca.com
              </a>
            </div>
          </div>

          {/* Exalca Arabia */}
          <div className="lg:col-span-1">
            <p className="text-[13px] text-gray-300 mb-4 leading-relaxed">
              P5-ELOP Office No E23G-01,
              <br />
              Hamriyah Free Zone Sharjah,
              <br />
              United Arab Emirates
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919900064683"
                className="text-[13px] text-gray-300 flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" /> +91 99000 64683
              </a>
              <a
                href="mailto:sales@exalca.com"
                className="text-[13px] text-gray-300 flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" /> sales@exalca.com
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 z-0 pointer-events-none flex justify-center">
          <img src={IMAGE_URLS.OVETLAY_FOOTER_LOGO} alt="" className="w-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
