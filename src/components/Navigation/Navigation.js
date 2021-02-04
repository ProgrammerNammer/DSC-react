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
    if (window.pageYOffset > (this.state.stickyNavigation ? 0 : 600)) {
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
            stickyNavigationState={this.state.stickyNavigation}
          />
        </div>
      );
    });

    return (
      <nav className={this.renderNavigationState()}>
        <div className="navigation-logo">
          <span>DLSU GDG</span>
          <img src={GDGLogo} alt="DSC-Logo" />
        </div>
        <div className="navigation-list">{renderNavigationItems}</div>
      </nav>
    );
  }
}

export default Navigation;
