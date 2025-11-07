"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // runs once when visible
    threshold: 0.3, // trigger when 30% visible
  });
  return (
    <section ref={ref} className="stats-section">
      <div className="el-container">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stats-block">
              <h3 className="stats-title">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix || ""}
                    prefix={stat.prefix || ""}
                  />
                ) : (
                  `${stat.prefix || ""}0${stat.suffix || ""}`
                )}
              </h3>
              <p className="stats-lbl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
const stats = [
  { value: 85, suffix: "M", label: "Recensie sinds 2025", prefix: "$" },
  { value: 36, suffix: "%", label: "Maand op groei" },
  { value: 17, suffix: "Y", label: "Jarenlange ervaring" },
  { value: 552, suffix: "+", label: "Project voltooid" },
];
