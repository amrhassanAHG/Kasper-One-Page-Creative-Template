import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <form action="">
          <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
          <input type="email" name="email" placeholder="Your Email" />
          <input
            type="submit"
            value="Subscribe"
            onClick={(e) => e.preventDefault()}
          />
        </form>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
