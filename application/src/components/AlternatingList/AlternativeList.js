import React from "react";
import styles from "./AlternativeList.module.css";

render;
const AlternativeList = (props) => {
  return (
    <div className={styles.AlternativeList}>
      {renderAlternativeItems(props.children)}
    </div>
  );
};

export default AlternativeList;
