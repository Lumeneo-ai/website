import React from "react";
import "../styles/all-features.css";

import vision from "../assets/Intelligence You Can See.png";
import ai from "../assets/Service Without the Wait.png";
import automation from "../assets/Your Operations. Reimagined.png";
import tracking from "../assets/Transparency, Perfected.png";
import camera from "../assets/camera.png";
import updates from "../assets/Live Updates.png";
import support from "../assets/7 Support.png";

const AllFeatures = () => {
  return (
    <section className="all-features-wrapper">
      <div className="all-features">

        {/* ===================== 1. COMPUTER VISION ===================== */}
        <div className="feature-row computer-vision">

          <div className="feature-content">
            <span className="pill">Computer Vision</span>
            <h2>Intelligence You Can See</h2>
            <h4>Computer Vision Diagnostics</h4>

            <p>
              A simple photo becomes a full diagnostic story. Our computer vision
              technology analyzes damage, identifies wear, and anticipates needs
              with remarkable accuracy.
            </p>

            <ul className="feature-list">
              <li>Clear, instant insights</li>
              <li>Predictive detection</li>
              <li>Confident repair estimates</li>
            </ul>

            <p className="note">
              It's the closest thing to having an expert technician inside every camera.
            </p>
          </div>

          <div className="feature-image cv-image">
            <img src={vision} alt="Computer Vision" />

            {/* Instant Analysis – bottom right (image ke andar) */}
            <div className="badge instant-analysis">
              <img src={camera} alt="" />
              <div>
                <strong>Instant Analysis</strong>
                <p>95% Accuracy</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== 2. CONVERSATIONAL AI ===================== */}
        <div className="feature-row conversational-ai reverse">

          <div className="feature-content">
            <span className="pill2">Conversational AI</span>
            <h2>Service Without the Wait</h2>
            <h4>Conversational AI Assistance</h4>

            <p>
              Your customers should never have to wait for answers. Our AI
              responds immediately—booking appointments and explaining repairs.
            </p>

            <ul className="feature-list">
              <li>Zero wait time</li>
              <li>Natural communication</li>
              <li>Always available</li>
            </ul>

            <p className="note">
              Quietly powerful. Uncompromisingly helpful.
            </p>
          </div>

          <div className="feature-image ca-image">
            <img src={ai} alt="Conversational AI" />

            {/* 24/7 Support – image ke left bottom */}
            <div className="badge support-247">
              <img src={support} alt="" />
              <div>
                <strong>24/7 Support</strong>
                <p>Instant Response</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== 3. INTELLIGENT AUTOMATION ===================== */}
        <div className="feature-row intelligent-automation">

          <div className="feature-content">
            <span className="pill3">Intelligent Automation</span>
            <h3>Your Operations. Reimagined</h3>
            <h4>Intelligent Automation</h4>

            <p>
              From scheduling and workload balancing to customer communication,
              our AI coordinates everything with precision.
            </p>

            <ul className="feature-list">
              <li>Smarter scheduling</li>
              <li>Real-time optimization</li>
              <li>Automatic updates and confirmations</li>
            </ul>

            <p className="note">
              The result is a service center that feels lighter, faster, and unmistakably modern.
            </p>
          </div>

          <div className="feature-image ia-image">
            <img src={automation} alt="Automation" />
          </div>
        </div>

        {/* ===================== 4. REAL-TIME TRACKING ===================== */}
        <div className="feature-row real-time-tracking reverse">

          <div className="feature-content">
            <span className="pill4">Real-Time Tracking</span>
            <h2>Transparency, Perfected</h2>
            <h4>Real-Time Service Tracking</h4>

            <p>
              Customers can follow every step of the service journey—clean,
              simple, clear. Digital approvals and live updates.
            </p>

            <p className="note">
              Trust doesn’t need to be complicated.
            </p>
          </div>

          <div className="feature-image rt-image">
            <img src={tracking} alt="Tracking" />

            {/* Live Updates – image ke saath stick */}
            <div className="badge live-updates">
              <img src={updates} alt="" />
              <div>
                <strong>Live Updates</strong>
                <p>Real-time status</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AllFeatures;
