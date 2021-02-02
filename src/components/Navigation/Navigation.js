import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import GDGLogo from "../../assets/images/DSC-logo.png";
import "./Navigation.css";

//  Instantiate the NavigationItems here
const navigationItems = [
  {
    itemName: "Become A Member",
    itemHoverColor: "#4285f4",
  },
  {
    itemName: "How It Works",
    itemHoverColor: "#ea4335",
  },
  {
    itemName: "Organizational Events",
    itemHoverColor: "#fbbc05",
  },
  {
    itemName: "Our Social Hubs",
    itemHoverColor: "#34a853",
  },
];

class Navigation extends React.Component {
  renderNavigationItems = navigationItems.map((item) => {
    return (
      <div className="navigation-item">
        <NavigationItem
          itemName={item.itemName}
          itemHoverColor={item.itemHoverColor}
        />
      </div>
    );
  });

  render() {
    return (
      <nav>
        <div className="navigation-logo">
          <span>DLSU GDG</span>
          <img src={GDGLogo} alt="DSC-Logo" />
        </div>
        <div className="navigation-list">{this.renderNavigationItems}</div>
      </nav>
    );
  }
}

export default Navigation;
