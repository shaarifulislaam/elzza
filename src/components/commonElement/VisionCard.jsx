"use client";
import { visionCards } from "@/PageData/visionCards";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const VisionCard = () => {
  const cardsRef = useRef([]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      {" "}
      <div className="product-grid">
        {visionCards?.map((card, index) => {
          const swiperRef = useRef(null);
          const [isBeginning, setIsBeginning] = useState(true);
          const [isEnd, setIsEnd] = useState(false);

          return (
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
              </div>

              <header className="card-head">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-sub">{card.subtitle}</p>
              </header>
            </article>
          );
        })}
      </div>
      <div className="docs-grid">
        {visionPdfData.map((category) => (
          <div key={category.id} className="doc-card">
            <div className="docs-list">
              {category.docs.map((doc, index) => (
                <Link
                  key={index}
                  href={doc.href}
                  className="doc-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    {" "}
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.6356 1H2.85593C2.10709 1 1.5 1.60708 1.5 2.35591V15.6439C1.5 16.3927 2.10709 16.9998 2.85593 16.9998H4.21187M9.6356 1V3.71183C9.6356 4.46067 10.2427 5.06774 10.9915 5.06774H13.7034L9.6356 1Z"
                        stroke="#1857D8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="doc-label">{doc.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VisionCard;
const visionPdfData = [
  {
    id: "classic-6",
    title: "Schüco Verdiept 6°",
    docs: [
      {
        label: "Brochure Schüco Verdiept I",
        href: "/assets/docs/LivIng-Variant-1.pdf",
      },
      {
        label: "Brochure Schüco Vlak I",
        href: "/assets/docs/1-Brochure-Schuco-Vlak.pdf",
      },
      {
        label: "Schüco LivIng Variant Profielsysteem",
        href: "/assets/docs/Brochure-Schuco-LivIng-Variant-Profielsysteem-gecomprimeerd.pdf",
      },
    ],
  },
  {
    id: "modern-15",
    title: "Schüco Verdiept 15°",
    docs: [
      {
        label: "Brochure Schüco Verdiept II",
        href: "/assets/docs/LivIng-Variant-1.pdf",
      },
      {
        label: "Brochure Schüco Vlak II",
        href: "/assets/docs/1-Brochure-Schuco-Vlak2.pdf",
      },
    ],
  },
  {
    id: "city-line",
    title: "Schüco City",
    docs: [
      {
        label: "Brochure Schüco Verdiept III",
        href: "/assets/docs/LivIng-Variant-3.pdf",
      },
      {
        label: "Onderhoudsvoorschriften",
        href: "/assets/docs/Onderhoudsvoorschriften-Schuco.pdf",
      },
    ],
  },
];
