import React from "react";
import TechnologyList from "../TechnologyList/TechnologyList";
import styles from "./SectionTechnologyStack.module.css";

//  Importing Logos
// const websiteDesignTechnologies = [
//   { image: GitHubLogo, alternative: "Github" },
// ];

const technologyCards = [
  {
    ionicon: "build-outline",
    headerLine: "Developer Tools",
    hoverColor: "#4285f4",
    lighterHoverColor: "#e5e5e5",
    subHeaderLine:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    ionicon: "cog-outline",
    headerLine: "Artificial Intelligence",
    hoverColor: "#ea4335",
    lighterHoverColor: "#e5e5e5",
    subHeaderLine:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    ionicon: "globe-outline",
    headerLine: "Website Development",
    hoverColor: "#fbbc05",
    lighterHoverColor: "#e5e5e5",
    subHeaderLine:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    ionicon: "phone-portrait-outline",
    headerLine: "Mobile Development",
    hoverColor: "#34a853",
    lighterHoverColor: "#e5e5e5",
    subHeaderLine:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      <section className="sectionContainer">
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
            <p>{technologyCards[this.state.selectedCard - 1].description}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionAboutUs;
