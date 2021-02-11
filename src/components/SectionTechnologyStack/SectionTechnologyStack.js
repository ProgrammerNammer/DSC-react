import React from "react";

//  Importing Logos
import GitHubLogo from "../../assets/images/github-svgrepo-com.svg";

const websiteDesignTechnologies = [
  { image: GitHubLogo, alternative: "Github" },
];

class SectionAboutUs extends React.Component {
  render() {
    return (
      <section>
        <h1> Developer Technologies Fostered </h1>
      </section>
    );
  }
}

export default SectionAboutUs;
