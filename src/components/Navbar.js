import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrapper">

      <div className="navbar">

        {/* LEFT LOGO */}
        <div className="navbar-left">
          <img src={logo} alt="Automitra Logo" />
        </div>

        {/* CENTER LINKS (Desktop Only) */}
        <nav className="navbar-center">
          <a href="#features">Features</a>
          <a href="#technology">Technology</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* RIGHT BUTTONS (Desktop Only) */}
        <div className="navbar-right">
          <button className="btn-outline">Sign In</button>
          <button className="btn-filled">Request Demo</button>
        </div>

        {/* HAMBURGER (Mobile Only) */}
        <div 
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* MOBILE MENU — ALWAYS STAYS BELOW NAV */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a onClick={() => setOpen(false)} href="#features">Features</a>
        <a onClick={() => setOpen(false)} href="#technology">Technology</a>
        <a onClick={() => setOpen(false)} href="#testimonials">Testimonials</a>
        <a onClick={() => setOpen(false)} href="#contact">Contact</a>

        <button className="btn-outline mobile-btn">Sign In</button>
        <button className="btn-filled mobile-btn">Request Demo</button>
      </div>

    </header>
  );
};

export default Navbar;
