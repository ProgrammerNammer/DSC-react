import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import styles from "./Navigation.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import GDGLogoWhite from "../../assets/images/DSC-logo-white.png";
import GDGLogo from "../../assets/images/DSC-logo.png";
import "./Navigation.css";

//  Instantiate the NavigationItem(s) here
const navigationItems = [
  {
    itemName: "Become A Member",
    itemHoverColor: "#4285f4",
    isRouterLink: true,
    navigateToLink: "/recruitment",
  },
  {
    itemName: "Organizational Events",
    itemHoverColor: "#ea4335",
    navigateToID: "sectionUpcomingEvents",
  },
  {
    itemName: "About Us",
    itemHoverColor: "#fbbc05",
    navigateToID: "sectionAboutUs",
  },
  {
    itemName: "Our Members",
    itemHoverColor: "#34a853",
    navigateToID: "OurMembers",
  },
];

const renderNavigationState = ({ stickyNavigation }) => {
  if (stickyNavigation) {
    return styles.navigation__sticky;
  }
};

const renderNavigationItems = ({ stickyNavigation }) => {
  return navigationItems.map((item) => {
    return (
      <div className={styles.navigationItem}>
        <NavigationItem
          itemName={item.itemName}
          itemHoverColor={item.itemHoverColor}
          isRouterLink={item.isRouterLink}
          navigateToLink={item.navigateToLink}
          navigateToID={item.navigateToID}
          stickyNavigation={stickyNavigation}
        />
      </div>
    );
  });
};

class Navigation extends React.Component {
  state = { stickyNavigation: false };

  componentDidMount() {
    window.addEventListener("scroll", this.toggleStickyNavigation);
  }

  toggleStickyNavigation = () => {
    if (window.pageYOffset > 0) {
      if (!this.state.stickyNavigation) {
        this.setState({ stickyNavigation: true });
      }
    } else {
      if (this.state.stickyNavigation) {
        this.setState({ stickyNavigation: false });
      }
    }
  };

  render() {
    return (
      <nav className={renderNavigationState(this.state)}>
        <LinkRouter className={styles.logo} to="/">
          <img
            src={this.state.stickyNavigation ? GDGLogo : GDGLogoWhite}
            alt="DSC-Logo"
          />
          <span>Developer Student Club Taft</span>
        </LinkRouter>
        <div className={styles.navigationList}>
          {renderNavigationItems(this.state)}
        </div>
      </nav>
    );
  }
}

export default Navigation;
