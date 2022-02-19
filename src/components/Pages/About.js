import React from "react";
import NavBar from "../NavBar";
import LetterAvatars from "../LetterAvatars";
import "./About.css"

function About() {
  return <div className="about">
    <NavBar />
    <h3 className="about-title">About Us</h3>
    <div className="about-paragraph">
      <p>Here are some of the members of our talented team:</p>
      <p><LetterAvatars /></p>
      <p>This is where Micheala will talk about herself + empty image</p>
      <p>This is where Noya will talk about himself + empty image</p>
      <p>This is where Matthew will talk about himself + empty image</p>
    </div>
    <p className="about-tools-title">Built using</p>
    <div className="about-tools">
      <a href="https://reactjs.org/">
      <img src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" alt="react" width="100px" height="100px" className="react-class"></img>
      </a>
      <a href="https://supabase.com/">
      <img src="https://pbs.twimg.com/profile_images/1397471927132844033/jN-wuufb_400x400.jpg" alt="supabase" width="100px" height="100px" className="react-class"></img>
      </a>
      <a href="https://api-ninjas.com/">
      <img src="https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/4784b7c0-b6e5-4ffb-b7b3-50f41c99a0fa.png" alt="ninja-api" width="100px" height="100px"></img>
      </a>
      <a href="https://mui.com/">
      <img src="https://pgjones.dev/tozo/frontend/img/material-ui.png" alt="material-ui" width="100px" height="100px" className="react-class"></img>
      </a>
      
    </div>
  </div>;
}

export default About;
