import React from "react";
import styles from "./EventItem.module.css";

const EventItem = (props) => {
  return (
    <div className={styles.eventItem}>
      <div className={styles.eventItem_image}>
        <img src={props.image} alt={props.alternative} />
      </div>
      <div className={styles.eventItem_column} />
      <div className={styles.eventItem_content}>
        <h3>{props.date}</h3>
        <h2>{props.headline}</h2>
        <p>{props.text}</p>
        <a
          className="button__blue"
          href=""
          onClick={(event) => event.preventDefault()}
        >
          View Details
        </a>
      </div>
    </div>
  );
};

EventItem.defaultProps = {};

export default EventItem;
