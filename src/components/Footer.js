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
          <a href="#">Features</a>
          <a href="#">Technology</a>
          <a href="#">Pricing</a>
          <a href="#">Security</a>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        {/* CONNECT */}
        <div className="footer-connect">
          <h4>Connect</h4>
          <div className="footer-socials">
            <img src={twitter} alt="Twitter" />
            <img src={linkedin} alt="LinkedIn" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
          </div>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">
        <span>Copyright © 2025 Automitra. All rights reserved.</span>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms of Service</span>
          <span>|</span>
          <span>Cookie Policy</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
