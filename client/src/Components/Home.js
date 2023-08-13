import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/robo.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Hacking Solutions, Transforming </h1><h1 className="nit">NIT Dgp!</h1>
          
          <p className="primary-text">
          "Empowering NIT Dgp's finest minds to revolutionize campus life through innovative tech solutions at our dynamic hackathon."
          </p>
          <button className="secondary-button">
           <a href="/#testimonial" style={{color:"white",margin:"auto",textDecoration:"none"}}> Register Now </a><FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;