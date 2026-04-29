import React from "react";
import OurExcellence from "../Organisms/HomePage/OurExcellence";
import OurAccelerators from "../Organisms/HomePage/OurAccelerators";
import ClientLogo from "../Molecules/ClientLogo/ClientLogo";
import OurAccolades from "../Molecules/OurAccolades/OurAccolades";
import OurAcceleratorsCardSection from "../Organisms/HomePage/OurAcceleratorsCardSection";
import HeroBanner from "../Molecules/HeroBanner/HeroBanner";
import AboutUs from "../Molecules/AboutUs/AboutUs";
import Accreditations from "../Molecules/Accreditations/Accreditations";
import OurPortfolio from "../Organisms/HomePage/OurPortfolio";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <AboutUs
        content={[
          "<b>Exalca Technologies Pvt Ltd</b> is a leading provider of AI-powered, SAP-centric enterprise solutions, helping organizations transform with speed and confidence. We specialize in structured, fixed-scope implementations that simplify complex business processes, improve operational efficiency, and accelerate digital adoption across the enterprise. As a product company, our products are developed on SAP technologies and operate as native bolt-on solutions within the SAP landscape.",
          "With deep expertise in SAP, cloud, mobility, data governance, and full-stack development, Exalca delivers integrated solutions that drive automation, analytics, and enterprise intelligence. As an ISO 9001:2015 certified organization and a recognized SAP Build Partner and Microsoft Gold Partner, we ensure disciplined delivery, strong governance, and measurable business outcomes for our clients.",
        ]}
        className="sec_padding"
      />
      <Accreditations />
      <OurExcellence />
      <OurAccelerators />
      <OurAcceleratorsCardSection />
      <OurPortfolio />
      <OurAccolades />
      <ClientLogo />
    </>
  );
};

export default HomePage;
