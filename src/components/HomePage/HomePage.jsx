import React from "react";
import HeroSection from "./HeroSection";
import LogoSliderSection from "./LogoSliderSection";
import ProjectsSection from "./ProjectsSection";
import ProductsSection from "./ProductsSection";
import ServicesSection from "./ServicesSection";
import GallerySection from "./GallerySection";
import ReviewSection from "./ReviewSection";
import WhyChoose from "./WhyChoose";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <LogoSliderSection />
      <ProductsSection />
      <ServicesSection />
      <WhyChoose />
      <ProjectsSection />
      <GallerySection />
      <ReviewSection />
    </>
  );
};

export default HomePage;
