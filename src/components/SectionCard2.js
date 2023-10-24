import "./SectionCard2.css";

const SectionCard2 = () => {
  return (
    <section className="group-container">
      <div className="vector-parent1">
        <img className="ellipse-icon" alt="" src="/ellipse-20.svg" />
        <img className="group-child5" alt="" src="/ellipse-19@2x.png" />
        <h1 className="mission-and-vision">Mission and Vision</h1>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child6" />
        <div className="our-mission-parent">
          <h2 className="our-mission">Our Mission</h2>
          <div className="we-aim-to-container">
            <p className="we-aim-to">{`We aim to provide personalized guidance that `}</p>
            <p className="we-aim-to">
              considers each person's unique needs, making high-
            </p>
            <p className="we-aim-to">{`quality healthcare and expert nutritional advice `}</p>
            <p className="we-aim-to">{`accessible to all. Our mission is built on the belief that `}</p>
            <p className="we-aim-to">{`by uniting these two vital pillars of health, we can `}</p>
            <p className="we-aim-to">
              empower individuals to lead healthier, happier lives.
            </p>
          </div>
        </div>
      </div>
      <div className="rectangle-parent2">
        <div className="group-child6" />
        <h2 className="our-vision">Our Vision</h2>
        <div className="we-envision-a-container">
          <p className="we-aim-to">{`We envision a world where individuals are not only informed `}</p>
          <p className="we-aim-to">{`but also inspired to make choices that promote their holistic `}</p>
          <p className="we-aim-to">{`health. Through continuous innovation and community `}</p>
          <p className="we-aim-to">{`support, we aspire to create a global movement where people `}</p>
          <p className="we-aim-to">{`take charge of their health, embrace vitality, and enjoy the `}</p>
          <p className="we-aim-to">
            benefits of a balanced and informed approach to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionCard2;
