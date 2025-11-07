import React from "react";

const AboutHero = () => {
  return (
    <section className="about-hero-section">
      <div className="el-container">
        <div className="about-hero-text">
          <div className="about-title">Over Elzza</div>
          <div className="about-desc">
            Vakmanschap in Kwaliteit, Comfort & Design sinds 2008. Bij Elzza
            Kozijnen geloven we dat jouw woning het perfecte evenwicht verdient
            tussen design, duurzaamheid en energie-efficiëntie. Sinds 2008 is
            ons familiebedrijf in Purmerend een vertrouwde naam in hoogwaardige
            ramen, deuren en schuifsystemen — waarbij vakmanschap en innovatie
            samenkomen voor langdurige resultaten.
          </div>
        </div>
        <div className="img-container">
          <img src="/assets/images/aboutPage/about_hero.png" alt="About Hero" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
