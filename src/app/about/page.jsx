import AboutHero from "@/components/AboutPage/AboutHero";
import AboutStats from "@/components/AboutPage/AboutStats";
import OurStory from "@/components/AboutPage/OurStory";
import WhyElzza from "@/components/AboutPage/WhyElzza";
import Blogs from "@/components/HomePage/Blogs";
import GallerySection from "@/components/HomePage/GallerySection";
import ReviewSection from "@/components/HomePage/ReviewSection";
import ServicesSection from "@/components/HomePage/ServicesSection";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <OurStory />
      <ServicesSection />
      <WhyElzza />
      <ReviewSection />
      <GallerySection />
      <Blogs />
    </>
  );
};

export default AboutPage;
