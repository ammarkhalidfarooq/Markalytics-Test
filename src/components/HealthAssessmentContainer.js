import { useMemo } from "react";
import "./HealthAssessmentContainer.css";

const HealthAssessmentContainer = ({
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
    <div className="rectangle-parent9" style={groupDiv1Style}>
      <div className="group-child16" />
      <div className="our-collaboration-offers">
        {ourCollaborationOffersPer}
      </div>
      <div className="personalized-health-assessment-container">
        <p className="personalized">{personalized}</p>
        <p className="personalized">{healthAssessment}</p>
      </div>
    </div>
  );
};

export default HealthAssessmentContainer;
