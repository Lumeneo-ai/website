import React from "react";
import "../styles/trust-testimonials.css";

import AI from "../assets/AI-Powered.png";
import Lightning from "../assets/Lightning Fast.png";
import Secure from "../assets/Secure & Reliable.png";
import avatar1 from "../assets/Michael Rodriguez.png";
import avatar2 from "../assets/Sarah Chen.png";
import avatar3 from "../assets/James Patterson.png";

const TrustAndTestimonials = () => {
  return (
    <section className="tt-wrapper">

      {/* ================= TRUST ================= */}
      <div className="trust-section">
        <h2>Designed for Service Centers That Lead</h2>
        <p className="trust-subtitle">
          The most forward-thinking automotive and motorbike teams rely on our platform
          to elevate their craft.
        </p>

        <div className="trust-cards">
          <div className="trust-card">
            <div className="trust-icon">
              <img src={AI} alt="AI Powered" />
            </div>
            <h4>AI-Powered</h4>
            <p>
              Advanced machine learning algorithms that continuously improve
              with every interaction.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-icon">
              <img src={Secure} alt="Secure & Reliable" />
            </div>
            <h4>Secure & Reliable</h4>
            <p>
              Enterprise-grade security with 99.9% uptime guarantee for
              uninterrupted service.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-icon">
              <img src={Lightning} alt="Lightning Fast" />
            </div>
            <h4>Lightning Fast</h4>
            <p>
              Instant processing and real-time responses that keep your
              operations moving.
            </p>
          </div>
        </div>
      </div>

      {/* ================= TESTIMONIALS ================= */}
      <div className="testimonial-section">
        <h2>Hear From Our Partners</h2>
        <p className="testimonial-subtitle">
          Real experiences from service centers transforming their operations
        </p>

        <div className="testimonial-cards">

          <div className="testimonial-card">
            <div className="author">
               <img src={avatar1} alt="Michael Rodriguez" />
              <div>
                <strong>Michael Rodriguez</strong> <br />
                <span>Service Manager</span>
              </div>
            </div>
            <div className="stars">★★★★★</div>
            <p className="quote-title">
              "Fast. Accurate. Beautifully simple."
            </p>
            <p className="quote-text">
              The platform has completely transformed how we handle customer intake.
              What used to take 20 minutes now takes 2.
            </p>

            
          </div>

          <div className="testimonial-card">
            <div className="author">
               <img src={avatar2} alt="Sarah Chen" />
              <div>
                <strong>Sarah Chen</strong>  <br />
                <span>Operations Director</span>
              </div>
            </div>
            <div className="stars">★★★★★</div>
            <p className="quote-title2">
              Computer vision changed everything—our intake is now instant.
            </p>
            <p className="quote-text">
              The diagnostic accuracy is incredible. Our technicians can focus
              on repairs instead of assessments.
            </p>

            
          </div>

          <div className="testimonial-card">
            <div className="author">
                <img src={avatar3} alt="James Patterson" />
              
              <div>
                <strong>James Patterson</strong>  <br />
                <span>Owner & Founder</span>
              </div>
            </div>
            <div className="stars">★★★★★</div>
            <p className="quote-title3">
              No wait times, ever. Our customers notice the difference.
            </p>
            <p className="quote-text">
              Customer satisfaction scores have increased by 47% since
              implementing the conversational AI.
            </p>

            
          </div>

        </div>
      </div>

    </section>
  );
};

export default TrustAndTestimonials;
