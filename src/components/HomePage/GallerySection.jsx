import React from "react";

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <div className="el-container">
        <div className="bento-grid">
          <div className="grid-item item-1">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
              alt="Modern windows with garden view"
            />
          </div>
          <div className="grid-item item-2">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
              alt="Modern entrance with glass door"
            />
          </div>
          <div className="grid-item item-3">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=600&fit=crop"
              alt="Sliding glass doors"
            />
          </div>
          <div className="grid-item item-4">
            <img
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop"
              alt="Large modern windows"
            />
          </div>
          <div className="grid-item item-5">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=600&fit=crop"
              alt="Contemporary door design"
            />
          </div>
        </div>

        <div className="button-container">
          <button className="view-gallery-btn">View Our Gallery</button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
