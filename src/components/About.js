import React from "react";
import icon from "../images/icon.svg";
import aboutPic from "../images/about-pic.svg";

export default function About() {
  return (
    <div className="my-container">
      <div className="text-center">
        <h2>
          <span className="text-white">About</span>{" "}
          <span className="text-blue">CeeJay</span>
          <img src={icon} alt="" />
        </h2>
      </div>
      <div className="d-flex mx-auto">
        <div className="flex-1">
          <h2>
            <span className="text-white">I am an </span>
            <span className="text-grad"> Innovative</span>
            <span className="text-white"> and</span>
            <br />
            <span className="text-grad">
              User Experience Focused
              <br /> Designer
            </span>
          </h2>
        </div>
        <div className="flex-2">
          <img src={aboutPic} alt="" width={500} />
        </div>
      </div>
    </div>
  );
}
