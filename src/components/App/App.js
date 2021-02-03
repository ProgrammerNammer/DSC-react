import React from "react";
import Hero from "../Hero/Hero";
import Navigation from "../Navigation/Navigation";
import "./Normalize.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <body>
        <header className="hero">
          <Navigation />
          <Hero />
        </header>
        <section>Sample</section>
      </body>
    );
  }
}

export default App;
