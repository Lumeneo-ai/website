import React from "react";
import "../styles/future-hero.css";

const FutureHero = () => {
  return (
    <section className="future-hero">
      <div className="future-hero-inner">

        {/* Pic 3 – Heading */}
        <div className="future-hero-title">
          <h1>The Future of Vehicle Care Starts Here</h1>
        </div>

        {/* Pic 4 – Subtitle + description */}
        <div className="future-hero-text">
          <p className="future-hero-sub">
            Less friction. More clarity. Elevated performance.
          </p>
          <p className="future-hero-desc">
            This is what modern service should feel like.
          </p>
        </div>

        {/* Pic 5 – Buttons */}
        <div className="future-hero-buttons">
          <button className="hero-primary">
            Request a Demo →
          </button>
          <button className="hero-secondary">
            Contact Sales
          </button>
        </div>

        {/* Bottom note */}
        <p className="future-hero-note">
          Experience the new standard. Join 500+ service centers worldwide.
        </p>

      </div>
    </section>
  );
};

export default FutureHero;
