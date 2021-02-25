import React from "react";
import styles from "./SectionMembers.module.css";
import MemberAnnotations from "../MemberAnnotations/MemberAnnotations";
import MemberRequirementCard from "../MemberRequirementCard/MemberRequirementCard";

import Event_1 from "../../assets/images/event-1.jpg";
import Member_1 from "../../assets/images/Member_1.jpg";
import Member_2 from "../../assets/images/Member_2.jpg";
import Member_3 from "../../assets/images/Member_3.jpg";
import Member_4 from "../../assets/images/Member_4.jpg";
import Member_5 from "../../assets/images/Member_5.jpg";
import Member_6 from "../../assets/images/Member_6.jpg";

//  MemberAnnotationCard
const memberAnnotationCards = [
  {
    annotation:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    portrait: Event_1,
    memberName: "Mark Burguillos",
    memberPosition: "Engineering Sublead",
  },
  {
    annotation:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    portrait: Event_1,
    memberName: "Mark Burguillos",
    memberPosition: "Engineering Sublead",
  },
  {
    annotation:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    portrait: Event_1,
    memberName: "Mark Burguillos",
    memberPosition: "Engineering Sublead",
  },
];

//  MemberAnnotationCard
const memberRequirementCards = [
  {
    title: "Technology Enthusiasts",
    description:
      "Our team shares the same passion for using technology as a means to solve community problems. Together, we value social impact by creating a culture among the mission-driven members.",
    image: Member_1,
  },
  {
    title: "Committed to make things happen",
    description:
      "We are committed to bring about impact by working together and creatively thinking of ways to solve community problems in every step of the way.",
    image: Member_2,
  },
  {
    title: "Driven",
    description:
      "Whether you're top-notch at what you do or still figuring things out, we value people who are hungry to learn more.",
    image: Member_3,
  },
  {
    title: "Open to new experiences",
    description:
      'Asks "what-ifs" and willing to try it out and see what happens. After all, living a life full of wonder and a thirst for knowledge cultivates our skills.',
    image: Member_4,
  },
  {
    title: "Playful & Positive",
    description:
      "A little bit of playfulness can inspire creativity and improve work. We're not all work here—we also like to have fun!",
    image: Member_5,
  },
  {
    title: "Open to new things",
    description:
      "We're flexible with our committees. We believe that you can grow better if you're given enough freedom to explore the different facets of the org. Whether you want to pick design or developer work, you're always welcome to contribute to any project we're working on!",
    image: Member_6,
  },
];

class SectionMembers extends React.Component {
  renderMemberRequirementCards = (isLeft) => {
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
        <div className={styles.SignUpForm} id="BecomeAMember">
          <h1 className="header__medium">Come aboard! 🚀</h1>
          <p>You've already reached this far. Might as well commit to it.</p>
          <div className={styles.SignUpForm_GoogleForm}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeb-CFVSzgAAVyYfFxBr8UZBLb67NjBtCGpEztC01traX0jfQ/viewform?embedded=true"
              width="640"
              height="1180"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionMembers;
