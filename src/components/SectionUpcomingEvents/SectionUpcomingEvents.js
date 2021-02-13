import React from "react";
import OwlCarousel from "react-owl-carousel";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./SectionUpcomingEvents.css";

/**
 * TODO
 *  > Load all EventCard(s) from a local JSON file
 */
import Event_1 from "../../assets/images/event-1.jpg";

//  Instantiate the EventCard(s) here
const eventCards = [
  {
    image: Event_1,
    alternative: "Start of DLSU DSC",
    headLine: "Birth of DLSU DSC",
    text: "Here throughout, DLSU DSC solidified from its founders.",
  },
  {
    image: Event_1,
    alternative: "Start of DLSU DSC",
    headLine: "Birth of DLSU DSC",
    text: "Here throughout, DLSU DSC solidified from its founders.",
  },
  {
    image: Event_1,
    alternative: "Start of DLSU DSC",
    headLine: "Birth of DLSU DSC",
    text: "Here throughout, DLSU DSC solidified from its founders.",
  },
  {
    image: Event_1,
    alternative: "Start of DLSU DSC",
    headLine: "Birth of DLSU DSC",
    text: "Here throughout, DLSU DSC solidified from its founders.",
  },
  {
    image: Event_1,
    alternative: "Start of DLSU DSC",
    headLine: "Birth of DLSU DSC",
    text: "Here throughout, DLSU DSC solidified from its founders.",
  },
  {
    image: Event_1,
    alternative: "Start of DLSU DSC",
    headLine: "Birth of DLSU DSC",
    text: "Here throughout, DLSU DSC solidified from its founders.",
  },
];

class SectionUpcomingEvents extends React.Component {
  renderEventCards = eventCards.map((item) => {
    return (
      <div className="item">
        <SpotlightCard
          image={item.image}
          alternative={item.alternative}
          headLine={item.headLine}
          text={item.text}
        />
      </div>
    );
  });

  render() {
    return (
      <section className="section-upcoming-events">
        <h1>ORGANIZATION SPOTLIGHT</h1>
        <div className="section-upcoming-events__background">
          <div className="section-upcoming-events__carousel">
            <OwlCarousel
              stagePadding={50}
              items={Math.floor($(window).width() / 300)}
              margin={30}
            >
              {this.renderEventCards}
            </OwlCarousel>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionUpcomingEvents;
