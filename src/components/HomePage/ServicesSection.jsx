import React from "react";

const ServicesSection = () => {
  return (
    <section className="services-section">
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
              {servicesData?.map((service) => {
                return (
                  <div key={service?.id} className="list-block">
                    <div className="icon-container">
                      <img src={service?.icon} alt="" />
                    </div>
                    <div className="text-block">
                      <div className="list-title">{service?.title}</div>
                      <div className="list-text">{service?.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="img-container">
            <img src="/assets/images/Homepage/services.png" alt="Services " />
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
    title: "Craftsmanship & Quality",
    text: "Every frame is built with precision and premium materials.",
    icon: "/assets/images/Homepage/services/service2.svg",
  },
  {
    id: 3,
    title: "Craftsmanship & Quality",
    text: "Every frame is built with precision and premium materials.",
    icon: "/assets/images/Homepage/services/service3.svg",
  },
  {
    id: 4,
    title: "Craftsmanship & Quality",
    text: "Every frame is built with precision and premium materials.",
    icon: "/assets/images/Homepage/services/service4.svg",
  },
];
