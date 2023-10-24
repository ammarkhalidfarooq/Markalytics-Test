import { useMemo } from "react";
import "./HealthcareContainer.css";

const HealthcareContainer = ({
  sehatZindagisHealthcareEx,
  medicalExpertise,
  propTop,
  propLeft,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="rectangle-parent10" style={groupDiv2Style}>
      <div className="group-child17" />
      <div className="sehat-zindagis-healthcare">
        {sehatZindagisHealthcareEx}
      </div>
      <div className="medical-expertise">{medicalExpertise}</div>
    </div>
  );
};

export default HealthcareContainer;
