import React from "react";
import AboutBanner from "../Molecules/PageBanner/PageBanner";
import { IMAGE_URLS } from "@/constants/images.constants";
import AboutUs from "../Molecules/AboutUs/AboutUs";
import MissionVission from "../Molecules/MissionVission/MissionVission";
import CoreValues from "../Molecules/CoreValues/CoreValues";
import IndustryWeServe from "../Molecules/IndustryWeServe/IndustryWeServe";
import Expertise from "../Molecules/Expertise/Expertise";

const AboutUsPage = () => {
  return (
    <>
      <AboutBanner
        image={IMAGE_URLS.ABOUT_BANNER}
        title="Your Trusted SAP & Digital Solution Partner"
        description="Deep technology expertise in digital transformation across financial service, Business partner collaboration and information excellence areas."
      />
      <AboutUs
        content={[
          "Established in 2016, Exalca Technologies Pvt. Ltd. is a leading IT services and business solutions company headquartered in Bengaluru, India. We specialize in delivering enterprise-grade digital transformation solutions centered around SAP, automation, mobility, and data optimization.",
          "At Exalca, we go beyond technology - we focus on creating measurable business value. Our approach combines deep domain expertise with innovative, ready-to-deploy solutions that deliver outcomes with fixed scope, fixed timeline, and fixed value. We empower organizations to simplify processes, enhance productivity, and optimize data-driven decisions.",
        ]}
        className="sec_padding pb-0! bg-[#F5F7FA]"
      />

      <MissionVission />
      <CoreValues />
      <IndustryWeServe />
      <Expertise />
    </>
  );
};

export default AboutUsPage;
