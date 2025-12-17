import React from "react";
import "../styles/brands.css";

import logo1 from "../assets/1.svg";
import logo2 from "../assets/2.svg";
import logo3 from "../assets/3.svg";
import logo4 from "../assets/4.svg";
import logo5 from "../assets/5.svg";

const Brands = () => {
  return (
    <section className="brands-wrapper">
      {/* INNER CONTAINER – 1440 SAFE */}
      <div className="brands-container">
        <h2 className="brands-title">
          Trusted by Leading Service Centers Worldwide
        </h2>

        <div className="brands-row">
          <img src={logo1} alt="Audi" />
          <img src={logo2} alt="Jeep" />
          <img src={logo3} alt="Opel" />
          <img src={logo4} alt="Dacia" />
          <img src={logo5} alt="Renault" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
