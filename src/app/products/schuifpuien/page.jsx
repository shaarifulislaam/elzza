import Blogs from "@/components/HomePage/Blogs";
import ReviewSection from "@/components/HomePage/ReviewSection";
import CommonProductDesc from "@/components/ProductPage/CommonProductDesc";
import ProductHero from "@/components/ProductPage/ProductHero";
import ProductVision from "@/components/ProductPage/ProductVision";
import VideoSection from "@/components/ProductPage/VideoSection";
import React from "react";

const SlidingDoorsPage = () => {
  const heroImg = { img: "/assets/images/productPage/sliding_hero.png" };

  return (
    <>
      <ProductHero
        title="Hefschuifdeur"
        subTitle="Wij helpen u graag!"
        image={heroImg.img}
      />

      <VideoSection />

      <CommonProductDesc
        leftImg={true}
        image={false}
        descriptionData={slideData.descriptionData}
        productDescTitle={slideData.sectionTitle}
        productDesc={slideData.sectionDesc}
        sliderImages={slideData.sliderImages}
      />
      <CommonProductDesc
        leftImg={false}
        image={false}
        descriptionData={cornerData.descriptionData}
        productDescTitle={cornerData.sectionTitle}
        sliderImages={cornerData.sliderImages}
      />

      <CommonProductDesc
        leftImg={true}
        image={true}
        descriptionData={colorData.descriptionData}
        productDescTitle={colorData.sectionTitle}
        sliderImages={colorData.sliderImages}
      />
      <CommonProductDesc
        leftImg={false}
        image={false}
        descriptionData={windowHardwareData.descriptionData}
        productDescTitle={windowHardwareData.sectionTitle}
        sliderImages={windowHardwareData.sliderImages}
      />
      <ReviewSection />
      <Blogs />
    </>
  );
};

export default SlidingDoorsPage;
export const slideData = {
  sectionTitle: "Schüco leven Slide",
  sectionDesc: "Hefschuifdeur met Slank Aangezicht en Lage Dorpel",
  descriptionData: [
    {
      title: "Brochure Schüco LivIng Slide",
      isBrochure: true,
      href: "/assets/docs/Threshold-Brochure.pdf",
    },
    {
      title: "Brochure Schüco Living Slide Profielsysteem",
      isBrochure: true,
      href: "/assets/docs/Threshold-Brochure.pdf",
    },
    {
      title: "Onderhoudsvoorschriften",
      isBrochure: true,
      href: "/assets/docs/Threshold-Brochure.pdf",
    },
    {
      title: "Onderhoudsvoorschriften 2 ",
      isBrochure: true,
      href: "/assets/docs/Threshold-Brochure.pdf",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/slide/1.jpg",
    "/assets/images/productPage/slide/2.jpg",
    "/assets/images/productPage/slide/3.jpg",
    "/assets/images/productPage/slide/4.jpg",
  ],
};
export const cornerData = {
  sectionTitle: "Hoekverbindingen",
  descriptionData: [
    {
      title: "90° Hoekverbinding Buiten- & Binnenzijde",
      desc: "",
    },
    {
      title: "90° Hoekverbinding Buiten & 45° Binnen",
      desc: "",
    },
    {
      title: "45° Hoekverbinding Buiten- & Binnenzijde",
      desc: "",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/11.jpg",
    "/assets/images/productPage/22.jpg",
  ],
};
export const colorData = {
  sectionTitle: "Kleuren",
  descriptionData: [
    {
      title: "Profielen zonder Houtnerf – Wit & Créme",
      desc: "",
    },
    {
      title: "Profielen met Houtnerf",
      desc: "",
    },
    {
      title: "Profielen met Automotive Finish",
      desc: "",
    },
    {
      title: "Brochure Schüco Houtnerf",
      isBrochure: true,
      href: "/assets/docs/Threshold-Brochure.pdf",
    },
    {
      title: "Brochure Schüco Automotive Finish ",
      isBrochure: true,
      href: "/assets/docs/Threshold-Brochure.pdf",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/handle.png",
    "/assets/images/productPage/fittings.png",
  ],
};
export const doorFittings = {
  sectionTitle: "Door Fittings",
  descriptionData: [
    {
      title: "Fair Three-point lock SKG***",
      desc: "Fair Three-point lock SKG*** Autolock",
    },
    {
      title: "Cylinder for door",
      desc: "Incl. 3 x keys",
    },
    {
      title: "Order your door",
      desc: "Inwards & Outwards",
    },
    {
      title: "Order your door with",
      desc: "Inside & Outside handles",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/handle.png",
    "/assets/images/productPage/fittings.png",
  ],
};
export const windowHardwareData = {
  sectionTitle: "Raambeslag",
  descriptionData: [
    {
      title: "ROTO NT SKG**",
      desc: "BlackVoorzien van Zomer & Winterstand Zichtbare scharnieren",
    },
    {
      title: "ROTO NT Designo SKG**",
      desc: "Voorzien van Zomer & Winterstand Onzichtbare scharnieren",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/framePage/windowFitting1.jpg",
    "/assets/images/productPage/framePage/windowFitting2.jpg",
  ],
};
