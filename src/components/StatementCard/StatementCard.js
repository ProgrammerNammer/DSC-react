import React from "react";
import "./StatementCard.css";
    
const StatementCard = ({
  ionicon,
  header = "[Input Header]",
  text = "[Input Text]",
}) => {
  return (
    <div className="statement-card">
      <div className="statement-card__icon">
        <ion-icon name={ionicon} />
      </div>
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
};

export default StatementCard;
