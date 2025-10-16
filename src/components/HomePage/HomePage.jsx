import React from "react";
import HeroSection from "./HeroSection";
import LogoSliderSection from "./LogoSliderSection";
import ProjectsSection from "./ProjectsSection";
import ProductsSection from "./ProductsSection";
import ServicesSection from "./ServicesSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <LogoSliderSection />
      <ProductsSection />
      <ServicesSection />
      <ProjectsSection />
    </>
  );
};

export default HomePage;
