import React from "react";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Ask us any Question" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");