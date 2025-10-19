import React from "react";
import CommonTitle from "../commonElement/CommonTitle";

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      <div className="el-container">
        <CommonTitle
          subTitle="WHY CHOOSE ELZZA"
          title="How We Work to "
          highLight="Deliver Excellence "
          title1="for Every Home"
        />

        <div className="why-choose-container">
          <div className="why-choose-block">
            <div className="img-container">
              <img
                src="/assets/images/HomePage/whyChoose/why.png"
                alt="Why Choose"
              />
            </div>
            <div className="text-container">
              <div className="title">Personalized Consultation</div>
              <div className="desc">
                We start by understanding your vision, preferences, and home
                style. Our experts guide you in selecting the perfect design and
                materials.
              </div>
            </div>
          </div>
          <div className="why-choose-content">
            {serviceData.map((data) => {
              return (
                <div key={data.id} className="content-block">
                  <div className="img-container">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="text-container">
                    <div className="title">{data.title}</div>
                    <div className="desc">{data.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
export const serviceData = [
  {
    id: 1,
    title: "Custom Design & Planning",
    desc: "Every Elzza product is tailored to fit your home’s unique structure.",
    image: "/assets/images/HomePage/whyChoose/1.svg",
  },
  {
    id: 2,
    title: "Professional Installation",
    desc: "Our skilled team ensures a seamless installation process — fast, clean, and detail-focused.",
    image: "/assets/images/HomePage/whyChoose/2.svg",
  },
  {
    id: 3,
    title: "Quality Assurance",
    desc: "Each window and door goes through strict quality control to ensure durability and performance.",
    image: "/assets/images/HomePage/whyChoose/3.svg",
  },
  {
    id: 4,
    title: "Aftercare & Support",
    desc: "We offer ongoing support, maintenance tips, and product warranties for peace of mind.",
    image: "/assets/images/HomePage/whyChoose/4.svg",
  },
];
