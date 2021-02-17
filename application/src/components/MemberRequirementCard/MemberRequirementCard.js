import React from "react";
import styles from "./MemberRequirementCard.module.css";

const MemberRequirementCard = ({
  title = "[Insert Title]",
  description = "[Insert Description]",
  image,
  isLeft = true,
}) => {
  return (
    <div
      className={`${styles.MemberRequirementCard} ${
        isLeft && styles.MemberRequirementCard__left
      }`}
    >
      <div className={styles.MemberRequirementCard_content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.MemberRequirementCard_column} />
      <div className={styles.MemberRequirementCard_image}>
        <img src={image} alt="Alternative" />
      </div>
    </div>
  );
};

export default MemberRequirementCard;
