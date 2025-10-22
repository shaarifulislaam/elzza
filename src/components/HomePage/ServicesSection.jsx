"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the text block from left
      gsap.fromTo(
        ".service-text-block",
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // Animate image from right
      gsap.fromTo(
        ".services-section .img-container",
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // Animate each list item (staggered)
      gsap.fromTo(
        ".services-section .list-block",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="el-container">
        <div className="services-container">
          <div className="service-text-block">
            <div className="title">
              Your Trusted Partner for Quality and Precision
            </div>
            <div className="text">
              We combine craftsmanship, innovation, and sustainability to
              deliver window and door solutions that last a lifetime.
            </div>

            <div className="service-list-container">
              {servicesData?.map((service) => (
                <div key={service?.id} className="list-block">
                  <div className="icon-container">
                    <img src={service?.icon} alt="" />
                  </div>
                  <div className="text-block">
                    <div className="list-title">{service?.title}</div>
                    <div className="list-text">{service?.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="img-container">
            <img src="/assets/images/Homepage/services.png" alt="Services" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

export const servicesData = [
  {
    id: 1,
    title: "Craftsmanship & Quality",
    text: "Every frame is built with precision and premium materials.",
    icon: "/assets/images/Homepage/services/service1.svg",
  },
  {
    id: 2,
    title: "Innovative Design",
    text: "Combining aesthetics and functionality for modern living.",
    icon: "/assets/images/Homepage/services/service2.svg",
  },
  {
    id: 3,
    title: "Sustainable Materials",
    text: "Eco-friendly products designed for long-term performance.",
    icon: "/assets/images/Homepage/services/service3.svg",
  },
  {
    id: 4,
    title: "Expert Installation",
    text: "Installed with precision to ensure durability and reliability.",
    icon: "/assets/images/Homepage/services/service4.svg",
  },
];
