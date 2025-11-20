import Blogs from "@/components/HomePage/Blogs";
import ReviewSection from "@/components/HomePage/ReviewSection";
import CommonProductDesc from "@/components/ProductPage/CommonProductDesc";
import ProductHero from "@/components/ProductPage/ProductHero";
import ProductVision from "@/components/ProductPage/ProductVision";
import VideoSection from "@/components/ProductPage/VideoSection";
import React from "react";

const FramesPages = () => {
  const heroImg = { img: "/assets/images/productPage/frame_hero.png" };

  return (
    <>
      <ProductHero
        title="Raamkozünen"
        subTitle="Wij helpen u graag!"
        image={heroImg.img}
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
        descriptionData={handlesData.descriptionData}
        productDescTitle={handlesData.sectionTitle}
        sliderImages={handlesData.sliderImages}
      />

      <CommonProductDesc
        leftImg={true}
        image={false}
        descriptionData={windowHardwareData.descriptionData}
        productDescTitle={windowHardwareData.sectionTitle}
        sliderImages={windowHardwareData.sliderImages}
      />
      {/* <CommonProductDesc
        leftImg={false}
        image={false}
        descriptionData={hingesData.descriptionData}
        productDescTitle={hingesData.sectionTitle}
        sliderImages={hingesData.sliderImages}
      />
      <CommonProductDesc
        leftImg={true}
        image={false}
        descriptionData={sillsData.descriptionData}
        productDescTitle={sillsData.sectionTitle}
        sliderImages={sillsData.sliderImages}
      /> */}
      <ReviewSection />
      <Blogs />
    </>
  );
};

export default FramesPages;
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
export const handlesData = {
  sectionTitle: "Raamgrepen",
  descriptionData: [
    {
      title: "Hoppe Secustik SKG** Afsluitbaar",
      desc: "Wit / Créme / Aluminium / Zwart",
    },
    {
      title: "Hoppe niet Afsluitbaar",
      desc: "Wit / Créme / Aluminium",
    },
    {
      title: "AXA Uitzetter",
      desc: "Aluminium",
    },
    {
      title: "Verkropte Greep SKG** Afsluitbaar (buitendraaiend)",
      desc: "Aluminium",
    },
    {
      title: "Geze OL90 Verlaagd Beslag",
      desc: "Aluminium",
    },
    {
      title: "Brochure Hoppe Secustik Raamgreep",
      isBrochure: true,
      href: "/assets/docs/Threshold-Brochure.pdf",
    },
    {
      title: "Brochure Geze OL90",
      isBrochure: true,
      href: "/assets/docs/Threshold-Brochure.pdf",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/framePage/handle1.jpg",

    "/assets/images/productPage/framePage/handle2.jpg",
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
export const hingesData = {
  sectionTitle: "Scharnieren",
  descriptionData: [
    {
      title: "Schüco Opbouw Scharnieren SKG**",
      desc: "Wit / Créme / Aluminium / Kleur Kozijn",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/framePage/hings1.jpg",
    "/assets/images/productPage/framePage/hings2.jpg",
  ],
};
export const sillsData = {
  sectionTitle: "Onderdorpels",
  descriptionData: [
    {
      title: "Grundmeijer Aluminium Onderdorpel",
      desc: "Zwart",
    },
    {
      title: "Bluestone Onderdorpel",
      desc: "Zwart / Blauwsteen",
    },
    {
      title: "Brochure Bluestone Onderdorpel",
      isBrochure: true,
      href: "/assets/docs/Threshold-Brochure.pdf",
    },
    {
      title: "Brochure Grundmeyer ",
      isBrochure: true,
      href: "/assets/docs/Threshold-Brochure.pdf",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/framePage/sills1.jpg",
    "/assets/images/productPage/framePage/sills2.jpg",
  ],
};
