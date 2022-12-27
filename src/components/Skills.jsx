import React from "react";

import "./Skills.css";
import skills1 from "../assets/images/skills-01.jpg";
import skills2 from "../assets/images/skills-02.jpg";

const skills = [
  {
    name: "Adobe",
    progress: 90,
  },
  {
    name: "Html & Css",
    progress: 80,
  },
  {
    name: "Javascript",
    progress: 75,
  },
  {
    name: "Php",
    progress: 85,
  },
];
const tests = [
  {
    image: skills1,
    name: "John Doe, CEO",
  },
  {
    image: skills2,
    name: "John Doe, CEO",
  },
];

const Skills = () => {
  return (
    <section className="our-skills">
      <div className="container">
        <div className="testimonials">
          <h3>Testimonial</h3>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
          {tests.map((test, id) => (
            <div className="content" key={id}>
              <img src={test.image} alt="" />
              <div className="text">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt.
                <p>{test.name}</p>
              </div>
            </div>
          ))}
          <ul className="bullets">
            <li></li>
            <li className="active"></li>
            <li></li>
          </ul>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
          {skills.map((skill, id) => (
            <div className="prog-holder" key={id}>
              <h4>{skill.name}</h4>
              <div className="prog">
                <span
                  style={{ width: `${skill.progress}%` }}
                  data-progress={`${skill.progress}%`}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
