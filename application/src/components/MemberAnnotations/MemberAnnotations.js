import React from "react";
import MemberAnnotationCard from "../MemberAnnotationCard/MemberAnnotationCard";
import styles from "./MemberAnnotations.module.css";

const renderMemberAnnotationCards = (memberAnnotationCards) => {
  return memberAnnotationCards.map((item) => {
    return (
      <div className={styles.MemberAnnotationCard}>
        <MemberAnnotationCard
          annotation={item.annotation}
          portrait={item.portrait}
          memberName={item.memberName}
          memberPosition={item.memberPosition}
        />
      </div>
    );
  });
};

const MemberAnnotations = (props) => {
  return (
    <div className={styles.MemberAnnotations} id="OurMembers">
      <h1 className={`${styles.MemberAnnotations_headerLine} header__medium `}>
        The DLSU DSC Experience
      </h1>
      <div
        className={`${styles.MemberAnnotations_MemberAnnotationsCards} sectionContainer`}
      >
        {renderMemberAnnotationCards(props.memberAnnotationCards)}
      </div>
    </div>
  );
};

export default MemberAnnotations;
