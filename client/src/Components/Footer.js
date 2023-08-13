import React from "react";
import Logo from "../Assets/Logo.svg";
import { SiLinkedin } from "react-icons/si";
import { SectionWrapper } from "../hoc";
import { FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h1 style={{color:"aqua"}}>TECH</h1>
        </div>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/company/cssnitdgp/mycompany/"><SiLinkedin /></a>
          <a href="https://www.instagram.com/cssnitdgp/"><FaInstagramSquare /></a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Problems</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@css.com</span>
          <span>press@css.com</span>
          <span>contact@css.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Footer, "footer");