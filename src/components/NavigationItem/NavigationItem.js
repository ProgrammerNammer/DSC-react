import React from "react";
import "./NavigationItem.css";

class NavigationItem extends React.Component {
  state = { hoveredOn: false };

  toggleHover = (e) => {
    this.setState({ hoveredOn: !this.state.hoveredOn });
  };

  render() {
    var style;

    if (this.state.hoveredOn) {
      style = {
        border: `10px solid ${this.props.itemHoverColor}`,
        backgroundColor: this.props.itemHoverColor,
      };
    } else {
      style = {
        border: `10px solid transparent`,
        color: "white",
      };
    }

    return (
      <a
        href={this.props.source}
        style={style}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
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
