import React from "react";
import OurExcellence from "../Organisms/HomePage/OurExcellence";
import ClientLogo from "../Molecules/ClientLogo/ClientLogo";
import OurAccolades from "../Molecules/OurAccolades/OurAccolades";
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
      <OurAccolades />
      <ClientLogo />
    </>
  );
};

export default HomePage;
