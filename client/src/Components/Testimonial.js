import React from "react";
import Signup from "./Signup";

import { SectionWrapper } from "../hoc";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Register</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Ready to hack your way to innovation? 
        Fill out the registration form below and secure your spot in the NIT Dgp Hackathon.
        Join fellow problem solvers in shaping the future of our campus!
        </p>
      </div>
      <Signup />
   
    </div>
  );
};

export default SectionWrapper(Testimonial, "testimonial");