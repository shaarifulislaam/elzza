"use client";
import React, { useState } from "react";
import CommonTitle from "./commonElement/CommonTitle";

const GalleryTab = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Windows",
    "Doors",
    "Residential",
    "Sliding Systems",
    "Commercial",
  ];

  const galleryImages = {
    All: [
      {
        id: 1,
        image: "/assets/images/galleryPage/gallery-1.png",
        title: "Modern Lake House",
      },
      {
        id: 2,
        image: "/assets/images/galleryPage/gallery-2.png",
        title: "Classic Entry Door",
      },
      {
        id: 3,
        image: "/assets/images/galleryPage/gallery-3.png",
        title: "Dining Room View",
      },

      {
        id: 4,
        image: "/assets/images/galleryPage/gallery-4.png",
        title: "Open Living Space",
      },
      {
        id: 5,
        image: "/assets/images/galleryPage/gallery-5.png",
        title: "City View Office",
      },
      {
        id: 6,
        image: "/assets/images/galleryPage/gallery-6.png",
        title: "City View Office",
      },
      {
        id: 7,
        image: "/assets/images/galleryPage/gallery-7.png",
        title: "City View Office",
      },
      {
        id: 8,
        image: "/assets/images/galleryPage/gallery-8.png",
        title: "City View Office",
      },
      {
        id: 9,
        image: "/assets/images/galleryPage/gallery-9.png",
        title: "City View Office",
      },
      {
        id: 10,
        image: "/assets/images/galleryPage/gallery-10.png",
        title: "City View Office",
      },
      {
        id: 11,
        image: "/assets/images/galleryPage/gallery-11.png",
        title: "City View Office",
      },
    ],
    Windows: [
      {
        id: 1,
        image: "/assets/images/galleryPage/gallery-2.png",
        title: "Floor to Ceiling Windows",
      },
      {
        id: 4,
        image: "/assets/images/galleryPage/gallery-6.png",
        title: "Bedroom Windows",
      },
    ],
    Doors: [
      {
        id: 2,
        image: "/assets/images/galleryPage/gallery-7.png",
        title: "Entry Door",
      },
      {
        id: 5,
        image: "/assets/images/galleryPage/gallery-3.png",
        title: "Sliding Doors",
      },
      {
        id: 6,
        image: "/assets/images/galleryPage/gallery-6.png",
        title: "Sliding Doors",
      },
    ],
    Residential: [
      {
        id: 1,
        image: "/assets/images/galleryPage/gallery-6.png",
        title: "Modern Lake House",
      },
      {
        id: 2,
        image: "/assets/images/galleryPage/gallery-2.png",
        title: "Classic Entry Door",
      },
      {
        id: 3,
        image: "/assets/images/galleryPage/gallery-11.png",
        title: "Dining Room View",
      },
    ],
    "Sliding Systems": [
      {
        id: 5,
        image: " /assets/images/galleryPage/gallery-9.png",
        title: "Open Living Space",
      },
      {
        id: 6,
        image: "/assets/images/galleryPage/gallery-10.png",
        title: "Modern Sliding Doors",
      },
    ],
    Commercial: [
      {
        id: 6,
        image: "/assets/images/galleryPage/gallery-6.png",
        title: "City View Office",
      },
      {
        id: 1,
        image: "/assets/images/galleryPage/gallery-9.png",
        title: "Commercial Space",
      },
      {
        id: 2,
        image: "/assets/images/galleryPage/gallery-8.png",
        title: "Commercial Space",
      },
      {
        id: 3,
        image: "/assets/images/galleryPage/gallery-7.png",
        title: "Commercial Space",
      },
    ],
  };

  return (
    <section className="gallery-page">
      <div className="el-container">
        <CommonTitle
          subTitle="Galerij van ELZZA"
          title="Inspiratie door ontwerp"
          desc="Ontdek onze collectie voltooide raam-, deur- en schuifsystemen waarin design, detail en vakmanschap op prachtige wijze samenkomen."
        />
        <div className="gallery-container">
          {/* Tab Navigation */}
          <div className="tab-navigation">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {galleryImages[activeTab].map((item) => (
              <div key={item.id} className="gallery-item">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <div className="name">Project Name: Modern Lake House</div>
                  <div className="name">Location: Utrecht, Netherlands</div>
                  <div className="name">
                    Description: A perfect blend of sleek black frames and wide
                    glass panels. Elzza’s sliding doors bring panoramic views
                    and natural light into this modern retreat.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryTab;
