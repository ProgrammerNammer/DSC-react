import React from "react";
import styles from "./NavigationItem.module.css";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const getStyle = ({ stickyNavigation, itemHoverColor }, { hoveredOn }) => {
  var style;

  if (hoveredOn && stickyNavigation) {
    style = {
      color: "white",
      backgroundColor: itemHoverColor,
    };
  } else if (!hoveredOn && stickyNavigation) {
    style = {
      color: "black",
    };
  } else if (hoveredOn && !stickyNavigation) {
    style = {
      color: "white",
      backgroundColor: itemHoverColor,
    };
  } else if (!hoveredOn && !stickyNavigation) {
    style = {
      color: "white",
    };
  }

  if (stickyNavigation) {
    style.fontWeight = 400;
  }

  return style;
};

class NavigationItem extends React.Component {
  state = { hoveredOn: false };

  toggleHover = () => {
    this.setState({ hoveredOn: !this.state.hoveredOn });
  };

  render() {
    if (this.props.isRouterLink) {
      return (
        <LinkRouter
          to={this.props.navigateToLink}
          style={getStyle(this.props, this.state)}
          className={styles.navigationItem}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
        >
          {this.props.itemName}
        </LinkRouter>
      );
    } else {
      return (
        <Link
          className={styles.navigationItem}
          style={getStyle(this.props, this.state)}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          activeClass="active"
          to={this.props.navigateToID}
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
        >
          {this.props.itemName}
        </Link>
      );
    }
  }
}

NavigationItem.defaultProps = {
  itemHoverColor: "Blue",
  itemName: "Input Item Name",
  navigateToID: "hero",
};

export default NavigationItem;
