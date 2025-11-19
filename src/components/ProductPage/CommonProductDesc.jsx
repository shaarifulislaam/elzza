import React from "react";
import ProductSlider from "../commonElement/ProductSlider";
import ProductDescription from "./ProductDescription";

const CommonProductDesc = ({
  leftImg,
  descriptionData,
  sliderImages,
  productDescTitle,
  productDesc,
  image,
}) => {
  return (
    <section
      className={
        leftImg
          ? "common-product-section left-img"
          : "common-product-section right-img"
      }
    >
      <div className="el-container">
        <div className="common-product-container">
          <ProductDescription
            listItem={descriptionData}
            productDescTitle={productDescTitle}
            productDesc={productDesc}
          />
          <ProductSlider productImages={sliderImages} image={image} />
        </div>
      </div>
    </section>
  );
};

export default CommonProductDesc;
