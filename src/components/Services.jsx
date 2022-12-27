import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faCog,
  faPencilRuler,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="main-heading">
          <h2>Services</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </div>
        <div className="services-content">
          <div className="srv-box">
            <FontAwesomeIcon icon={faDesktop} className="icon" />
            <div className="text">
              <h3>Vorem amet intuitive</h3>
              <p>
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Curabitur aliquet quam.
              </p>
            </div>
          </div>
          <div className="srv-box">
            <FontAwesomeIcon icon={faCog} className="icon" />
            <div className="text">
              <h3>Vorem amet intuitive</h3>
              <p>
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Curabitur aliquet quam.
              </p>
            </div>
          </div>
          <div className="srv-box">
            <FontAwesomeIcon icon={faPencilRuler} className="icon" />
            <div className="text">
              <h3>Vorem amet intuitive</h3>
              <p>
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Curabitur aliquet quam.
              </p>
            </div>
          </div>
          <div className="srv-box">
            <FontAwesomeIcon icon={faCamera} className="icon" />
            <div className="text">
              <h3>Vorem amet intuitive</h3>
              <p>
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Curabitur aliquet quam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
