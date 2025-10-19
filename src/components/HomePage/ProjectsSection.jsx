"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import CommonTitle from "../commonElement/CommonTitle";
import CommonBtn from "../commonElement/CommonBtn";

const ProjectsSection = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="projects-section">
      <div className="el-container">
        <CommonTitle
          title=" Experience the"
          highLight="Remarkable Difference"
          title2=" Our Expert Work Creates."
          subTitle="You Recent Projects"
          desc="Browse some of our latest installations – where design, durability, and precision come together beautifully."
        />
        <div className="projects-container">
          <Swiper
            slidesPerView={2}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            modules={[Navigation]}
            spaceBetween={30}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className="projects-block-container">
                <div className="img-block">
                  <div className="img-container">
                    <img
                      src="/assets/images/Homepage/projects/image1.png"
                      alt=""
                    />
                  </div>
                  <div className="img-container">
                    <img
                      src="/assets/images/Homepage/projects/image2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-block">
                  <div className="text-title">
                    Black Windows and Doors Elevate Stunning Lakefront Home
                  </div>
                  <div className="text-desc">
                    Elegant wood designs bring warmth and sophistication to a
                    modern Murfreesboro renovation.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="projects-block-container">
                <div className="img-block">
                  <div className="img-container">
                    <img
                      src="/assets/images/Homepage/projects/image1.png"
                      alt=""
                    />
                  </div>
                  <div className="img-container">
                    <img
                      src="/assets/images/Homepage/projects/image2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-block">
                  <div className="text-title">
                    Black Windows and Doors Elevate Stunning Lakefront Home
                  </div>
                  <div className="text-desc">
                    Elegant wood designs bring warmth and sophistication to a
                    modern Murfreesboro renovation.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="projects-block-container">
                <div className="img-block">
                  <div className="img-container">
                    <img
                      src="/assets/images/Homepage/projects/image1.png"
                      alt=""
                    />
                  </div>
                  <div className="img-container">
                    <img
                      src="/assets/images/Homepage/projects/image2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-block">
                  <div className="text-title">
                    Black Windows and Doors Elevate Stunning Lakefront Home
                  </div>
                  <div className="text-desc">
                    Elegant wood designs bring warmth and sophistication to a
                    modern Murfreesboro renovation.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="projects-block-container">
                <div className="img-block">
                  <div className="img-container">
                    <img
                      src="/assets/images/Homepage/projects/image1.png"
                      alt=""
                    />
                  </div>
                  <div className="img-container">
                    <img
                      src="/assets/images/Homepage/projects/image2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-block">
                  <div className="text-title">
                    Black Windows and Doors Elevate Stunning Lakefront Home
                  </div>
                  <div className="text-desc">
                    Elegant wood designs bring warmth and sophistication to a
                    modern Murfreesboro renovation.
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Navigation Buttons */}
          <div className="projects-navigation">
            <CommonBtn
              btnText="View All Projects"
              btnIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M18.0383 10.6631L12.4133 16.2881C12.2372 16.4642 11.9983 16.5631 11.7492 16.5631C11.5001 16.5631 11.2613 16.4642 11.0852 16.2881C10.909 16.1119 10.8101 15.8731 10.8101 15.624C10.8101 15.3749 10.909 15.136 11.0852 14.9599L15.1094 10.9373H3.625C3.37636 10.9373 3.1379 10.8385 2.96209 10.6627C2.78627 10.4869 2.6875 10.2484 2.6875 9.99977C2.6875 9.75113 2.78627 9.51267 2.96209 9.33686C3.1379 9.16104 3.37636 9.06227 3.625 9.06227H15.1094L11.0867 5.03727C10.9106 4.86115 10.8117 4.62228 10.8117 4.37321C10.8117 4.12414 10.9106 3.88527 11.0867 3.70915C11.2628 3.53303 11.5017 3.43408 11.7508 3.43408C11.9999 3.43408 12.2387 3.53303 12.4148 3.70915L18.0398 9.33415C18.1273 9.42136 18.1966 9.52498 18.2438 9.63907C18.2911 9.75315 18.3153 9.87544 18.3152 9.99892C18.315 10.1224 18.2905 10.2446 18.243 10.3586C18.1955 10.4726 18.1259 10.576 18.0383 10.6631Z"
                    fill="#E6E7ED"
                  />
                </svg>
              }
              link="/"
            />
            <div className="nav-buttons">
              <button
                className="nav-btn nav-prev"
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                aria-label="Previous slide"
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
                aria-label="Next slide"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
