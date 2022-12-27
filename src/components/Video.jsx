import React from "react";

import "./Video.css";
import sectionVideo from "../assets/videos/awesome-video.mp4";

const Video = () => {
  return (
    <section className="video">
      <video autoPlay muted loop>
        <source src={sectionVideo} type="video/mp4" />
      </video>
      <div className="text">
        <h2>Super Awesome Video Here</h2>
        <p>Its All You Need</p>
        <button>See More</button>
      </div>
    </section>
  );
};

export default Video;
