import React from "react";
import CommonBtn from "../commonElement/CommonBtn";
import { SvgIcon } from "../commonElement/SvgIcon";

const HeroSection = () => {
  const listItems = [
    "17+ Years of Experience",
    "Certified & Guaranteed",
    "Fast & Reliable Service",
  ];
  return (
    <section className="hero-section">
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
                <span className="icon">{/* <SvgIcon /> */}</span>
                <div className="lbl">{list}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-img-block">
          <div className="img-container">
            <img src="/assets/images/hero.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
