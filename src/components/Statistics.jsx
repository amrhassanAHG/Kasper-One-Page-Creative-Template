import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faFolder,
  faEnvelope,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import "./Statistics.css";

const boxes = [
  {
    icon: faMugHot,
    number: "1,236",
    p: "Coffee Drinks",
  },
  {
    icon: faFolder,
    number: "256",
    p: "Completed Projects",
  },
  {
    icon: faEnvelope,
    number: "1,743",
    p: "Mail Sent",
  },
  {
    icon: faTrophy,
    number: "17",
    p: "Awards Received",
  },
];

const Statistics = () => {
  return (
    <section className="stats">
      <div className="container">
        {boxes.map((box, id) => (
          <div className="box" key={id}>
            <div className="icon">
              <FontAwesomeIcon icon={box.icon}></FontAwesomeIcon>
            </div>
            <div className="number">{box.number}</div>
            <p>{box.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
