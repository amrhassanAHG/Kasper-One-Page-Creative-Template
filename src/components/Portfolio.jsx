import { useState } from "react";

import "./Portfolio.css";
import shuffle1 from "../assets/images/shuffle-01.jpg";
import shuffle2 from "../assets/images/shuffle-02.jpg";
import shuffle3 from "../assets/images/shuffle-03.jpg";
import shuffle4 from "../assets/images/shuffle-04.jpg";
import shuffle5 from "../assets/images/shuffle-05.jpg";
import shuffle6 from "../assets/images/shuffle-06.jpg";
import shuffle7 from "../assets/images/shuffle-07.jpg";
import shuffle8 from "../assets/images/shuffle-08.jpg";

const images = [
  {
    src: shuffle1,
    type: ["All", "App", "Photo"],
  },
  {
    src: shuffle2,
    type: ["All", "App", "Web"],
  },
  {
    src: shuffle3,
    type: ["All", "App", "Print"],
  },
  {
    src: shuffle4,
    type: ["All", "Photo", "Web"],
  },
  {
    src: shuffle5,
    type: ["All", "Photo", "Print"],
  },
  {
    src: shuffle6,
    type: ["All", "Web", "Print"],
  },
  {
    src: shuffle7,
    type: ["All", "Web"],
  },
  {
    src: shuffle8,
    type: ["All", "Print"],
  },
];

const Portfolio = () => {
  const [activeId, setActiveId] = useState(0);
  const [displayedImages, setDisplayedImages] = useState(images);

  const itemOnClick = (name, id) => {
    setActiveId((oldId) => id);
    setDisplayedImages((oldImages) =>
      images.filter((image) => image.type.includes(name))
    );
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="main-heading">
          <h2>Portfolio</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </div>
        <ul className="shuffle">
          {["All", "App", "Photo", "Web", "Print"].map((name, id) => (
            <li
              key={id}
              className={activeId === id ? "active" : undefined}
              onClick={(e) => itemOnClick(name, id)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="imgs-container">
        {displayedImages.map((image, id) => (
          <div className="box" key={id}>
            <img src={image.src} alt="" />
            <div className="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#portfolio" className="more">
        More
      </a>
    </section>
  );
};

export default Portfolio;
