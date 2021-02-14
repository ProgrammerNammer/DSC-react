import React from "react";
import styles from "./NavigationItem.module.css";
import { Link } from "react-scroll";
import "./NavigationItem.css";

class NavigationItem extends React.Component {
  state = { hoveredOn: false, stickyNavigationState: false };

  toggleHover = () => {
    this.setState({ hoveredOn: !this.state.hoveredOn });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.stickyNavigationState !== this.props.stickyNavigationState) {
      if (!this.state.stickyNavigationState) {
        this.setState({
          stickyNavigationState: true,
        });
      } else {
        this.setState({
          stickyNavigationState: false,
        });
      }
    }
  }

  getStyle = () => {
    var style;

    if (this.state.hoveredOn && this.state.stickyNavigationState) {
      style = {
        color: "white",
        backgroundColor: this.props.itemHoverColor,
      };
    } else if (!this.state.hoveredOn && this.state.stickyNavigationState) {
      style = {
        color: "black",
      };
    } else if (this.state.hoveredOn && !this.state.stickyNavigationState) {
      style = {
        color: "white",
        backgroundColor: this.props.itemHoverColor,
      };
    } else if (!this.state.hoveredOn && !this.state.stickyNavigationState) {
      style = {
        color: "white",
      };
    }

    if (this.state.stickyNavigationState) {
      style.fontWeight = 400;
    }
    return style;
  };

  render() {
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

NavigationItem.defaultProps = {
  itemHoverColor: "Blue",
  itemName: "Input Item Name",
  navigateToID: "hero",
};

export default NavigationItem;
