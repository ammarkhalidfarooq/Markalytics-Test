import WellBeingContainer from "./WellBeingContainer";
import "./SectionCard.css";

const SectionCard = () => {
  return (
    <section className="group-parent">
      <div className="core-objectives-parent">
        <h1 className="core-objectives">Core Objectives</h1>
        <div className="at-the-heart-container">
          <p className="at-the-heart">{`At the heart of our joint venture lies a commitment `}</p>
          <p className="at-the-heart">{`to transform lives by providing holistic healthcare `}</p>
          <p className="at-the-heart">{`and nutrition solutions via our cutting-edge online `}</p>
          <p className="at-the-heart">platform.</p>
        </div>
      </div>
      <div className="ellipse-parent">
        <div className="ellipse-div" />
        <h2 className="get-ready-to-container">
          <p className="at-the-heart">{`Get ready to embark on a journey `}</p>
          <p className="at-the-heart">that places your well-being at the</p>
          <p className="at-the-heart">forefront of everything we do.</p>
        </h2>
        <img className="group-child4" alt="" src="/vector-14.svg" />
      </div>
      <WellBeingContainer
        enhanceWellBeing="Enhance Well-being"
        ourMissionIsToElevateYour="Our mission is to elevate your quality of life through "
        personalizedHealthGuidanc="personalized health guidance, expert nutritional "
        adviceAndEasyAccessToHeal="advice, and easy access to healthcare professionals."
        group="/group.svg"
      />
      <WellBeingContainer
        enhanceWellBeing="Promote Healthy Lifestyle"
        ourMissionIsToElevateYour=" We're dedicated to inspiring healthier choices by "
        personalizedHealthGuidanc="offering a platform that integrates medical expertise,"
        adviceAndEasyAccessToHeal="nutritional insights, and wellness practices."
        group="/group.svg"
        propLeft="0px"
      />
    </section>
  );
};

export default SectionCard;
