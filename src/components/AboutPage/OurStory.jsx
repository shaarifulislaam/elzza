import React from "react";

const OurStory = () => {
  return (
    <section className="our-story-section">
      <div className="el-container">
        <div className="title">Ons Verhaal</div>
        <div className="our-story-container">
          <div className="img-container">
            <img src="/assets/images/aboutPage/story.png" alt="" />
          </div>
          <div className="text-container">
            <div className="desc">
              Wat begon als een klein installatie- en leveringsbedrijf is
              uitgegroeid tot een volledig onafhankelijke fabrikant van
              hoogwaardige kunststof en aluminium kozijnsystemen. In 2018 zijn
              we gestart met onze eigen productiefaciliteit en werden we
              officieel dealer van Schüco, waardoor we elke klant superieure
              kwaliteit en maatwerkoplossingen kunnen bieden.
            </div>
            <div className="desc">
              Onze producten zijn inmiddels te vinden in woningen, kantoren en
              grootschalige projecten in heel Noord-Holland en daarbuiten —
              vertrouwd door huiseigenaren, aannemers en architecten.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
