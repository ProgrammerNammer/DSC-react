import React from "react";
import "./EventCard.css";

/**
 * TODO
 *  >   Styled component types:
 *      >   Background image with white text
 *      >   Background image just for logo
 *  >   Whole Component is an anchor element
 *  >   'See more' anchor element
 *  >   Load all eventCards to load from a local JSON file
 */

class EventCard extends React.Component {
  render() {
    return (
      <div className="event-card">
        <div className="event-card__hero">
          <img src={this.props.image} alt={this.props.alternative} />
        </div>
        <div className="event-card__content">
          <span>{this.props.headLine}</span>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default EventCard;
