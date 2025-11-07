import React from "react";
import CommonTitle from "../commonElement/CommonTitle";

const WhyElzza = () => {
  return (
    <section className="why-elzza-section">
      <div className="el-container">
        <CommonTitle
          title="Comfort, Design en Nederlands Vakmanschap voor Elke Woning"
          subTitle="WAAROM ELZZA"
          desc="Ontdek hoe onze innovatieve raam- en deursystemen zorgen voor meer comfort, stijl en duurzaamheid — vertrouwd door huiseigenaren, architecten en bouwprofessionals in heel Nederland."
        />
        <div className="why-container">
          <div className="text-container">
            <div className="text-block">
              <div className="title">Onze Missie</div>
              <div className="desc">
                Het leveren van hoogwaardige, energiezuinige ramen en deuren die
                het comfort, de schoonheid en de duurzaamheid van elke woning
                verbeteren — met behoud van het vakmanschap en de
                betrouwbaarheid die de naam Elzza kenmerken.
              </div>
            </div>
            <div className="text-block">
              <div className="title">Onze Visie</div>
              <div className="desc">
                Wij streven ernaar een toonaangevende naam te worden in duurzame
                kozijnoplossingen, waarbij we onze producten en processen
                voortdurend verbeteren om te voldoen aan toekomstige
                energienormen en de verwachtingen van onze klanten — van
                particuliere woningen tot grootschalige bouwprojecten.
              </div>
            </div>
          </div>
          <div className="img-container">
            <img src="/assets/images/aboutPage/person.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyElzza;
