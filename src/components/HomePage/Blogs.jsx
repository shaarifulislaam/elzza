"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CommonTitle from "../commonElement/CommonTitle";
import { blogCards } from "@/PageData/blogCards";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const blogRef = useRef(null);

  useEffect(() => {
    const blogItems = blogRef.current.querySelectorAll(".blog-card");

    gsap.from(blogItems, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: blogRef.current,
        start: "top 80%",
      },
    });
  }, []);

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <section className="blog-section" ref={blogRef}>
      <div className="el-container">
        <CommonTitle
          title="Inzichten & "
          highLight="Inspiratie"
          desc="Ontdek deskundige tips, ontwerpideeën en echte projectverhalen om je te helpen de perfecte ramen en deuren voor je huis te kiezen."
        />

        <div className="blog-grid">
          {blogCards?.map((card) => (
            <Link href={card.href} key={card.id} className="blog-card">
              <div className="img-container">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>

              <div className="card-text-block">
                <h3 className="card-title">{card.title}</h3>

                <div className="card-meta">
                  <span className="date-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                    >
                      {" "}
                      <path
                        d="M11.9141 1.44262H11.4605V0.655738C11.4605 0.262295 11.2337 0 10.8934 0C10.5532 0 10.3264 0.262295 10.3264 0.655738V1.44262H9.02217V0.655738C9.02217 0.262295 8.79535 0 8.45512 0C8.11489 0 7.88807 0.262295 7.88807 0.655738V1.44262H6.58385V0.655738C6.58385 0.262295 6.35703 0 6.01681 0C5.67658 0 5.44976 0.262295 5.44976 0.655738V1.44262H4.20225V0.655738C4.20225 0.262295 3.97543 0 3.6352 0C3.29497 0 3.06815 0.262295 3.06815 0.655738V1.44262H2.61451C1.4237 1.44262 0.459717 2.55738 0.459717 3.93443V13.5082C0.459717 14.8852 1.4237 16 2.61451 16H11.9141C13.1049 16 14.0689 14.8852 14.0689 13.5082V3.93443C14.0689 3.40984 13.9555 2.95082 13.672 2.55738C13.3317 1.83607 12.6513 1.44262 11.9141 1.44262ZM12.9348 13.5082C12.9348 14.1639 12.4812 14.6885 11.9141 14.6885H2.61451C2.04746 14.6885 1.59382 14.1639 1.59382 13.5082V5.90164H12.9348V13.5082Z"
                        fill="#000F42"
                      />{" "}
                      <path
                        d="M3.23782 9.70469H4.71215C4.88226 9.70469 5.05238 9.50797 5.05238 9.31125V7.60633C5.05238 7.40961 4.88226 7.21289 4.71215 7.21289H3.23782C3.0677 7.21289 2.89759 7.40961 2.89759 7.60633V9.31125C2.84088 9.50797 3.011 9.70469 3.23782 9.70469Z"
                        fill="#000F42"
                      />{" "}
                      <path
                        d="M6.52797 9.70469H8.0023C8.17242 9.70469 8.34253 9.50797 8.34253 9.31125V7.60633C8.34253 7.40961 8.17242 7.21289 8.0023 7.21289H6.52797C6.35786 7.21289 6.18774 7.40961 6.18774 7.60633V9.31125C6.18774 9.50797 6.35786 9.70469 6.52797 9.70469Z"
                        fill="#000F42"
                      />{" "}
                      <path
                        d="M9.81594 9.70469H11.2903C11.4604 9.70469 11.6305 9.50797 11.6305 9.31125V7.60633C11.6305 7.40961 11.4604 7.21289 11.2903 7.21289H9.81594C9.64582 7.21289 9.47571 7.40961 9.47571 7.60633V9.31125C9.47571 9.50797 9.64582 9.70469 9.81594 9.70469Z"
                        fill="#000F42"
                      />{" "}
                      <path
                        d="M3.23782 13.5738H4.71215C4.88226 13.5738 5.05238 13.3771 5.05238 13.1804V11.4755C5.05238 11.2788 4.88226 11.082 4.71215 11.082H3.23782C3.0677 11.082 2.89759 11.2788 2.89759 11.4755V13.1804C2.84088 13.3771 3.011 13.5738 3.23782 13.5738Z"
                        fill="#000F42"
                      />{" "}
                      <path
                        d="M6.52797 13.5738H8.0023C8.17242 13.5738 8.34253 13.3771 8.34253 13.1804V11.4755C8.34253 11.2788 8.17242 11.082 8.0023 11.082H6.52797C6.35786 11.082 6.18774 11.2788 6.18774 11.4755V13.1804C6.18774 13.3771 6.35786 13.5738 6.52797 13.5738Z"
                        fill="#000F42"
                      />{" "}
                      <path
                        d="M9.81594 13.5738H11.2903C11.4604 13.5738 11.6305 13.3771 11.6305 13.1804V11.4755C11.6305 11.2788 11.4604 11.082 11.2903 11.082H9.81594C9.64582 11.082 9.47571 11.2788 9.47571 11.4755V13.1804C9.47571 13.3771 9.64582 13.5738 9.81594 13.5738Z"
                        fill="#000F42"
                      />{" "}
                    </svg>
                  </span>
                  <span className="meta-date"> {formatDate(card.date)}</span>
                </div>

                <p className="card-excerpt">{card.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
