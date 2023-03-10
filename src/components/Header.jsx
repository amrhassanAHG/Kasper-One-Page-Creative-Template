import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [activeId, setActiveId] = useState(0);
  const [moving, setMoving] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const barsIcon = useRef(null);
  const xmarkIcon = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // setting header status while scroling
      if (window.scrollY > 120) {
        setMoving((oldMoving) => true);
      } else {
        setMoving((oldMoving) => false);
      }
      //setting active id for each section while scrolling
      if (window.scrollY >= 7250) {
        setActiveId((oldId) => 5);
      } else if (window.scrollY >= 6115) {
        setActiveId((oldId) => 4);
      } else if (window.scrollY >= 3860) {
        setActiveId((oldId) => 3);
      } else if (window.scrollY >= 2080) {
        setActiveId((oldId) => 2);
      } else if (window.scrollY >= 590) {
        setActiveId((oldId) => 1);
      } else {
        setActiveId((oldId) => 0);
      }
    });
    // setting menu appearance when clicking outside it
    window.addEventListener("click", (e) => {
      if (window.innerWidth < 768) {
        if (
          e.target.classList.contains("fa-bars") ||
          e.target.parentElement.classList.contains("fa-bars")
        ) {
          setOpenMenu(() => true);
          barsIcon.current.style.display = "none";
          xmarkIcon.current.style.display = "block";
        } else {
          setOpenMenu(() => false);
          xmarkIcon.current.style.display = "none";
          barsIcon.current.style.display = "block";
        }
      }
    });
  }, []);

  return (
    <header className={moving ? "moving-background" : undefined}>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} alt="Logo" />
        </a>
        <nav>
          <FontAwesomeIcon
            ref={barsIcon}
            icon={faBars}
            className="toggle-menu"
          />
          <FontAwesomeIcon
            ref={xmarkIcon}
            icon={faXmark}
            className="toggle-menu"
            style={{ display: "none" }}
          />
          <ul className={openMenu ? "open-menu" : undefined}>
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
                  className={`link ${activeId === id ? "active" : undefined}`}
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
