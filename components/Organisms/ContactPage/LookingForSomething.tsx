import React from "react";
import LookingForSomethingCard from "@/components/Molecules/ContactPage/LookingForSomethingCard";
import { IMAGE_URLS } from "@/constants/images.constants";

const LOOKING_FOR_DATA = [
  {
    image: IMAGE_URLS.CSR_OBJECT,
    title: "CSR",
    description:
      "Connect with us to collaborate on meaningful CSR activities. Together, we can create a positive impact in our community",
  },
  {
    image: IMAGE_URLS.PARTNERSHIP,
    title: "Partnership",
    description:
      "Engage with us for mutually beneficial partnerships. Focused on results and shared success.",
  },
  {
    image: IMAGE_URLS.WEBSITE_FEEDBACK,
    title: "Website Feedback",
    description:
      "We value your feedback. Share your thoughts to help us improve.",
  },
];

const LookingForSomething = () => {
  return (
    <section className="LookingForSomething sec_padding bg-[#F5F7FA]">
      <div className="container">
        <h2 className="mb-14 section-title-h2 text-left font-semibold text-gradient">
          Looking for something else ?
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {LOOKING_FOR_DATA.map((item, index) => (
            <LookingForSomethingCard key={item.title} {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookingForSomething;