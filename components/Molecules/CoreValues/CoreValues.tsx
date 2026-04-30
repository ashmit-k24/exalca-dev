import PillsHeading from "@/components/Atoms/PillsHeading";
import { IMAGE_URLS } from "@/constants/images.constants";
import Image from "next/image";
import React from "react";

interface CoreValueItem {
  title: string;
  description: string;
  icon: string;
}

const CORE_VALUES_DATA: CoreValueItem[] = [
  {
    title: "Integrity",
    description: "We do what is right, always with honesty and fairness",
    icon: IMAGE_URLS.INTEGRITY,
  },
  {
    title: "Customer Sucess",
    description: "We measure our success by the success of our customers",
    icon: IMAGE_URLS.CUSTOMER_SUCCESS,
  },

  {
    title: "Innovation",
    description: "Embedded in our DNA. Driving purposeful progress.",
    icon: IMAGE_URLS.INNOVATION,
  },
  {
    title: "People First",
    description:
      "We foster an inclusive culture where every voice is valued, & our environment enables people to grow, contribute, & succeed.",
    icon: IMAGE_URLS.PEOPLE_FIRST,
  },
  {
    title: "Accountability",
    description:
      "Responsibility in every decision. Committed to excellence in every outcome",
    icon: IMAGE_URLS.ACCOUNTABILITY,
  },
  {
    title: "Develop Self & Team",
    description:
      "We grow continuously - as individuals and as a team - through learning, collaboration, and shared achievement.",
    icon: IMAGE_URLS.DEVELOP_SELF_TEAM,
  },
];

interface CoreValuesProps {
  pillsTitle?: string;
  title?: string;
}

const CoreValues = ({
  pillsTitle = "Our DNA",
  title = "Core Values",
}: CoreValuesProps) => {
  return (
    <section className="sec_padding bg-[#F5F7FA]">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-16">
          <PillsHeading text={pillsTitle} />
          <h2 className="section-title-h2 mt-4 text-gradient text-center font-bold">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E2E8F0] bg-[#F5F7FA]/30 relative">
          {CORE_VALUES_DATA.map((value, index) => {
            const isLastRow = index >= 3;
            const isLastCol = (index + 1) % 3 === 0;

            return (
              <div
                key={index}
                className={`relative p-10 flex flex-col gap-6 transition-all duration-300 bg-transparent hover:bg-white hover:shadow-[0px_30px_60px_rgba(0,0,0,0.08)] hover:z-10 hover:border-r-4 hover:border-[#2EB67D] ${
                  !isLastRow ? "border-b border-[#E2E8F0]" : ""
                } ${!isLastCol ? "border-r border-[#E2E8F0]" : ""} ${
                  index === 0 ? "" : ""
                } ${index === 2 ? "" : ""} ${index === 3 ? "" : ""} ${
                  index === 5 ? "" : ""
                }`}
              >
                <div className="w-20 h-20 relative mb-2">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-[#1A1C1E]">
                    {value.title}
                  </h3>
                  <p className="text-[#64748B] leading-[1.6] text-base font-medium">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
