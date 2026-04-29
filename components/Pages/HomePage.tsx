import React from "react";
import OurExcellence from "../Organisms/HomePage/OurExcellence";
import OurAccelerators from "../Organisms/HomePage/OurAccelerators";
import ClientLogo from "../Molecules/ClientLogo/ClientLogo";
import OurAccolades from "../Molecules/OurAccolades/OurAccolades";
import OurAcceleratorsCardSection from "../Organisms/HomePage/OurAcceleratorsCardSection";

const HomePage = () => {
  return (
    <>
      <OurExcellence />
      <OurAccelerators />
      <OurAcceleratorsCardSection />
      <OurAccolades />
      <ClientLogo />
    </>
  );
};

export default HomePage;
