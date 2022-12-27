import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
        <p>We Are Social</p>
        <div className="social-icons">
          <a href="#footer">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a href="#footer">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="#footer">
            <FontAwesomeIcon icon={faHome} className="icon" />
          </a>
          <a href="#footer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
        <p className="copyright">
          &copy; 2021 <span>Kasper</span> All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
