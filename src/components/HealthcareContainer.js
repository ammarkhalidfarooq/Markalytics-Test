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
    <div className="rectangle-parent8" style={groupDiv2Style}>
      <div className="group-child17" />
      <div className="sehat-zindagis-healthcare">
        {sehatZindagisHealthcareEx}
      </div>
      <h2 className="medical-expertise">{medicalExpertise}</h2>
    </div>
  );
};

export default HealthcareContainer;
