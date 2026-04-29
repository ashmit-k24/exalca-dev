"use client";

import React from "react";
import PillsHeading from "@/components/Atoms/PillsHeading";
import OurExcellenceCard from "@/components/Molecules/HomePage/OurExcellenceCard";
import { IMAGE_URLS } from "@/constants/images.constants";

const EXCELLENCE_DATA = [
  {
    image: IMAGE_URLS.PROJECTS_DELIVERED,
    count: "452+",
    title: "PROJECTS DELIVERED",
    description:
      "With 3 million+ person-hours of effort, backed by 30+ active projects at any time.",
  },
  {
    image: IMAGE_URLS.DIGITAL_TECHNOLOGY,
    count: "20+",
    title: "DIGITAL TECHNOLOGY",
    description:
      "And a dedicated CoE for Mobility, Industry 4.0, and Cloud solutions.",
  },
  {
    image: IMAGE_URLS.GROWING_WORK_FORCE,
    count: "200+",
    title: "GROWING WORK<br/> FORCE",
    description:
      "A balanced team of SMEs, Solution Architects, Consultants, and Technology Evangelists.",
  },
  {
    image: IMAGE_URLS.VALUED_CLIENTELE,
    count: "150+",
    title: "VALUED CLIENTELE",
    description: "with an impressive 90% repeat engagement rate.",
  },
];

const OurExcellence = () => {
  return (
    <section className="OurExcellence sec_padding bg-[#F5F7FA] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <PillsHeading text="Our Excellence" className="mb-6" />

          <h2 className="section-title-h2 text-gradient font-semibold">
            Driving Growth with Proven Capability
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXCELLENCE_DATA.map((item, index) => (
            <OurExcellenceCard
              key={index}
              {...item}
              className={index === 1 || index === 3 ? "lg:mt-[80px]" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExcellence;
