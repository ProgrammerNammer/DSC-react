import React from "react";
import styles from "./TechnologyCard.module.css";

class TechnologyCard extends React.Component {
  onToggle = () => {
    this.props.onToggle(this.props.cardNumber);
  };

  renderStyle = () => {
    if (this.props.itemSelected === this.props.cardNumber) {
      return { backgroundColor: `${this.props.hoverColor}`, color: "white" };
    }
  };

  render() {
    return (
      <div
        className={styles.technologyCard}
        style={this.renderStyle()}
        onClick={this.onToggle}
      >
        <div className={styles.technologyCard_ionicon}>
          <ion-icon name={this.props.ionicon} />
        </div>
        <div className={styles.technologyCard_column} />
        <div className={styles.technologyCard_content}>
          <h2>{this.props.headerLine}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default TechnologyCard;
