"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonTitle from "../commonElement/CommonTitle";
import { whyChooseData } from "@/PageData/whyChooseData";

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
        { opacity: 0, x: 0 },
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
        { opacity: 0, x: 0 },
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
          subTitle="WAAROM KIEZEN VOOR ELZZA"
          title="Hoe wij werken om "
          highLight="uitmuntendheid te leveren "
          title1="voor elk huis"
        />

        <div className="why-choose-container">
          <div className="why-choose-block">
            <div className="img-container">
              <img
                src="/assets/images/Homepage/whyChoose/why.png"
                alt="Waarom kiezen"
              />
            </div>
            <div className="text-container">
              <div className="title">Persoonlijk Adviesgesprek</div>
              <div className="desc">
                We luisteren naar uw wensen en adviseren over de juiste
                kozijnen, kleuren en materialen die passen bij uw woning.
              </div>
            </div>
          </div>

          <div className="why-choose-content">
            {whyChooseData?.map((data) => (
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
