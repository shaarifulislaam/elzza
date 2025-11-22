import Blogs from "@/components/HomePage/Blogs";
import ReviewSection from "@/components/HomePage/ReviewSection";
import CommonProductDesc from "@/components/ProductPage/CommonProductDesc";
import Doors from "@/components/ProductPage/Doors";
import ProductHero from "@/components/ProductPage/ProductHero";
import ProductVision from "@/components/ProductPage/ProductVision";
import React from "react";

const DoorPage = () => {
  const heroImg = { img: "/assets/images/productPage/door_hero.png" };

  return (
    <>
      <ProductHero
        title="Deurkozijnen"
        subTitle="Wij helpen u graag!"
        image={heroImg.img}
      />

      <CommonProductDesc
        leftImg={false}
        image={false}
        descriptionData={doorsHandleData.descriptionData}
        productDescTitle={doorsHandleData.sectionTitle}
        sliderImages={doorsHandleData.sliderImages}
      />
      <CommonProductDesc
        leftImg={true}
        image={false}
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
        descriptionData={sillsData.descriptionData}
        productDescTitle={sillsData.sectionTitle}
        sliderImages={sillsData.sliderImages}
      />
      {/* <CommonProductDesc
        leftImg={false}
        image={false}
        descriptionData={doorsData.descriptionData}
        productDescTitle={doorsData.sectionTitle}
        sliderImages={doorsData.sliderImages}
      /> */}
      <Doors />
      <ReviewSection />
      <Blogs />
    </>
  );
};

export default DoorPage;
export const doorsHandleData = {
  sectionTitle: "Deurgrepen",
  descriptionData: [
    {
      title: "Voordeurbeslag Standaard",
      desc: "Pusher 740 SKG*** + Greep 2018 Aluminium",
    },
    {
      title: "Achterdeurbeslag Standaard",
      desc: "Greep 2018 SKG*** + Greep 2018 Aluminium",
    },
    {
      title: "Alternatieve grepen SKG*** Aluminium",
      desc: "Roestvrij staal / Zwart / Grafiet / Messing / Brons",
    },
    {
      title: "Alternatieve stanggreep SKG***",
      desc: "550mm / 950mm / 1100mm / 1800mm Roestvrij staal",
    },
    {
      title: "Brochure Deurgrepen",
      isBrochure: true,
      href: "/assets/docs/productPage/sliding/BOWIDO-BROCHURE-VOORDEURBESLAG.pdf",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/handle.png",
    "/assets/images/productPage/fittings.png",
  ],
};

export const doorFittings = {
  sectionTitle: "Deurbeslag",
  descriptionData: [
    {
      title: "Fair Driepuntsluiting SKG***",
      desc: "Fair Driepuntsluiting SKG*** Autolock",
    },
    {
      title: "Cilinder voor deur",
      desc: "Incl. 3 sleutels",
    },
    {
      title: "Bestel uw deur",
      desc: "Naar binnen & Naar buiten draaiend",
    },
    {
      title: "Bestel uw deur met",
      desc: "Binnen- & Buitengrepen",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/fittings.png",
    "/assets/images/productPage/handle.png",
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
      href: "/assets/docs/productPage/sliding/Brochure-Bluestone.pdf",
    },
    {
      title: "Brochure Grundmeyer ",
      isBrochure: true,
      href: "/assets/docs/productPage/sliding/Brochure-Grundmeyer.pdf",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/framePage/sills1.jpg",
    "/assets/images/productPage/framePage/sills2.jpg",
  ],
};
export const doorsData = {
  sectionTitle: "Deuren",
  descriptionData: [
    {
      title: "Standaard Deurbeslag",
      desc: "Handgreep 2018 Aluminium + SKG*** Veiligheidsbeslag",
    },
    {
      title: "Voor- en Achterdeur Opties",
      desc: "Verkrijgbaar in Aluminium, Zwart, Roestvrij Staal",
    },
    {
      title: "Deurtypes",
      desc: "Draai-Deuren, Openslaande Deuren, Schuifdeuren",
    },
    {
      title: "Brochure: Deursystemen",
      isBrochure: true,
      href: "/assets/docs/Door-Brochure.pdf",
    },
  ],
  sliderImages: [
    "/assets/images/productPage/door/1.png",
    "/assets/images/productPage/door/2.png",
    "/assets/images/productPage/door/3.png",
    "/assets/images/productPage/door/4.png",
    "/assets/images/productPage/door/5.png",
    "/assets/images/productPage/door/6.png",
    "/assets/images/productPage/door/7.png",
    "/assets/images/productPage/door/8.png",
    "/assets/images/productPage/door/9.png",

    "/assets/images/productPage/door/11.png",
    "/assets/images/productPage/door/12.jpeg",
    "/assets/images/productPage/door/13.jpeg",
    "/assets/images/productPage/door/14.jpeg",
    "/assets/images/productPage/door/15.jpeg",
  ],
};
