import React from "react";
import "../styles/hero.css";
import heroImage from "../assets/home.png"; 
import logo1 from "../assets/Engineered with advanced AI.svg";
import logo2 from "../assets/Designed for humans.svg";
// 👉 apni image ka correct path yahan do

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <span className="hero-badge">
            AI-Powered Service Excellence
          </span>

          <h1 className="hero-title">
            A Smarter Way to Care <br />
            for Every <span>Vehicle</span>
          </h1>

          <p className="hero-subtitle">
            Precision. Clarity. Effortless Intelligence.
          </p>

          <p className="hero-description">
            We built a new kind of service platform—one that sees the road
            ahead, speaks with understanding, and simplifies every step of
            the automotive and motorbike experience.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              Request Demo →
            </button>
            <button className="btn-secondary">
              Explore Features
            </button>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
                <img src={logo1} alt="icons" />
                Engineered with advanced AI
            </div>
            <div className="hero-feature">
              <img src={logo2} alt="icons" />
              Designed for humans
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img src={heroImage} alt="Automitra Hero" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
