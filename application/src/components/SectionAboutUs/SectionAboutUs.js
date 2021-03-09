import React from "react";
import StatementCard from "../StatementCard/StatementCard";
import AboutUs from "../../assets/images/event-1.jpg";
import styles from "./SectionAboutUs.module.css";

import BG from "../../assets/images/Qualifications_3.jpg";

const statementCards = [
  {
    header: "Vision",
    text:
      "DSC Taft envisions Lasallian students to grow as developers for the community.",
  },
  {
    header: "Mission",
    text:
      "DSC Taft aims to empower students to utilize Google’s technologies in working together to develop solutions to address the concerns of local communities and will be able to enhance the students’ personal and professional network in the field of technology.",
    isPrimary: true,
    backgroundImage: BG,
  },
  {
    header: "Goal",
    text:
      "DSC Taft aims to empower students to be community-driven developers.",
  },
];

const renderStatementCards = statementCards.map((item) => {
  return (
    <div className={styles.StatementCard}>
      <StatementCard
        ionicon={item.ionicon}
        header={item.header}
        text={item.text}
        isPrimary={item.isPrimary}
        backgroundImage={item.backgroundImage}
      />
    </div>
  );
});

const SectionAboutUs = (props) => {
  return (
    <section className="sectionFormat sectionDivision" id={props.id}>
      <div className={styles.SectionAboutUs}>
        <div>
          <h1 className="header__light">About Us</h1>
          <h1 className="header__heavy">
            <span className="bookmark__red">&#124;</span>Who We Are
          </h1>
          <p>
            Developer Student Club Taft is a community of students in De La
            Salle University – Manila which focuses on building technological
            solutions for the development of different communities. This Google
            program aims to help students learn web development, mobile
            development and other emerging technologies thereby implementing
            these technologies to solve real-world community problems.
          </p>
        </div>
        <div className={styles.SectionAboutUs_column} />
        <div className={styles.SectionAboutUs_image}>
          <img src={AboutUs} alt="DLSU DSC" />
        </div>
      </div>
      <div className={styles.SectionAboutUsStatements}>
        {renderStatementCards}
      </div>
    </section>
  );
};

export default SectionAboutUs;
