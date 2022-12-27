import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

import "./Design.css";
import mobile from "../assets/images/mobile.png";

const Design = () => {
  return (
    <section className="design">
      <div className="image">
        <img src={mobile} alt="" />
      </div>
      <div className="text">
        <h2>Our Design Comes With...</h2>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faDesktop}
              className="icon"
            ></FontAwesomeIcon>
            Responsive Design
          </li>
          <li>
            <FontAwesomeIcon
              icon={faDesktop}
              className="icon"
            ></FontAwesomeIcon>
            Modern And Clean Design
          </li>
          <li>
            <FontAwesomeIcon
              icon={faDesktop}
              className="icon"
            ></FontAwesomeIcon>
            Clean Code
          </li>
          <li>
            <FontAwesomeIcon
              icon={faDesktop}
              className="icon"
            ></FontAwesomeIcon>
            Browser Friendly
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Design;
