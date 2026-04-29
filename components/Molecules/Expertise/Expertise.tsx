import PillsHeading from "@/components/Atoms/PillsHeading";
import { IMAGE_URLS } from "@/constants/images.constants";
import Image from "next/image";
import React from "react";

interface ExpertiseItem {
  image: string;
  title: string;
}

interface ExpertiseProps {
  pillsTitle?: string;
  title?: string;
  items?: ExpertiseItem[];
}

const Expertise = ({
  pillsTitle = "Expertise",
  title = "Domain We Focus",
  items = [
    {
      image: IMAGE_URLS.INFORMATION_LIFECYCLE,
      title: "Information Lifecycle Management",
    },
    {
      image: IMAGE_URLS.FINANCIAL_SERVICE,
      title: "Financial Services Automation",
    },
    {
      image: IMAGE_URLS.SHOP_FLOOR,
      title: "Shop Floor Process Optimization",
    },
    {
      image: IMAGE_URLS.PARTNER_COLLABORATION,
      title: "Partner Collaboration Platform",
    },
    {
      image: IMAGE_URLS.SUPPLY_CHAIN,
      title: "Supply Chain Management",
    },
  ],
}: ExpertiseProps) => {
  return (
    <section className="sec_padding bg-[#F5F7FA]">
      <div className="container">
        <div className="flex justify-center flex-col items-center">
          <PillsHeading text={pillsTitle} />
          <h2 className="section-title-h2 text-gradient font-semibold mt-4">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-[40px] gap-y-10 md:mt-10">
          {items.map((item, index) => (
            <div key={index} className="item relative text-center group">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={264}
                  className="h-auto w-full object-cover object-center"
                />
              </div>
              <p className="text-base max-w-[208px] mx-auto text-center text-white absolute bottom-14 left-0 right-0 z-10 px-4">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
