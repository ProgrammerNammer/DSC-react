import React from "react";
import Hero from "../Hero/Hero";
import Navigation from "../Navigation/Navigation";
import SectionAboutUs from "../SectionAboutUs/SectionAboutUs";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="hero">
          <Navigation />
          <Hero />
        </header>
        <SectionAboutUs />
      </div>
    );
  }
}

export default App;
