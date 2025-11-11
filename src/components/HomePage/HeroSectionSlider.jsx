"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const HeroSectionSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "/assets/images/Homepage/heroImage3.jpg",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  ];
  return (
    <div className="hero__gallery">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="hero__gallery-thumbs"
        direction="vertical"
        breakpoints={{
          640: {
            direction: "vertical",
            slidesPerView: 4,
          },
          0: {
            direction: "horizontal",
            slidesPerView: 4,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="hero__gallery-thumb">
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={10}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="hero__gallery-main"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="hero__gallery-slide img-container">
              <img src={img} alt={`Modern house ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSectionSlider;
