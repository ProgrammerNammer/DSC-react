import React from "react";
import styles from "./TechnologyList.module.css";
import TechnologyCard from "../TechnologyCard/TechnologyCard";

class TechnologyList extends React.Component {
  renderTechnologyCards = () => {
    let counter = 1;

    return this.props.technologyCards.map((item) => {
      return (
        <TechnologyCard
          ionicon={item.ionicon}
          headerLine={item.headerLine}
          description={item.description}
          hoverColor={item.hoverColor}
          cardNumber={counter++}
          onToggle={this.props.onToggle}
          itemSelected={this.props.itemSelected}
        />
      );
    });
  };

  render() {
    return (
      <div className={styles.technologyList}>
        {this.renderTechnologyCards()}
      </div>
    );
  }
}

export default TechnologyList;
