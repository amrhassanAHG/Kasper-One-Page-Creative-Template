import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [activeId, setActiveId] = useState(0);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      if (window.scrollY > 120) {
        if (!moving) setMoving((oldMoving) => true);
      } else {
        if (moving) setMoving((oldMoving) => false);
      }
    });
  });

  return (
    <header className={moving ? "moving-background" : undefined}>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <nav>
          <FontAwesomeIcon icon={faBars} className="toggle-menu" />
          <ul>
            {[
              "home",
              "services",
              "portfolio",
              "about",
              "pricing",
              "contact",
            ].map((name, id) => (
              <li key={id}>
                <a
                  href={id === 0 ? "#" : `#${name}`}
                  className={activeId === id ? "active" : undefined}
                  onClick={(e) => setActiveId((oldId) => id)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div className="form">
            <FontAwesomeIcon icon={faSearch} className="search" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
