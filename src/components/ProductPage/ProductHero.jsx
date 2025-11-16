import React from "react";

const ProductHero = ({ title, subTitle, image }) => {
  return (
    <section className="product-hero-section">
      <div className="el-container">
        <div className="title">{title}</div>
        <div className="sub-title">{subTitle}</div>
        <div className="img-container">
          <img src={image} alt="Deurkozijnen" />
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
