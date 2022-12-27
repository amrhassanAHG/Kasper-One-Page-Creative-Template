import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./Landing.css";

const Landing = () => {
  return (
    <section className="landing">
      <div className="overlay"></div>
      <div className="text">
        <div className="content">
          <h2>
            Hello World!
            <br />
            We Are Kasper We Make Art.
          </h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </div>
      </div>
      <FontAwesomeIcon icon={faAngleLeft} className="left change-background" />
      <FontAwesomeIcon
        icon={faAngleRight}
        className="right change-background"
      />
      <ul>
        <li></li>
        <li className="active"></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Landing;
