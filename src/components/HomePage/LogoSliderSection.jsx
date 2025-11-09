"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LogoSliderSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".logo-slider-section .img-container",
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.1,
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
    <section ref={sectionRef} className="logo-slider-section">
      <Swiper
        spaceBetween={16}
        slidesPerView="auto"
        allowTouchMove={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Autoplay]}
        breakpoints={{
          768: {
            spaceBetween: 20,
          },
        }}
        className="slide-auto"
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="img-container">
              <img src={item.path} alt="logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LogoSliderSection;

export const sliderData = [
  { id: 3, path: "/assets/images/Homepage/c3.png" },
  { id: 5, path: "/assets/images/Homepage/c5.png" },
  { id: 6, path: "/assets/images/Homepage/c6.png" },
  { id: 7, path: "/assets/images/Homepage/c7.png" },

  { id: 10, path: "/assets/images/Homepage/c3.png" },
  { id: 12, path: "/assets/images/Homepage/c5.png" },
  { id: 13, path: "/assets/images/Homepage/c6.png" },
  { id: 14, path: "/assets/images/Homepage/c7.png" },

  { id: 17, path: "/assets/images/Homepage/c3.png" },
  { id: 19, path: "/assets/images/Homepage/c5.png" },
  { id: 20, path: "/assets/images/Homepage/c6.png" },
];
