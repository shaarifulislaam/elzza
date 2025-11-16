import React from "react";

const VideoSection = () => {
  return (
    <section className="video-panel-section">
      <div className="el-container">
        <div className="video-panel">
          <video
            poster="/assets/video/poster.png"
            autoPlay
            playsInline
            muted
            controls
            loop
          >
            <source
              src="/assets/video/SCHUCO-LIVING-SLIDE-82-мм.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
