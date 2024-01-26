import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"; // Import Button from react-bootstrap
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div className="callToAction">
      <span></span>
      <p>Need A Web Developer ?</p>
      <Link to="/about">
        <h1 data-aos="zoom-in">
          <i className="fas fa-long-arrow-alt-right"></i>
          Let's work together
          <i className="fas fa-long-arrow-alt-left"></i>
        </h1>
      </Link>
    </div>
  );
};

export default CallToAction;
