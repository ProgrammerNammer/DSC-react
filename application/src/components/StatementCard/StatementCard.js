import React from "react";
import styles from "./StatementCard.module.css";
import "./StatementCard.css";

const StatementCard = ({
  ionicon,
  header = "[Input Header]",
  text = "[Input Text]",
  isLeft = true,
}) => {
  if (isLeft) {
    return (
      <div className={styles.StatementCard}>
        <div className="statement-card__left-part">
          <div className="statement-card__icon statement-card__icon--left">
            <ion-icon name={ionicon} />
          </div>
        </div>
        <div className="statement-card__right-part">
          <div className="statement-card__content statement-card__content--left-side">
            <h2>{header}</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.StatementCard}>
        <div className="statement-card__right-part">
          <div className="statement-card__content statement-card__content--right-side">
            <h2>{header}</h2>
            <p>{text}</p>
          </div>
        </div>
        <div className="statement-card__left-part">
          <div className="statement-card__icon statement-card__icon--right">
            <ion-icon name={ionicon} />
          </div>
        </div>
      </div>
    );
  }
};

export default StatementCard;
