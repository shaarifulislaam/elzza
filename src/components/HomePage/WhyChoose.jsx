"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonTitle from "../commonElement/CommonTitle";

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title fade-up
      gsap.fromTo(
        ".why-choose-section .common-title-block",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Animate main block image and text
      gsap.fromTo(
        ".why-choose-block .img-container",
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-choose-block",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".why-choose-block .text-container",
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-choose-block",
            start: "top 85%",
            once: true,
          },
        }
      );

      // Animate small content blocks with stagger
      gsap.fromTo(
        ".why-choose-content .content-block",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".why-choose-content",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="why-choose-section" ref={sectionRef}>
      <div className="el-container">
        <CommonTitle
          subTitle="WHY CHOOSE ELZZA"
          title="How We Work to "
          highLight="Deliver Excellence "
          title1="for Every Home"
        />

        <div className="why-choose-container">
          <div className="why-choose-block">
            <div className="img-container">
              <img
                src="/assets/images/Homepage/whyChoose/why.png"
                alt="Why Choose"
              />
            </div>
            <div className="text-container">
              <div className="title">Personalized Consultation</div>
              <div className="desc">
                We start by understanding your vision, preferences, and home
                style. Our experts guide you in selecting the perfect design and
                materials.
              </div>
            </div>
          </div>

          <div className="why-choose-content">
            {serviceData.map((data) => (
              <div key={data.id} className="content-block">
                <div className="img-container">
                  <img src={data.image} alt={data.title} />
                </div>
                <div className="text-container">
                  <div className="title">{data.title}</div>
                  <div className="desc">{data.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

export const serviceData = [
  {
    id: 1,
    title: "Custom Design & Planning",
    desc: "Every Elzza product is tailored to fit your home’s unique structure.",
    image: "/assets/images/Homepage/whyChoose/1.svg",
  },
  {
    id: 2,
    title: "Professional Installation",
    desc: "Our skilled team ensures a seamless installation process — fast, clean, and detail-focused.",
    image: "/assets/images/Homepage/whyChoose/2.svg",
  },
  {
    id: 3,
    title: "Quality Assurance",
    desc: "Each window and door goes through strict quality control to ensure durability and performance.",
    image: "/assets/images/Homepage/whyChoose/3.svg",
  },
  {
    id: 4,
    title: "Aftercare & Support",
    desc: "We offer ongoing support, maintenance tips, and product warranties for peace of mind.",
    image: "/assets/images/Homepage/whyChoose/4.svg",
  },
];
