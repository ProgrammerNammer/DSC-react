import React from "react";
import Bauble from "../Bauble/Bauble";
import styles from "./Hero.module.css";
import "./Hero.css";
import "./TypewriterCarousel";

//  Typewrite word carousel list
const wordList =
  '["Empowerment","Inspiration","Motivational","Come Out Of Shell","Socializing"]';

const renderBaubles = (socialMediaBaubles) =>
  socialMediaBaubles.map((item) => {
    return (
      <div className={styles.baublesItem}>
        <Bauble
          referenceLink={item.referenceLink}
          ionicon={item.ionicon}
          withBauble={true}
        />
      </div>
    );
  });

const Hero = (props) => {
  return (
    <header>
      <div className={styles.hero}>
        <div>
          <h1 className={styles.header__hero}>
            DLSU Developer Hub
            <br />
            Your
          </h1>
          <span
            className={`${styles.header__hero} typewrite`}
            data-period="2000"
            data-type={wordList}
          >
            <span className="wrap" />
          </span>
          <h1 className={styles.header__hero}>Environment</h1>
        </div>
        <span
          className={styles.hero_memberCount}
        >{`200+ Organization Members`}</span>
        <div className={styles.hero_baublesList}>
          {renderBaubles(props.socialMediaBaubles)}
        </div>
      </div>
      <div className={styles.attributes}>
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
