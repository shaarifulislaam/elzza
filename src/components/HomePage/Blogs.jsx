"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CommonTitle from "../commonElement/CommonTitle";

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
          title="Insights & "
          highLight="Inspiration"
          desc="Explore expert tips, design ideas, and real project stories to help you choose the perfect windows and doors for your home."
        />

        <div className="blog-grid">
          {blogCards.map((card) => (
            <Link href={card.href} key={card.id} className="blog-card">
              <div className="img-container">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>

              <div className="card-text-block">
                <h3 className="card-title">{card.title}</h3>

                <div className="card-meta">
                  <span className="date-icon">{/* Your SVG */}</span>
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

export const blogCards = [
  {
    id: "perfect-windows",
    title: "Choosing the Perfect Windows for Your Home Style",
    date: "2025-10-04",
    excerpt:
      "Discover how to match your windows with your home's architecture for timeless beauty and comfort.",
    image: "/assets/images/Homepage/inspiration/1.png",
    author: "Elzza Design Team",
    readTime: "4 min read",
    tags: ["windows", "design", "home"],
    href: "/blog/choosing-perfect-windows",
  },
  {
    id: "patio-doors",
    title: "How Modern Patio Doors Can Brighten Your Living Space",
    date: "2025-10-04",
    excerpt:
      "Learn how the right door design can bring in more light, connect indoor and outdoor spaces, and boost your home's value.",
    image: "/assets/images/Homepage/inspiration/2.png",
    author: "Home Interiors",
    readTime: "5 min read",
    tags: ["doors", "patio", "renovation"],
    href: "/blog/modern-patio-doors",
  },
  {
    id: "energy-efficient",
    title: "Energy Efficient: Save Money While Staying Comfortable",
    date: "2025-10-04",
    excerpt:
      "Understand how energy-saving glass and insulation make your home cozier—and your bills lower—all year round.",
    image: "/assets/images/Homepage/inspiration/3.png",
    author: "Sustainable Living",
    readTime: "6 min read",
    tags: ["energy", "glass", "savings"],
    href: "/blog/energy-efficient-windows",
  },
];
