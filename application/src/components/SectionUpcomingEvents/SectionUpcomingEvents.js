import React from "react";
import OwlCarousel from "react-owl-carousel";
import $ from "jquery";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import EventItem from "../EventItem/EventItem";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./SectionUpcomingEvents.module.css";

/**
 * TODO
 *  > Load all EventItem(s) from a local JSON file
 */
import Event_1 from "../../assets/images/event-1.jpg";
import Event_2 from "../../assets/images/event-2.jpg";
import Event_3 from "../../assets/images/event-3.PNG";
import Event_4 from "../../assets/images/event-4.png";
import Event_5 from "../../assets/images/event-5.png";
import UpcomingEvent from "../../assets/images/Upcoming_Event.png";

//  Instantiate the EventItem(s) here
const spotlightCards = [
  {
    image: Event_1,
    alternative: "Start of DLSU DSC",
    headLine: "Birth of DLSU DSC",
    text:
      "Here throughout, DLSU DSC solidified from its founders. Rekindling the passion for self-driven developers.",
  },
  {
    image: Event_2,
    alternative: "First General Meeting",
    headLine: "First General Meeting",
    text:
      "Getting to know your colleagues and this student organization's goals and future events! Meet you there!",
  },
  {
    image: Event_3,
    alternative: "Engineering Committee Meeting",
    headLine: "Engineering Committee Meeting",
    text:
      "Brainstorming events and opportunities for members under the Engineering Team.",
  },
  {
    image: Event_4,
    alternative: "#GCPinas",
    headLine: "#GCPinas",
    text:
      "Introduction to Google's Cloud Computing Platform, GCP. Understand how Cloud Computing works for free!",
  },
  {
    image: Event_5,
    alternative: "Solution Challenge 2021",
    headLine: "Solution Challenge 2021",
    text:
      "Embarking qualified members to craft a sustainable solution for the incoming Google's Solution Challenge 2021.",
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

const renderSpotlightCards = spotlightCards.map((item) => {
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

const renderEventItem = eventCard.map((item) => {
  return (
    <div>
      <EventItem
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

const SectionUpcomingEvents = (props) => {
  return (
    <section className="sectionDivision" id={props.id}>
      <div className={styles.Spotlight}>
        <h1 className={`header__light ${styles.Spotlight_headerLine}`}>
          ORGANIZATION SPOTLIGHT
        </h1>
        <div className={styles.Spotlight_carousel}>
          <div>
            <OwlCarousel
              stagePadding={50}
              items={Math.floor($(window).width() / 300)}
              margin={30}
            >
              {renderSpotlightCards}
            </OwlCarousel>
          </div>
        </div>
      </div>
      <div className={`${styles.upcomingEvent} sectionFormat`}>
        <h1 className="header__medium">Upcoming Event</h1>
        {renderEventItem}
      </div>
    </section>
  );
};

export default SectionUpcomingEvents;
