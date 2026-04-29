import React from "react";
import OurExcellence from "../Organisms/HomePage/OurExcellence";
import OurAccelerators from "../Organisms/HomePage/OurAccelerators";
import ClientLogo from "../Molecules/ClientLogo/ClientLogo";
import OurAccolades from "../Molecules/OurAccolades/OurAccolades";

const HomePage = () => {
  return (
    <>
      <OurExcellence />
      <OurAccelerators />
      <OurAccolades />
      <ClientLogo />
    </>
  );
};

export default HomePage;
