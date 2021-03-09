import React from "react";
import styles from "./SpotlightCard.module.css";

/**
 * TODO
 *  >   Styled component types:
 *      >   Background image with white text
 *      >   Background image just for logo
 *  >   Whole Component is an anchor element
 *  >   'See more' anchor element
 *  >   Load all spotlightCards to load from a local JSON file
 */

const SpotlightCard = (props) => {
  return (
    <div className={styles.spotlight}>
      <img src={props.image} alt={props.alternative} />
      <div className={styles.spotlight__content}>
        <span>{props.headLine}</span>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default SpotlightCard;
