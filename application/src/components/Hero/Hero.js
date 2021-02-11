import React from "react";
import Bauble from "../Bauble/Bauble";
import "./Hero.css";
import "./TypewriterCarousel";

/*  TODO:
 *    > Default word while Word Carousel is loading
 *    > Colored Text. Color palette uses Google colors
 *    > Standardized socialMediaBaubles render
 */

//  Typewrite word carousel list
const wordList =
  '["Empowering","Inspiring","Motivational","Come Out Of Shell","Socializing"]';

class Hero extends React.Component {
  /*  Note:
   *   In future implementations, this state will be integrated with
   *   outside data which will turn this into an int data type
   */
  state = { memberCount: "200+" };

  renderBaubles = this.props.socialMediaBaubles.map((item) => {
    return (
      <div className="hero-container__bauble-item">
        <Bauble
          referenceLink={item.referenceLink}
          ionicon={item.ionicon}
          withBauble={true}
        />
      </div>
    );
  });

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
          <span className="hero-container__member-count">{`${this.state.memberCount} Organization Members`}</span>
          <div className="hero-container__baubles-list">
            {this.renderBaubles}
          </div>
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
