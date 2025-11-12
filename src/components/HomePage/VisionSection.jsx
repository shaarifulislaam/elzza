"use client";
import React, { useEffect, useRef } from "react";
import CommonTitle from "../commonElement/CommonTitle";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 🧩 Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

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

    return () => ctx.revert(); // cleanup
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
              {/* 🧩 Swiper Slider */}
              <div className="img-container">
                <Swiper
                  modules={[Navigation]}
                  navigation
                  spaceBetween={10}
                  slidesPerView={1}
                  loop={true}
                  className="product-swiper"
                >
                  {card.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${card.title} ${i + 1}`}
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
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

// 🧩 Product Data
export const productCards = [
  {
    id: "classic-6",
    title: "Schüco Verdiept 6°",
    subtitle: "Rechte Vormgeving en 100% de Esthetiek van Hout",
    images: [
      "/assets/images/Homepage/vision/1_1.jpg",
      "/assets/images/Homepage/vision/1_2.jpg",
    ],
    docs: [
      {
        id: "brochure",
        label: "Brochure Schüco Verdiept 1",
        href: "/assets/docs/LivIng-Variant-1.pdf",
      },
      {
        id: "profile",
        label: "Brochure Schüco Vlak 1",
        href: "/assets/docs/1-Brochure-Schuco-Vlak.pdf",
      },
      {
        id: "care",
        label: "Schüco LivIng Variant Profielsysteem",
        href: "/assets/docs/Brochure-Schuco-LivIng-Variant-Profielsysteem-gecomprimeerd.pdf",
      },
    ],
  },
  {
    id: "modern-15",
    title: "Schüco Verdiept 15°",
    subtitle: "Schuine Vormgeving en Slank Aangezicht",
    images: [
      "/assets/images/Homepage/vision/2_1.jpg",
      "/assets/images/Homepage/vision/2_2.jpg",
    ],
    docs: [
      {
        id: "brochure",
        label: "Brochure Schüco Verdiept 2",
        href: "/assets/docs/LivIng-Variant-1.pdf",
      },
      {
        id: "install",
        label: "Brochure Schüco Vlak 2",
        href: "/assets/docs/1-Brochure-Schuco-Vlak2.pdf",
      },
    ],
  },
  {
    id: "city-line",
    title: "Schüco City",
    subtitle: "Rechte Vormgeving en Uitstraling van Historisch Schuifraam",
    images: [
      "/assets/images/Homepage/vision/3_1.jpg",
      "/assets/images/Homepage/vision/3_2.jpg",
    ],
    docs: [
      {
        id: "brochure",
        label: "Brochure Schüco Verdiept 3",
        href: "/assets/docs/LivIng-Variant-3.pdf",
      },
      {
        id: "profile",
        label: "Onderhoudsvoorschriften",
        href: "/assets/docs/Onderhoudsvoorschriften-Schuco.pdf",
      },
    ],
  },
  {
    id: "flat",
    title: "Schüco Vlak",
    subtitle: "Strak en Modern Ontwerp",
    images: [
      "/assets/images/Homepage/vision/4_1.jpg",
      "/assets/images/Homepage/vision/4_2.jpg",
    ],
    docs: [
      {
        id: "brochure",
        label: "Brochure Schüco Verdiept 4",
        href: "/assets/docs/LivIng-Variant-4.pdf",
      },
      {
        id: "install",
        label: "Onderhoudsvoorschriften 2",
        href: "/assets/docs/Onderhoudsvoorschriften-Schuco-Verkort.pdf",
      },
    ],
  },
];
