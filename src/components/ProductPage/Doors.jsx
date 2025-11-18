import React from "react";
import ProductSlider from "../commonElement/ProductSlider";

const Doors = () => {
  return (
    <>
      <div className="el-container">
        <ProductSlider productImages={doorImages.sliderImages} />
      </div>
    </>
  );
};

export default Doors;
export const doorImages = {
  sliderImages: [
    "/assets/images/productPage/door_hero.png",
    "/assets/images/productPage/frame_hero.png",
  ],
};
