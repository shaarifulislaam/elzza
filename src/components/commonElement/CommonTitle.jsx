"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CommonTitle = ({ subTitle, title, highLight, title2, desc }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    const spans = el.querySelectorAll("h1 span");
    const subtitle = el.querySelector(".sub-title");
    const description = el.querySelector(".desc");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(subtitle, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(spans, {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(description, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div className="common-title-block" ref={titleRef}>
      {subTitle && <h5 className="sub-title">{subTitle}</h5>}
      <h1 className="common-title">
        <span>{title}</span> <span className="highlight">{highLight}</span>
        <span>{title2}</span>
      </h1>
      {desc && <p className="desc">{desc}</p>}
    </div>
  );
};

export default CommonTitle;
