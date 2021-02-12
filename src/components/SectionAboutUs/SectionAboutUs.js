import React from "react";
import StatementCard from "../StatementCard/StatementCard";
import AboutUs from "../../assets/images/event-1.jpg";
import "./SectionAboutUs.css";

class SectionAboutUs extends React.Component {
  render() {
    let isLeft = false;

    return (
      <section className="section-container section-about-us">
        <div className="section-about-us__about">
          <div>
            <h1>About Us</h1>
            <p style={{ textAlign: "justify" }}>
              Developer Student Club Taft is a community of students in De La
              Salle University – Manila which focuses on building technological
              solutions for the development of different communities. This
              Google program aims to help students learn web development, mobile
              development and other emerging technologies thereby implementing
              these technologies to solve real-world community problems.
            </p>
          </div>
          <div className="column" />
          <div className="section-about-us__img">
            <img src={AboutUs} alt="DLSU DSC" />
          </div>
        </div>
        <div className="section-container__statement-list">
          <div className="statement-list__statement-card">
            <StatementCard
              ionicon="star-outline"
              header="Mission"
              text="Aim to empower students to utilize Google’s technologies in working together to developsolutions to address the concerns of local communities and will be able to enhance the students’ personal and professional network in the field of technology."
              sideRendered={!isLeft}
            />
          </div>
          <div className="statement-list__statement-card">
            <StatementCard
              ionicon="eye-outline"
              header="Vision"
              text="We envision Lasallian students to grow as developers for the community."
              sideRendered={!isLeft}
            />
          </div>
          <div className="statement-list__statement-card">
            <StatementCard
              ionicon="people"
              header="Goal"
              text="Aims to empower students to be community-driven developers."
              sideRendered={!isLeft}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default SectionAboutUs;
