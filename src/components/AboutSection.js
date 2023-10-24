import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="rectangle-parent4">
      <div className="group-child8" />
      <div className="rectangle-parent5">
        <div className="group-child9" />
        <div className="get-started1">GET STARTED</div>
      </div>
      <div className="about-collaborations">
        <p className="about">About</p>
        <p className="about">Collaborations</p>
      </div>
      <div className="at-nutradvice-and-container">
        <p className="about">{`At Nutradvice and Sehat Zindagi, our collaboration is driven by a shared vision – `}</p>
        <p className="about">
          a vision of empowering individuals like you to take charge of your
          health and well-being. We believe that by combining our expertise and
          resources, we can make a more significant impact on your journey to a
          healthier, happier life.
        </p>
      </div>
      <img className="rectangle-icon" alt="" src="/rectangle-2878@2x.png" />
    </div>
  );
};

export default AboutSection;
