import React from "react";
import { Link } from "react-scroll";
import NavigationItem from "../NavigationItem/NavigationItem";
import GDGLogo from "../../assets/images/DSC-logo.png";
import "./Navigation.css";

//  Instantiate the NavigationItem(s) here
const navigationItems = [
  {
    itemName: "Become A Member",
    itemHoverColor: "#4285f4",
  },
  {
    itemName: "About Us",
    itemHoverColor: "#ea4335",
    navigateToID: "sectionAboutUs",
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
  listener = null;
  state = {
    stickyNavigation: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.toggleStickyNavigation);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
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

  renderNavigationState = () => {
    if (this.state.stickyNavigation) {
      return "navigation--sticky";
    }
  };

  render() {
    const renderNavigationItems = navigationItems.map((item) => {
      return (
        <div className="navigation-item">
          <NavigationItem
            itemName={item.itemName}
            itemHoverColor={item.itemHoverColor}
            navigateToID={item.navigateToID}
            stickyNavigationState={this.state.stickyNavigation}
          />
        </div>
      );
    });

    return (
      <nav className={this.renderNavigationState()}>
        <Link
          className={`navigation-logo`}
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          <span>DLSU DSC</span>
          <img src={GDGLogo} alt="DSC-Logo" />
        </Link>

        <div className="navigation-list">{renderNavigationItems}</div>
      </nav>
    );
  }
}

export default Navigation;
