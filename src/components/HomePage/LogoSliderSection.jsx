"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const LogoSliderSection = () => {
  return (
    <section className="logo-slider-section">
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
  { id: 1, path: "/assets/images/Homepage/c1.png" },
  { id: 2, path: "/assets/images/Homepage/c2.png" },
  { id: 3, path: "/assets/images/Homepage/c3.png" },
  { id: 4, path: "/assets/images/Homepage/c4.png" },
  { id: 5, path: "/assets/images/Homepage/c5.png" },
  { id: 6, path: "/assets/images/Homepage/c6.png" },
  { id: 7, path: "/assets/images/Homepage/c7.png" },
  { id: 8, path: "/assets/images/Homepage/c1.png" },
  { id: 9, path: "/assets/images/Homepage/c2.png" },
  { id: 10, path: "/assets/images/Homepage/c3.png" },
  { id: 11, path: "/assets/images/Homepage/c4.png" },
  { id: 12, path: "/assets/images/Homepage/c5.png" },
  { id: 13, path: "/assets/images/Homepage/c6.png" },
  { id: 14, path: "/assets/images/Homepage/c7.png" },
  { id: 15, path: "/assets/images/Homepage/c1.png" },
  { id: 16, path: "/assets/images/Homepage/c2.png" },
  { id: 17, path: "/assets/images/Homepage/c3.png" },
  { id: 18, path: "/assets/images/Homepage/c4.png" },
  { id: 19, path: "/assets/images/Homepage/c5.png" },
  { id: 20, path: "/assets/images/Homepage/c6.png" },
];
