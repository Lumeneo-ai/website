import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="navbar-wrapper">
      <div className="navbar">

        {/* LEFT */}
        <div className="navbar-left">
          <img src={logo} alt="Automitra Logo" />
        </div>

        {/* CENTER */}
        <nav className="navbar-center">
          <a href="#features">Features</a>
          <a href="#technology">Technology</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* RIGHT */}
        <div className="navbar-right">
          <button className="btn-outline">Sign In</button>
          <button className="btn-filled">Request Demo</button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
