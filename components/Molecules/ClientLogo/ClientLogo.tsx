import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { IMAGE_URLS } from "@/constants/images.constants";

const ClientLogo = () => {
  const logos = [
    { src: IMAGE_URLS.NILKAMAL, alt: "Nilkamal" },
    { src: IMAGE_URLS.TENNECO, alt: "Tenneco" },
    { src: IMAGE_URLS.PRICOL, alt: "Pricol" },
    { src: IMAGE_URLS.ESSEL, alt: "Essel" },
    { src: IMAGE_URLS.OLAM, alt: "Olam" },
    { src: IMAGE_URLS.INDOFIL, alt: "Indofil" },
    { src: IMAGE_URLS.GAAR, alt: "GAAR" },
    { src: IMAGE_URLS.ARICENT, alt: "Aricent" },
  ];

  return (
    <section className="sec_padding overflow-hidden ">
      <div className="container">
        <h2 className="section-title-h2 text-gradient text-center font-semibold">
          We Are Trusted By
        </h2>
      </div>

      <div className="mt-15">
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-8 md:mx-11 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={70}
                className="object-contain w-auto h-12 md:h-16"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogo;
