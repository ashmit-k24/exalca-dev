import React from "react";

interface AboutBannerProps {
  image: string;
  title: string;
  description: string;
}

const AboutBanner = ({ image, title, description }: AboutBannerProps) => {
  return (
    <section
      className="bg-no-repeat bg-center bg-cover h-[300px] md:h-[400px] lg:h-[440px] flex items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="w-full lg:w-6/12 xl:w-6/12">
          <h1 className="section-title-h2 font-semibold text-gradient mb-6">
            {title}
          </h1>
          <p className="text-base md:text-lg text-[#232323]">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
