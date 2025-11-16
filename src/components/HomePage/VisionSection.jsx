"use client";
import React, { useEffect, useRef, useState } from "react";
import CommonTitle from "../commonElement/CommonTitle";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { visionCards } from "@/PageData/visionCards";
import VisionCard from "../commonElement/VisionCard";

gsap.registerPlugin(ScrollTrigger);

const VisionSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".common-title-block", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".common-title-block",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="vision-section" ref={sectionRef}>
      <div className="el-container">
        <CommonTitle
          subTitle="Onze Collecties"
          title="Ontdek"
          highLight="Ons Volledige Assortiment "
          title2="van Moderne Raam- en Deurontwerpen"
        />
        <VisionCard />
      </div>
    </section>
  );
};

export default VisionSection;
