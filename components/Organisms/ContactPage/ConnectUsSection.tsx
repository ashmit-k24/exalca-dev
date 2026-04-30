import React from "react";
import PillsHeading from "@/components/Atoms/PillsHeading";
import ConnectUsCard from "@/components/Molecules/ContactPage/ConnectUsCard";
import { IMAGE_URLS } from "@/constants/images.constants";

const CONNECT_US_DATA = [
  {
    image: IMAGE_URLS.CUSTOM_DEVELOPMENT,
    title: "Custom Development",
   
  },
  {
    image: IMAGE_URLS.REQUEST_FOR_SOLUTION,
    title: "Request for Solution",
  
  },
  {
    image: IMAGE_URLS.RESOURCES,
    title: "Resources",
   
  },
];

const ConnectUsSection = () => {
  return (
    <section className="ConnectUsSection sec_padding overflow-hidden bg-[#F5F7FA]">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 flex flex-col items-center ">
          <PillsHeading text="Connect With Us" className="mb-4" />

          <h2 className="section-title-h2 text-center text-gradient font-semibold">
            What’s on Your Mind?
          </h2>

          <p className="mt-14 text-[24px] leading-10.5 text-foreground">
            We have driven growth and purposeful transformation across industries, and we are excited to build on your trust. Tell us what you are looking for and we will get you connected to the right people.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CONNECT_US_DATA.map((item) => (
            <ConnectUsCard
              key={item.title}
              {...item}
             
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectUsSection;
