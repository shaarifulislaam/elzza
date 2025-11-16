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
        title="Deurkozijnen"
        subTitle="Wij helpen u graag!"
        image={heroImg.img}
      />

      <ProductVision />

      <CommonProductDesc
        leftImg={false}
        image={false}
        descriptionData={doorsHandleData.descriptionData}
        productDescTitle={doorsHandleData.sectionTitle}
        sliderImages={doorsHandleData.sliderImages}
      />
      <CommonProductDesc
        leftImg={true}
        image={true}
        descriptionData={doorFittings.descriptionData}
        productDescTitle={doorFittings.sectionTitle}
        sliderImages={doorFittings.sliderImages}
      />

      <CommonProductDesc
        leftImg={false}
        image={false}
        descriptionData={hingesData.descriptionData}
        productDescTitle={hingesData.sectionTitle}
        sliderImages={hingesData.sliderImages}
      />

      <CommonProductDesc
        leftImg={true}
        image={false}
        descriptionData={thresholdsData.descriptionData}
        productDescTitle={thresholdsData.sectionTitle}
        sliderImages={thresholdsData.sliderImages}
      />
      <CommonProductDesc
        leftImg={false}
        image={false}
        descriptionData={thresholdsData.descriptionData}
        productDescTitle={thresholdsData.sectionTitle}
        sliderImages={thresholdsData.sliderImages}
      />
      <ReviewSection />
      <Blogs />
    </>
  );
};

export default FramesPages;
export const doorsHandleData = {
  sectionTitle: "Raamkozünen",
  descriptionData: [
    {
      title: "Front door fittings Standard",
      desc: "Pusher 740 SKG*** + Handle 2018 Aluminium",
    },
    {
      title: "Rear door fittings Standard",
      desc: "Handle 2018 SKG*** + Handle 2018 Aluminium",
    },
    {
      title: "Alternative grips SKG*** Aluminium",
      desc: "Stainless steel / Black / Graphite / Brass / Bronze",
    },
    {
      title: "Alternative rod grips SKG***",
      desc: "550mm / 950mm / 1100mm / 1800mm Stainless steel",
    },
    {
      title: "Brochure Door handles",
      isBrochure: true,
      href: "/assets/docs/LivIng-Variant-1.pdf",
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
export const hingesData = {
  sectionTitle: "Hinges",
  descriptionData: [
    {
      title: "Seelis Surface mounted hinges SKG***",
      desc: "White / Cream / Aluminum color frame",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/handle.png",
    "/assets/images/productPage/fittings.png",
  ],
};
export const thresholdsData = {
  sectionTitle: "Thresholds",
  descriptionData: [
    {
      title: "Grounded/Low Aluminium Threshold",
      desc: "Black",
    },
    {
      title: "Elevated Threshold",
      desc: "Black / Aluminum",
    },
    {
      title: "Brochure: Aluminium Threshold",
      isBrochure: true,
      href: "/assets/docs/Threshold-Brochure.pdf",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/handle.png",
    "/assets/images/productPage/fittings.png",
  ],
};
