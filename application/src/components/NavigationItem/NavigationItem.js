import React from "react";
import styles from "./NavigationItem.module.css";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const getStyle = ({ stickyNavigation, itemHoverColor }, { hoveredOn }) => {
  var style;

  if (hoveredOn && stickyNavigation) {
    style = {
      color: "black",
      borderBottom: `5px solid ${itemHoverColor}`,
    };
  } else if (!hoveredOn && stickyNavigation) {
    style = {
      color: "black",
      borderBottom: `5px solid transparent`,
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
          className={`${styles.navigationItem} ${
            this.props.stickyNavigation ? styles.sticky : styles.nonSticky
          }`}
          style={getStyle(this.props, this.state)}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          to={this.props.navigateToLink}
        >
          {this.props.itemName}
        </LinkRouter>
      );
    } else {
      return (
        <Link
          className={`${styles.navigationItem} ${
            this.props.stickyNavigation ? styles.sticky : styles.nonSticky
          }`}
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
  itemName: "Input Item Name",
  navigateToID: "hero",
};

export default NavigationItem;
