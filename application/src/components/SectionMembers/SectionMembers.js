import React from "react";
import styles from "./SectionMembers.module.css";
import MemberAnnotations from "../MemberAnnotations/MemberAnnotations";
import MemberRequirementCard from "../MemberRequirementCard/MemberRequirementCard";

import Member_1 from "../../assets/images/Member_1.jpg";
import Member_2 from "../../assets/images/Member_2.jpg";
import Member_3 from "../../assets/images/Member_3.jpg";
import Qualifications_1 from "../../assets/images/Qualifications_1.jpg";
import Qualifications_2 from "../../assets/images/Qualifications_2.jpg";
import Qualifications_3 from "../../assets/images/Qualifications_3.jpg";
import Qualifications_4 from "../../assets/images/Qualifications_4.jpg";
import Qualifications_5 from "../../assets/images/Qualifications_5.jpg";
import Qualifications_6 from "../../assets/images/Qualifications_6.jpg";

//  MemberAnnotationCard
const memberAnnotationCards = [
  {
    annotation:
      "DLSU DSC has one of the most accommodating student organizations out there. I had the time of my life (as a developer) in discovering new technologies that I would have not otherwise known about, without the help of DLSU DSC.",
    portrait: Member_1,
    memberName: "Manolo Duncan",
    memberPosition: "Organization Member",
  },
  {
    annotation:
      "Having the responsibility of the organization's Engineering Committee Lead has lead me to realize the challenges it takes to be one. DLSU DSC has taught me how to become a better leader much more than I lead them - I hope to apply this in my career search.",
    portrait: Member_2,
    memberName: "Joana Silva",
    memberPosition: "Engineering Committee Lead",
  },
  {
    annotation:
      "I came to the right place when it comes to learning Artificial Intelligence. DLSU DSC's members are very acknowledgeable when it comes to introducing novices into trending technologies, such as Azure, Firebase, and many more relevant technologies.",
    portrait: Member_3,
    memberName: "Vincent Milton Chapman",
    memberPosition: "AI Committee",
  },
];

//  MemberAnnotationCard
const memberRequirementCards = [
  {
    title: "Technology Enthusiasts",
    description:
      "Our team shares the same passion for using technology as a means to solve community problems. Together, we value social impact by creating a culture among the mission-driven members.",
    image: Qualifications_1,
  },
  {
    title: "Committed to make things happen",
    description:
      "We are committed to bring about impact by working together and creatively thinking of ways to solve community problems in every step of the way.",
    image: Qualifications_2,
  },
  {
    title: "Driven",
    description:
      "Whether you're top-notch at what you do or still figuring things out, we value people who are hungry to learn more.",
    image: Qualifications_3,
  },
  {
    title: "Open to new experiences",
    description:
      'Asks "what-ifs" and willing to try it out and see what happens. After all, living a life full of wonder and a thirst for knowledge cultivates our skills.',
    image: Qualifications_4,
  },
  {
    title: "Playful & Positive",
    description:
      "A little bit of playfulness can inspire creativity and improve work. We're not all work here—we also like to have fun!",
    image: Qualifications_5,
  },
  {
    title: "Open to new things",
    description:
      "We're flexible with our committees. We believe that you can grow better if you're given enough freedom to explore the different facets of the org. Whether you want to pick design or developer work, you're always welcome to contribute to any project we're working on!",
    image: Qualifications_6,
  },
];

class SectionMembers extends React.Component {
  renderMemberRequirementCards = () => {
    return memberRequirementCards.map((item) => {
      return (
        <div className={styles.MemberRequirementCard}>
          <MemberRequirementCard
            title={item.title}
            description={item.description}
            image={item.image}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <section className="sectionDivision">
        <MemberAnnotations memberAnnotationCards={memberAnnotationCards} />
        <div
          className={`sectionFormat sectionDivision ${styles.SectionMembers}`}
        >
          <div className={styles.SectionMembers_header}>
            <h1 className="header__light">Become A Member</h1>
            <h1 className="header__heavy">We Are Looking For</h1>
          </div>
          <div className={styles.SectionMembers_memberRequirementsCards}>
            {this.renderMemberRequirementCards()}
          </div>
        </div>
      </section>
    );
  }
}

export default SectionMembers;
