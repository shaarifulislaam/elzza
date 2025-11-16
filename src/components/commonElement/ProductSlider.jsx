"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
const ProductSlider = ({ image, productImages }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="product-slider-block">
      <div className="img-container">
        {image ? (
          <img src="/assets/images/productPage/color.png" alt="" />
        ) : (
          <>
            {" "}
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              className="product-swiper"
            >
              {productImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="img-container">
                    <img src={img} alt="image" loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom navigation buttons */}
            <div className="nav-buttons">
              <button
                className="nav-btn nav-prev"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                aria-label="Vorige dia"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                className="nav-btn nav-next"
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
                aria-label="Volgende dia"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
