const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Stylish, Durable <br />
            Windows And Doors <br />
            <span className="hero__title--accent">Built For You</span>
          </h1>

          <p className="hero__description">
            Discover durable, stylish, energy-efficient solutions that enhance
            your home's comfort and beauty with expert craftsmanship, perfect
            installation, and unmatched quality for lasting value.
          </p>

          <div className="hero__buttons">
            <button className="hero__button hero__button--primary">
              Get A Free Quote →
            </button>
            <button className="hero__button hero__button--secondary">
              View Our Projects
            </button>
          </div>

          <div className="hero__features">
            <div className="hero__feature">
              <span className="hero__feature-icon">✓</span>
              <span className="hero__feature-text">
                10+ Years of Experience
              </span>
            </div>
            <div className="hero__feature">
              <span className="hero__feature-icon">✓</span>
              <span className="hero__feature-text">Quality & Guaranteed</span>
            </div>
            <div className="hero__feature">
              <span className="hero__feature-icon">✓</span>
              <span className="hero__feature-text">
                Fast & Reliable Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
