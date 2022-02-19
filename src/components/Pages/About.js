import React from "react";
import NavBar from "../NavBar";
import "./About.css"

function About() {
  return <div className="about">
    <NavBar />
    <h3 className="about-title">About Us</h3>
    <div className="about-paragraph">
      <p>This the where we talk about ourselves</p>
      <p>This is where Micheala will talk about herself</p>
      <p>This is where Noya will talk about himself</p>
      <p>This is where Matthew will talk about himself</p>
    </div>
    <div className="about-tools">
      <p>This is the tools section</p>
    </div>
  </div>;
}

export default About;
