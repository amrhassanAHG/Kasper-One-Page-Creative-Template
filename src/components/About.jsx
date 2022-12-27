import React from "react";

import "./About.css";
import aboutImage from "../assets/images/about.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="main-heading">
          <h2>About Us</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </div>
        <img src={aboutImage} alt="" />
      </div>
    </section>
  );
};

export default About;
