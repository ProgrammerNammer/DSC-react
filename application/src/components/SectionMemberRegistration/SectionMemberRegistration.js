import React from "react";
import styles from "./SectionMemberRegistration.module.css";

const SectionMemberRegistration = () => {
  return (
    <section className={styles.SectionMemberRegistration} id="BecomeAMember">
      <h1 className="header__medium">Come aboard! 🚀</h1>
      <p>You've already reached this far. Might as well commit to it.</p>
      <div className={styles.SectionMemberRegistration_GoogleForm}>
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
    </section>
  );
};

export default SectionMemberRegistration;
