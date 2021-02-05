import React from "react";
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
        color: this.props.itemHoverColor,
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
      <a
        href={this.props.source}
        style={this.getStyle()}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        className="navigation-item"
      >
        {this.props.itemName}
      </a>
    );
  }
}

NavigationItem.defaultProps = {
  itemHoverColor: "Blue",
  itemName: "Input Item Name",
  source: "#",
};

export default NavigationItem;
