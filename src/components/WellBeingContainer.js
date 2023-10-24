import { useMemo } from "react";
import "./WellBeingContainer.css";

const WellBeingContainer = ({
  enhanceWellBeing,
  ourMissionIsToElevateYour,
  personalizedHealthGuidanc,
  adviceAndEasyAccessToHeal,
  group,
  propLeft,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="rectangle-parent1" style={groupDivStyle}>
      <div className="group-child2" />
      <div className="enhance-well-being-parent">
        <div className="enhance-well-being">{enhanceWellBeing}</div>
        <div className="our-mission-is-container">
          <p className="our-mission-is">{ourMissionIsToElevateYour}</p>
          <p className="our-mission-is">{personalizedHealthGuidanc}</p>
          <p className="our-mission-is">{adviceAndEasyAccessToHeal}</p>
        </div>
        <div className="group-child3" />
        <img className="group-icon" alt="" src={group} />
      </div>
    </div>
  );
};

export default WellBeingContainer;
