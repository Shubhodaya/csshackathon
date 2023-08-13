import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Unleash Your Creativity, Ignite Change, Hack NIT !
        </h1>
        <p className="primary-text">
        Welcome to the TechVerse 1.0! In just 6 hours, teams will ideate, innovate, and create working solutions for our campus challenges. 
        Showcase your prototype to our judges and seize the chance to win exciting prizes, all while shaping the future of NIT Dgp. 
        </p>
        <p className="primary-text">
        Join us and be a part of this dynamic hacking experience!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
     
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");