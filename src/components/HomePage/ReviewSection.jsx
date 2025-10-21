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
const ReviewSection = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <search className="review-section">
      <div className="el-container">
        <CommonTitle
          subTitle="Our Customer Reviews"
          title="What Our "
          highLight="Customers Say"
        />
        <div className="review-container">
          <Swiper
            slidesPerView={3.5}
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
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1080: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
            }}
          >
            {reviewsData.map((review) => (
              <SwiperSlide>
                <div className="review-block-container" key={review.id}>
                  <div className="img-container">
                    <img src={review.image} alt={review.review} />
                  </div>
                  <div className="text-container">
                    <div className="review-title">{review.review}</div>
                    <div className="review-stars">
                      {Array.from({ length: review.reviewCount }).map(
                        (_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                          >
                            <path
                              d="M18.4389 6.65341C18.3179 6.28139 17.9859 6.01716 17.5931 5.98197L12.2572 5.50047L10.1472 0.59252C9.99165 0.232831 9.63733 0 9.24366 0C8.84999 0 8.49568 0.232831 8.3401 0.593361L6.23015 5.50047L0.893404 5.98197C0.501287 6.018 0.170103 6.28139 0.0483776 6.65341C-0.073348 7.02544 0.0390683 7.43349 0.335695 7.69071L4.369 11.206L3.17967 16.4125C3.09264 16.7954 3.24216 17.1911 3.56177 17.4207C3.73357 17.544 3.93457 17.6068 4.13726 17.6068C4.31202 17.6068 4.48537 17.56 4.64094 17.4675L9.24366 14.7337L13.8447 17.4675C14.1814 17.6688 14.6058 17.6504 14.9247 17.4207C15.2445 17.1904 15.3938 16.7945 15.3068 16.4125L14.1175 11.206L18.1508 7.69141C18.4474 7.43349 18.5607 7.02614 18.4389 6.65341Z"
                              fill="#1857D8"
                            />
                          </svg>
                        )
                      )}
                    </div>
                    <div className="review-desc">{review.desc}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="review-navigation">
            <CommonBtn
              btnText="View All Reviews"
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
    </search>
  );
};

export default ReviewSection;
export const reviewsData = [
  {
    id: 1,
    review: "Theresa Webb",
    desc: "“Elzza did an amazing job replacing our windows and doors. Great quality, smooth installation, and excellent communication throughout.”",
    image: "/assets/images/Homepage/reviews/review1.png",
    reviewCount: 5,
  },
  {
    id: 2,
    review: "Wade Warren",
    desc: "“Excellent quality and craftsmanship! The installation was quick and clean, and the result exceeded our expectations.”",
    image: "/assets/images/Homepage/reviews/review2.png",
    reviewCount: 3,
  },
  {
    id: 3,
    review: "Marvin McKinney",
    desc: "“From quote to installation, everything went smoothly. Friendly team, honest pricing, and amazing final look!”",
    image: "/assets/images/Homepage/reviews/review3.png",
    reviewCount: 5,
  },
  {
    id: 4,
    review: "Guy Hawkins",
    desc: "“Our new sliding doors are stunning! They open effortlessly and have completely changed the feel of our living room.”",
    image: "/assets/images/Homepage/reviews/review4.png",
    reviewCount: 3,
  },
  {
    id: 5,
    review: "Theresa Webb",
    desc: "“Elzza did an amazing job replacing our windows and doors. Great quality, smooth installation, and excellent communication throughout.”",
    image: "/assets/images/Homepage/reviews/review1.png",
    reviewCount: 5,
  },
];
