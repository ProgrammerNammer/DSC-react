import React from "react";
import Bauble from "../Bauble/Bauble";
import "./Hero.css";
import "./TypewriterCarousel";

/*  TODO:
 *    > Default word while Word Carousel is loading
 */

//  Typewrite word carousel list
const wordList =
  '["Empowering","Inspiring","Motivational","Come Out Of Shell","Socializing"]';

//  Social Media Links
const socialMediaBaubles = [
  { referenceLink: "#", ionicon: "logo-twitter" },
  { referenceLink: "#", ionicon: "logo-discord" },
  { referenceLink: "#", ionicon: "logo-linkedin" },
  { referenceLink: "#", ionicon: "logo-github" },
  { referenceLink: "#", ionicon: "mail-outline" },
];

const renderBaubles = socialMediaBaubles.map((item) => {
  return <Bauble referenceLink={item.referenceLink} ionicon={item.ionicon} />;
});

class Hero extends React.Component {
  /*  Note:
   *   In future implementations, this will be integrated with
   *   outside data which will turn this into an int data type
   */
  state = { memberCount: "70+" };

  render() {
    return (
      <header>
        <div className="hero-container">
          <div>
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
          <span className="member-count">{`${this.state.memberCount} Organization Members`}</span>
          <div className="baubles-list">{renderBaubles}</div>
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
  }
}

export default Hero;
