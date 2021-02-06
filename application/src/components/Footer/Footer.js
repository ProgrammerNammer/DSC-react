import React from "react";
import Bauble from "../Bauble/Bauble";
import "./Footer.css";

const Footer = (props) => {
  const renderBaubles = props.socialMediaBaubles.map((item) => {
    return (
      <div className="baubles-list__bauble-item">
        <Bauble
          referenceLink={item.referenceLink}
          ionicon={item.ionicon}
          itemHoverColor={item.itemHoverColor}
        />
      </div>
    );
  });

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container__baubles-list">{renderBaubles}</div>
        <p>Copyright &copy; 2021 by DLSU GDG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
