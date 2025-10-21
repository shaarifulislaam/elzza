import React from "react";
import CommonBtn from "../commonElement/CommonBtn";
import HeroSectionSlider from "./HeroSectionSlider";

const HeroSection = () => {
  const listItems = [
    "17+ Years of Experience",
    "Certified & Guaranteed",
    "Fast & Reliable Service",
  ];
  return (
    <section className="hero-section">
      <div className="el-container">
        <div className="hero-container">
          <div className="hero-text-block">
            <div className="img-container">
              <img src="/assets/images/heroDoor.svg" alt="" />
            </div>
            <h1 className="hero-title">
              <span>Stylish, Durable Windows and Doors </span>
              <span className="highlight">Built for You</span>
            </h1>
            <p className="desc">
              Discover durable, stylish, energy-efficient solutions that enhance
              your home’s comfort and beauty with expert craftsmanship, precise
              installation, and reliability.
            </p>
            <div className="btn-container">
              <CommonBtn
                btnText="Get a Free Quote"
                btnIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M17.5383 10.6633L11.9133 16.2883C11.7372 16.4644 11.4983 16.5634 11.2492 16.5634C11.0001 16.5634 10.7613 16.4644 10.5852 16.2883C10.409 16.1122 10.3101 15.8733 10.3101 15.6242C10.3101 15.3752 10.409 15.1363 10.5852 14.9602L14.6094 10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2487 2.1875 10C2.1875 9.75137 2.28627 9.51292 2.46209 9.3371C2.6379 9.16129 2.87636 9.06252 3.125 9.06252H14.6094L10.5867 5.03751C10.4106 4.86139 10.3117 4.62252 10.3117 4.37345C10.3117 4.12438 10.4106 3.88551 10.5867 3.70939C10.7628 3.53327 11.0017 3.43433 11.2508 3.43433C11.4999 3.43433 11.7387 3.53327 11.9148 3.70939L17.5398 9.33439C17.6273 9.4216 17.6966 9.52523 17.7438 9.63931C17.7911 9.75339 17.8153 9.87569 17.8152 9.99917C17.815 10.1226 17.7905 10.2449 17.743 10.3589C17.6955 10.4728 17.6259 10.5763 17.5383 10.6633Z"
                      fill="#E6E7ED"
                    />
                  </svg>
                }
                link="/"
                variant="primary"
              />
              <CommonBtn
                btnText="View Our Projects"
                link="/"
                variant="secondary"
              />
            </div>
            <ul className="services-list">
              {listItems.map((list, i) => (
                <li key={i} className="list-item">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_172_135)">
                        <mask
                          id="mask0_172_135"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="14"
                          height="14"
                        >
                          <path d="M14 0H0V14H14V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_172_135)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.50001 0H6.5V4.42772L4.84135 0.322407L3.91416 0.697015L5.61579 4.90867L2.40381 1.6967L1.6967 2.40381L4.77524 5.48234L0.785687 3.73927L0.385321 4.65562L4.60674 6.5H0V7.50001H4.60673L0.385323 9.34437L0.785687 10.2607L4.77523 8.51767L1.6967 11.5962L2.40381 12.3033L5.61579 9.09132L3.91416 13.303L4.84135 13.6776L6.5 9.57229V14H7.50001V9.57229L9.15866 13.6776L10.0858 13.303L8.38425 9.09132L11.5962 12.3033L12.3033 11.5962L9.22474 8.51767L13.2143 10.2607L13.6146 9.34437L9.3933 7.50001H14V6.5H9.39323L13.6146 4.65562L13.2143 3.73927L9.22474 5.48234L12.3033 2.4038L11.5962 1.6967L8.38425 4.90867L10.0858 0.697015L9.15866 0.322407L7.50001 4.42772V0Z"
                            fill="#001149"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_172_135">
                          <rect width="14" height="14" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div className="lbl">{list}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-img-block">
            <HeroSectionSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
