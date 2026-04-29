import React from "react";
import OurExcellence from "../Organisms/HomePage/OurExcellence";
import OurAccelerators from "../Organisms/HomePage/OurAccelerators";
import ClientLogo from "../Molecules/ClientLogo/ClientLogo";
import OurAccolades from "../Molecules/OurAccolades/OurAccolades";
import OurAcceleratorsCardSection from "../Organisms/HomePage/OurAcceleratorsCardSection";
import HeroBanner from "../Molecules/HeroBanner/HeroBanner";
import AboutUs from "../Molecules/AboutUs/AboutUs";
import Accreditations from "../Molecules/Accreditations/Accreditations";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <Accreditations />
      <OurExcellence />
      <OurAccelerators />
      <OurAcceleratorsCardSection />
      <OurAccolades />
      <ClientLogo />
    </>
  );
};

export default HomePage;
