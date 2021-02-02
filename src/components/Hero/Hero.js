import React from "react";
import "./Hero.css";
import "./TypewriterCarousel";

//   Typewrite word carousel list
const wordList =
  '["Empowering","Inspiring","Motivational","Come Out Of Shell","Socializing"]';

const Hero = () => {
  return (
    <header>
      <div className="hero-container">
        <span className="hero-container__text--normal">
          DLSU Developer Hub
          <br />
          Your
        </span>
        <span
          href=""
          className="typewrite hero-container__text--typewrite"
          data-period="2000"
          data-type={wordList}
        >
          <span className="wrap"></span>
        </span>
        <span className="hero-container__text--normal">Environment</span>
      </div>
      <div className="attributes">
        Background image by Ramiltibayan.
        <br />
        <a
          href="https://commons.wikimedia.org/wiki/File:St._La_Salle_Hall_Facade.JPG"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ramiltibayan, CC BY-SA 4.0
        </a>
      </div>
    </header>
  );
};

export default Hero;
