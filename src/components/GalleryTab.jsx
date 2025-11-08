"use client";
import React, { useState } from "react";
import CommonTitle from "./commonElement/CommonTitle";

const GalleryTab = () => {
  const [activeTab, setActiveTab] = useState("Alle");

  const tabs = [
    "Alle",
    "Ramen",
    "Deuren",
    "Residentieel",
    "Schuifsystemen",
    "Commercieel",
  ];

  const galleryImages = {
    Alle: [
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
    Ramen: [
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
    Deuren: [
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
    Residentieel: [
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
    Schuifsystemen: [
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
    Commercieel: [
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
                  <div className="name">
                    Projectnaam: Moderne Woning aan het Meer
                  </div>
                  <div className="name">Locatie: Utrecht, Nederland</div>
                  <div className="name">
                    Beschrijving: Een perfecte combinatie van strakke zwarte
                    kozijnen en brede glazen panelen. De schuifdeuren van Elzza
                    brengen panoramisch uitzicht en natuurlijk licht in dit
                    moderne toevluchtsoord.
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
