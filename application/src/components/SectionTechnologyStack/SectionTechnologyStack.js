import React from "react";
import TechnologyList from "../TechnologyList/TechnologyList";
import styles from "./SectionTechnologyStack.module.css";

//  Importing Logos
import Azure from "../../assets/images/TechnologyStacks/General/Azure.png";
import GH from "../../assets/images/TechnologyStacks/General/GH.png";
import Figma from "../../assets/images/TechnologyStacks/General/Figma.svg";
import Git from "../../assets/images/TechnologyStacks/General/Git.png";
import Heroku from "../../assets/images/TechnologyStacks/General/Heroku.png";
import Jira from "../../assets/images/TechnologyStacks/General/Jira.png";
import VSC from "../../assets/images/TechnologyStacks/General/VSC.svg";
import Trello from "../../assets/images/TechnologyStacks/General/Trello.png";
import GCP from "../../assets/images/TechnologyStacks/General/GCP.png";
import AzureML from "../../assets/images/TechnologyStacks/Machine Learning/AzureML.jpg";
import Tensorflow from "../../assets/images/TechnologyStacks/Machine Learning/Tensorflow.png";
import Python from "../../assets/images/TechnologyStacks/Machine Learning/Python.png";
import Prolog from "../../assets/images/TechnologyStacks/Machine Learning/Prolog.svg";
import OpenAI from "../../assets/images/TechnologyStacks/Machine Learning/OpenAI.png";
import CSS from "../../assets/images/TechnologyStacks/Web/CSS.png";
import HTML from "../../assets/images/TechnologyStacks/Web/HTML.png";
import JS from "../../assets/images/TechnologyStacks/Web/JS.png";
import MongoDB from "../../assets/images/TechnologyStacks/Web/MongoDB.png";
import MySQL from "../../assets/images/TechnologyStacks/Web/MySQL.png";
import NodeJS from "../../assets/images/TechnologyStacks/Web/NodeJS.png";
import ReactJS from "../../assets/images/TechnologyStacks/Web/React.png";
import Spring from "../../assets/images/TechnologyStacks/Web/Spring.png";
import AndroidStudio from "../../assets/images/TechnologyStacks/Mobile/AndroidStudio.jpg";
import Flutter from "../../assets/images/TechnologyStacks/Mobile/Flutter.svg";
import ReactNative from "../../assets/images/TechnologyStacks/Mobile/React.png";
import Swift from "../../assets/images/TechnologyStacks/Mobile/Swift.jpg";
import Unity from "../../assets/images/TechnologyStacks/Mobile/Unity.svg";
import Xamarin from "../../assets/images/TechnologyStacks/Mobile/Xamarin.png";

const technologyStacks = [
  [
    { image: Azure, alternative: "Azure" },
    { image: GH, alternative: "GitHub" },
    { image: Figma, alternative: "Figma" },
    { image: Git, alternative: "Git" },
    { image: Heroku, alternative: "Heroku" },
    { image: Jira, alternative: "Jira" },
    { image: VSC, alternative: "VSC" },
    { image: Trello, alternative: "Trello" },
    { image: GCP, alternative: "GCP" },
  ],
  [
    { image: AzureML, alternative: "Azure" },
    { image: Tensorflow, alternative: "Tensorflow" },
    { image: Python, alternative: "Python" },
    { image: Prolog, alternative: "Prolog" },
    { image: OpenAI, alternative: "OpenAI" },
  ],
  [
    { image: CSS, alternative: "CSS" },
    { image: HTML, alternative: "HTML" },
    { image: JS, alternative: "JavaScript" },
    { image: MongoDB, alternative: "MongoDB" },
    { image: MySQL, alternative: "MySQL" },
    { image: NodeJS, alternative: "NodeJS" },
    { image: ReactJS, alternative: "ReactJS" },
    { image: Spring, alternative: "Spring" },
  ],
  [
    { image: AndroidStudio, alternative: "Android Studio" },
    { image: Flutter, alternative: "Flutter" },
    { image: ReactNative, alternative: "React Native" },
    { image: Swift, alternative: "Swift" },
    { image: Unity, alternative: "Unity" },
    { image: Xamarin, alternative: "Xamarin" },
  ],
];

const technologyCards = [
  {
    ionicon: "build-outline",
    headerLine: "Developer Tools",
    hoverColor: "#4285f4",
    lighterHoverColor: "#e5e5e5",
    subHeaderLine:
      "Sharpen your general Developer tools needed for any job, regardless of speciality.",
  },
  {
    ionicon: "cog-outline",
    headerLine: "Artificial Intelligence",
    hoverColor: "#ea4335",
    lighterHoverColor: "#e5e5e5",
    subHeaderLine:
      "Develop intelligent systems that solve problems without supervision, following rules that you set.",
  },
  {
    ionicon: "globe-outline",
    headerLine: "Website Development",
    hoverColor: "#fbbc05",
    lighterHoverColor: "#e5e5e5",
    subHeaderLine:
      "Deploy responsive, modern websites that properly address modern business problems.",
  },
  {
    ionicon: "phone-portrait-outline",
    headerLine: "Mobile Development",
    hoverColor: "#34a853",
    lighterHoverColor: "#e5e5e5",
    subHeaderLine:
      "Build swift and convenient Mobile applications using relevant and efficient technology.",
  },
];

class SectionAboutUs extends React.Component {
  state = { selectedCard: 1 };

  onToggle = (cardNumber) => {
    if (cardNumber !== this.state.selectedCard) {
      this.setState({ selectedCard: cardNumber });
    }
  };

  render() {
    return (
      <section className="sectionFormat sectionDivision">
        <h1 className={`header__medium ${styles.headerLine}`}>
          Developer Technologies Fostered
        </h1>
        <div className={styles.content}>
          <div className={styles.content_technologyList}>
            <TechnologyList
              technologyCards={technologyCards}
              itemSelected={this.state.selectedCard}
              onToggle={this.onToggle}
            />
          </div>
          <div className={styles.content_article}>
            <h1 className="header--medium">
              {technologyCards[this.state.selectedCard - 1].headerLine}
            </h1>
            <p>{technologyCards[this.state.selectedCard - 1].subHeaderLine}</p>
            <div className={styles.content_technologyStack}>
              {technologyStacks[this.state.selectedCard - 1].map((item) => {
                return (
                  <img
                    src={item.image}
                    alt={item.alternative}
                    className={styles.technologyStack_instance}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionAboutUs;
