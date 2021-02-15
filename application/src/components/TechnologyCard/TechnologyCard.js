import React from "react";
import styles from "./TechnologyCard.module.css";

class TechnologyCard extends React.Component {
  state = { isHoveredOn: false };

  onToggle = () => {
    this.props.onToggle(this.props.cardNumber);
  };

  onMouseHover = () => {
    this.setState({ isHoveredOn: !this.state.isHoveredOn });
  };

  renderStyle = () => {
    if (this.props.itemSelected === this.props.cardNumber) {
      return { backgroundColor: `${this.props.hoverColor}`, color: "white" };
    }

    if (this.state.isHoveredOn) {
      return { backgroundColor: `${this.props.lighterHoverColor}` };
    }
  };

  render() {
    return (
      <div
        className={styles.technologyCard}
        style={this.renderStyle()}
        onClick={this.onToggle}
        onMouseEnter={this.onMouseHover}
        onMouseLeave={this.onMouseHover}
      >
        <div className={styles.technologyCard_ionicon}>
          <ion-icon name={this.props.ionicon} />
        </div>
        <div className={styles.technologyCard_column} />
        <div className={styles.technologyCard_content}>
          <h2>{this.props.headerLine}</h2>
          <p>{this.props.subHeaderLine}</p>
        </div>
      </div>
    );
  }
}

export default TechnologyCard;
