import React from "react";
import StatementCard from "../StatementCard/StatementCard";
import AboutUs from "../../assets/images/event-1.jpg";
import styles from "./SectionAboutUs.module.css";
import "./SectionAboutUs.css";

const statementCards = [
  {
    ionicon: "star",
    header: "Mission",
    text:
      "Aim to empower students to utilize Google’s technologies in working together to develop solutions that address the concerns of local communities and will be able to enhance the students’ personal and professional network in the field of technology.",
  },
  {
    ionicon: "airplane",
    header: "Vision",
    text:
      "We envision Lasallian students to grow as developers for the community. As such, these Lasallian developers to grow to be self-sufficient and effective community leaders that are able share their knowledge with oncoming benefactors and alike.",
  },
  {
    ionicon: "medal",
    header: "Goal",
    text:
      "DLSU DSC Taft aims to empower students to be community-driven developers and improve the quality of developers' community foundation.",
  },
];

class SectionAboutUs extends React.Component {
  renderStatementCards = (isLeft) => {
    return statementCards.map((item) => {
      return (
        <div className={styles.statementCard}>
          <StatementCard
            ionicon={item.ionicon}
            header={item.header}
            text={item.text}
            isLeft={(isLeft = !isLeft)}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <section className="sectionContainer" id={this.props.id}>
        <div className={styles.sectionAboutUs}>
          <div>
            <h1 className="header__light">About Us</h1>
            <h1 className="header__heavy">
              <span className="bookmark__red">&#124;</span>Who We Are
            </h1>
            <p>
              Developer Student Club Taft is a community of students in De La
              Salle University – Manila which focuses on building technological
              solutions for the development of different communities. This
              Google program aims to help students learn web development, mobile
              development and other emerging technologies thereby implementing
              these technologies to solve real-world community problems.
            </p>
          </div>
          <div className={styles.sectionAboutUs_column} />
          <div className={styles.sectionAboutUs_image}>
            <img src={AboutUs} alt="DLSU DSC" />
          </div>
        </div>
        <div className={styles.sectionAboutUsStatements}>
          {this.renderStatementCards(true)}
        </div>
      </section>
    );
  }
}

export default SectionAboutUs;
