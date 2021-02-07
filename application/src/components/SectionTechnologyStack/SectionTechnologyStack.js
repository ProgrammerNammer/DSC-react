import React from "react";
import Blob from "../Blob/Blob";

class SectionAboutUs extends React.Component {
  render() {
    return (
      <section>
        <h1> Developer Technologies Fostered </h1>
        <Blob title="Website Design" backgroundColor="#4285f4" />
        <Blob title="AI & Machine Learning" backgroundColor="#ea4335" />
        <Blob title="Developer Well-Roundedness" backgroundColor="#fbbc05" />
      </section>
    );
  }
}

export default SectionAboutUs;
