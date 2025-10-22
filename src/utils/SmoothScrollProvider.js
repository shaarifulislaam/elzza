"use client";
import { useEffect } from "react";
import { ScrollSmoother } from "@/utils/gsap";

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && !ScrollSmoother.get()) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });
    }
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmoothScrollProvider;
