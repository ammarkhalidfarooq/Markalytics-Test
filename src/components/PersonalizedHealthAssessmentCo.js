import { useMemo } from "react";
import "./PersonalizedHealthAssessmentCo.css";

const PersonalizedHealthAssessmentCo = ({
  ourCollaborationOffersPer,
  personalized,
  healthAssessment,
  propLeft,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="rectangle-parent7" style={groupDiv1Style}>
      <div className="group-child16" />
      <div className="our-collaboration-offers">
        {ourCollaborationOffersPer}
      </div>
      <h2 className="personalized-health-assessment-container">
        <p className="personalized">{personalized}</p>
        <p className="personalized">{healthAssessment}</p>
      </h2>
    </div>
  );
};

export default PersonalizedHealthAssessmentCo;
