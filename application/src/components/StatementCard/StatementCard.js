import React from "react";
import styles from "./StatementCard.module.css";
import "./StatementCard.css";

const StatementCard = ({
  header = "[Input Header]",
  text = "[Input Text]",
  isPrimary = false,
  backgroundImage = null,
}) => {
  const getStyle = () => {
    if (isPrimary) {
      return {
        backgroundImage: `linear-gradient(rgba(13, 101, 32, 0.8), rgba(13, 101, 32, 0.8)),
          url(${backgroundImage})`,
        color: "white",
      };
    }
  };

  return (
    <div className={styles.StatementCard} style={getStyle()}>
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
};

export default StatementCard;
