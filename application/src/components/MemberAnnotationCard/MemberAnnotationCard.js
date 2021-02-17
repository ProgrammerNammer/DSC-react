import React from "react";
import styles from "./MemberAnnotationCard.module.css";

const MemberAnnotationCard = ({
  annotation = "[Insert Annotation]",
  portrait,
  memberName = "[Member Name]",
  memberPosition = "[Member Position]",
}) => {
  return (
    <div className={styles.MemberAnnotationCard}>
      <div className={styles.MemberAnnotationCard_quote}>
        <blockquote>{annotation}</blockquote>
      </div>
      <cite className={styles.MemberAnnotationCard_profile}>
        <div className={styles.profile_portrait}>
          <img src={portrait} alt="Member Portrait" />
        </div>
        <div className={styles.profile_information}>
          <span className={styles.information_name}>{memberName}</span>
          <br />
          <span className={styles.information_position}>{memberPosition}</span>
        </div>
      </cite>
    </div>
  );
};

export default MemberAnnotationCard;
