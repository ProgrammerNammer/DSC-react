import React from "react";
import styles from "./Button.module.css";

const Button = ({ link = "#", description = "[Insert Text Here]", color }) => {
  return <a href={link}>{description}</a>;
};

export default Button;
