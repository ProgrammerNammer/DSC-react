import React from "react";
import OwlCarousel from "react-owl-carousel";
import $ from "jquery";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import EventCard from "../EventCard/EventCard";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./SectionUpcomingEvents.module.css";
import "./SectionUpcomingEvents.css";

/**
 * TODO
 *  > Load all EventCard(s) from a local JSON file
 */
import Event_1 from "../../assets/images/event-1.jpg";
import UpcomingEvent from "../../assets/images/Upcoming_Event.png";

//  Instantiate the EventCard(s) here
const spotlightCards = [
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

const eventCard = [
  {
    image: UpcomingEvent,
    alternative: "Welcome to Skills Level Up!",
    headline: "Welcome to Skills Level Up!",
    date: "February 27, 2021 4:00 PM - 6:00 PM",
    text:
      "Hello Students, Get an opportunity to listen and learn from Googlers and industry experts sharing knowledge and skills to prepare yourself for your future career; From resume building and interview tips, personal branding, tech and non-tech skills development and many more! This is a great opportunity to bring members of your community together to learn something new! ",
    link: "events.withgoogle.com/skillslevelup/",
  },
];

class SectionUpcomingEvents extends React.Component {
  renderSpotlightCards = spotlightCards.map((item) => {
    return (
      <SpotlightCard
        image={item.image}
        alternative={item.alternative}
        headLine={item.headLine}
        text={item.text}
        className={`item`}
      />
    );
  });

  renderEventCard = eventCard.map((item) => {
    return (
      <div>
        <EventCard
          image={item.image}
          alternative={item.alternative}
          headline={item.headline}
          date={item.date}
          text={item.text}
          link={item.link}
        />
      </div>
    );
  });

  render() {
    return (
      <section id={this.props.id}>
        <div className={styles.spotlight}>
          <h1 className={`header__light ${styles.spotlight_headerLine}`}>
            ORGANIZATION SPOTLIGHT
          </h1>
          <div className={styles.spotlight_carousel}>
            <div>
              <OwlCarousel
                stagePadding={50}
                items={Math.floor($(window).width() / 300)}
                margin={30}
              >
                {this.renderSpotlightCards}
              </OwlCarousel>
            </div>
          </div>
        </div>
        <div className={`${styles.upcomingEvent} sectionContainer`}>
          <h1 className="header__medium">Upcoming Event</h1>
          {this.renderEventCard}
        </div>
      </section>
    );
  }
}

export default SectionUpcomingEvents;
