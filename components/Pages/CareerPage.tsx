import React from "react";
import PageBanner from "../Molecules/PageBanner/PageBanner";
import { IMAGE_URLS } from "@/constants/images.constants";

const CareerPage = () => {
  return (
    <>
      <PageBanner
        image={IMAGE_URLS.CAREER_BANNER}
        title="Empowering Passion. Enabling Success."
        description="Join a dynamic team, experience a people-first culture that encourages innovation, recognizes performance, and empowers you to make an impact"
      />
    </>
  );
};

export default CareerPage;
