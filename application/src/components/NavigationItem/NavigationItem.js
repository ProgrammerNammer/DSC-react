import React from "react";
import styles from "./NavigationItem.module.css";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

class NavigationItem extends React.Component {
  state = { hoveredOn: false };

  toggleHover = () => {
    this.setState({ hoveredOn: !this.state.hoveredOn });
  };

  getStyle = () => {
    var style;

    if (this.state.hoveredOn && this.props.stickyNavigation) {
      style = {
        color: "white",
        backgroundColor: this.props.itemHoverColor,
      };
    } else if (!this.state.hoveredOn && this.props.stickyNavigation) {
      style = {
        color: "black",
      };
    } else if (this.state.hoveredOn && !this.props.stickyNavigation) {
      style = {
        color: "white",
        backgroundColor: this.props.itemHoverColor,
      };
    } else if (!this.state.hoveredOn && !this.props.stickyNavigation) {
      style = {
        color: "white",
      };
    }

    if (this.state.stickyNavigation) {
      style.fontWeight = 400;
    }

    return style;
  };

  render() {
    if (this.props.isRouterLink) {
      return (
        <LinkRouter
          to={this.props.navigateToLink}
          style={this.getStyle()}
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
          style={this.getStyle()}
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
