import React from "react";
import styles from "./TechnologyList.module.css";
import TechnologyCard from "../TechnologyCard/TechnologyCard";

const renderTechnologyCards = ({ technologyCards, onToggle, itemSelected }) => {
  let counter = 1;

  return technologyCards.map((item) => {
    return (
      <TechnologyCard
        ionicon={item.ionicon}
        headerLine={item.headerLine}
        subHeaderLine={item.subHeaderLine}
        hoverColor={item.hoverColor}
        lighterHoverColor={item.lighterHoverColor}
        cardNumber={counter++}
        onToggle={onToggle}
        itemSelected={itemSelected}
      />
    );
  });
};

const TechnologyList = (props) => {
  return (
    <div className={styles.technologyList}>{renderTechnologyCards(props)}</div>
  );
};

export default TechnologyList;
