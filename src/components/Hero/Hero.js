import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <header>
      <div className="hero-text">DLSU Developers' powerhub</div>
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
