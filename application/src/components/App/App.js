import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Hero from "../Hero/Hero";
import Navigation from "../Navigation/Navigation";
import SectionAboutUs from "../SectionAboutUs/SectionAboutUs";
import SectionMemberRegistration from "../SectionMemberRegistration/SectionMemberRegistration";
import SectionMembers from "../SectionMembers/SectionMembers";
import SectionTechnologyStack from "../SectionTechnologyStack/SectionTechnologyStack";
import SectionUpcomingEvents from "../SectionUpcomingEvents/SectionUpcomingEvents";
import Footer from "../Footer/Footer";
import styles from "./App.module.css";
import "./App.css";

/*  TODO
 *    > Default word while Word Carousel is loading
 *    > Colored Text. Color palette uses Google colors
 *    > Standardized socialMediaBaubles render
 */

//  Social Media Links
const socialMediaBaubles = [
  { referenceLink: "#", ionicon: "logo-twitter", itemHoverColor: "#1da1f2" },
  { referenceLink: "#", ionicon: "logo-discord", itemHoverColor: "#7289da" },
  { referenceLink: "#", ionicon: "logo-linkedin", itemHoverColor: "#0a66c2" },
  { referenceLink: "#", ionicon: "logo-github", itemHoverColor: "#24292d" },
  { referenceLink: "#", ionicon: "mail-outline", itemHoverColor: "#ea4335" },
];

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Route path="/" exact>
          <header className={styles.hero} id="hero">
            <Hero socialMediaBaubles={socialMediaBaubles} />
          </header>
          <SectionUpcomingEvents id="sectionUpcomingEvents" />
          <SectionAboutUs id="sectionAboutUs" />
          <SectionTechnologyStack />
        </Route>
        <Route path="/recruitment" exact>
          <SectionMembers />
          <SectionMemberRegistration />
        </Route>
        <Footer socialMediaBaubles={socialMediaBaubles} />
      </BrowserRouter>
    );
  }
}

export default App;
