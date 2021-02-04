import React from "react";
import "./Bauble.css";

const Bauble = ({ referenceLink = "#", ionicon }) => {
  return (
    <div className="baubles-container">
      <a
        href={referenceLink}
        target="_blank"
        rel="noopener noreferrer"
        className="baubles"
      >
        <ion-icon name={ionicon}></ion-icon>
      </a>
    </div>
  );
};

export default Bauble;
