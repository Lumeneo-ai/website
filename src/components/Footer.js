import React from "react";
import "../styles/footer.css";

import logo from "../assets/logo.svg";

import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/FB.png";
import instagram from "../assets/Insta.png";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ================= TOP ================= */}
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <img src={logo} alt="Automitra" className="footer-logo" />
          <p>
            Revolutionizing automotive and
            motorbike service with AI-powered
            intelligence.
          </p>
        </div>

        {/* PRODUCT */}
        <div className="footer-col">
          <h4>Product</h4>
          <a href="/features">Features</a>
          <a href="/technology">Technology</a>
          <a href="/pricing">Pricing</a>
          <a href="/security">Security</a>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>

        {/* CONNECT */}
        <div className="footer-connect">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img src={twitter} alt="Twitter" />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={facebook} alt="Facebook" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">
        <span>Copyright © 2025 Automitra. All rights reserved.</span>

        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms">Terms of Service</a>
          <span>|</span>
          <a href="/cookie-policy">Cookie Policy</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
