"use client";
import React, { useEffect, useRef } from "react";
import CommonTitle from "../commonElement/CommonTitle";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VisionSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title block
      gsap.from(".common-title-block", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".common-title-block",
          start: "top 85%",
        },
      });

      // Animate cards
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section className="vision-section" ref={sectionRef}>
      <div className="el-container">
        <CommonTitle
          subTitle="Onze Collecties"
          title="Ontdek"
          highLight="Ons Volledige Assortiment "
          title2="van Moderne Raam- en Deurontwerpen"
        />

        <div className="product-grid">
          {productCards.map((card, index) => (
            <article
              className="product-card"
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              aria-labelledby={`${card.id}-title`}
            >
              <div className="img-container">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>

              <header className="card-head">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-sub">{card.subtitle}</p>
              </header>

              <div className="card-docs">
                {card.docs.map((d) => (
                  <div className="doc-row" key={d.id}>
                    <Link
                      className="doc-link"
                      href={d.href}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      title={d.label}
                      aria-label={d.label}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <path
                            d="M15.4662 17V12.9322H17.5001M16.8221 14.9661H15.4662M6.65263 17V12.9322M6.65263 12.9322H8.00856C8.57023 12.9322 9.02551 13.3875 9.02551 13.9491C9.02551 14.5108 8.57023 14.9661 8.00856 14.9661H6.65263V12.9322ZM7.60178 6.42382V10.4916M7.60178 10.4916L6.24585 9.13565M7.60178 10.4916L8.95772 9.13565M13.7035 10.4916V5.06787M12.0764 17H11.0594V12.9322H12.0764C12.8252 12.9322 13.4323 13.5393 13.4323 14.2881V15.644C13.4323 16.3929 12.8252 17 12.0764 17Z"
                            stroke="#1857D8"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.6356 1H2.85593C2.10709 1 1.5 1.60708 1.5 2.35591V15.6439C1.5 16.3927 2.10709 16.9998 2.85593 16.9998H4.21187M9.6356 1V3.71183C9.6356 4.46067 10.2427 5.06774 10.9915 5.06774H13.7034L9.6356 1Z"
                            stroke="#1857D8"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="doc-label">{d.label}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

export const productCards = [
  {
    id: "classic-6",
    title: "Elzza Classic 6°",
    subtitle:
      "Tijdloos design met een verfijnde afwerking die de natuurlijke warmte van hout weerspiegelt.",
    image: "/assets/images/Homepage/vision/1.png",
    docs: [
      {
        id: "brochure",
        label: "Download Brochure — Classic 6°",
        href: "/assets/docs/classic-6-brochure.pdf",
        type: "static",
      },
      {
        id: "profile",
        label: "Elzza Raamprofiel Gids",
        href: "/assets/docs/classic-6-profile.pdf",
        type: "static",
      },
      {
        id: "care",
        label: "Onderhoudsinstructies",
        href: "/assets/docs/classic-6-care.pdf",
        type: "static",
      },
    ],
  },
  {
    id: "modern-15",
    title: "Elzza Modern 15°",
    subtitle:
      "Strak, hoekig ontwerp dat diepte en elegantie toevoegt aan elke gevel.",
    image: "/assets/images/Homepage/vision/1.png",
    docs: [
      {
        id: "brochure",
        label: "Download Brochure — Modern 15°",
        href: "/assets/docs/modern-15-brochure.pdf",
        type: "static",
      },
      {
        id: "install",
        label: "Installatiehandleiding",
        href: "/assets/images/Homepage/vision/1.png",
        type: "static",
      },
      {
        id: "maintenance",
        label: "Onderhoudstips",
        href: "/assets/docs/modern-15-maintenance.pdf",
        type: "static",
      },
    ],
  },
  {
    id: "city-line",
    title: "Elzza City Line",
    subtitle:
      "Strakke lijnen met een historische charme, ontworpen voor stedelijke woningen en restauraties.",
    image: "/assets/images/Homepage/vision/1.png",
    docs: [
      {
        id: "brochure",
        label: "Download Brochure — City Line",
        href: "/assets/docs/city-line-brochure.pdf",
        type: "static",
      },
      {
        id: "profile",
        label: "Profielsysteem Details",
        href: "/assets/docs/city-line-profile.pdf",
        type: "static",
      },
      {
        id: "care",
        label: "Onderhoudsinstructies",
        href: "/assets/docs/city-line-care.pdf",
        type: "static",
      },
    ],
  },
  {
    id: "flat",
    title: "Elzza Flat",
    subtitle:
      "Een strak, ultramodern ontwerp dat focust op rechte lijnen en een eigentijdse uitstraling.",
    image: "/assets/images/Homepage/vision/1.png",
    docs: [
      {
        id: "brochure",
        label: "Download Brochure — Flat Serie",
        href: "/assets/docs/flat-brochure.pdf",
        type: "static",
      },
      {
        id: "install",
        label: "Installatiehandleiding",
        href: "/assets/docs/flat-install.pdf",
        type: "static",
      },
      {
        id: "care",
        label: "Onderhoudsinstructies",
        href: "/assets/docs/flat-care.pdf",
        type: "static",
      },
    ],
  },
];
