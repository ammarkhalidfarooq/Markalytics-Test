import PersonalizedHealthAssessmentCo from "./PersonalizedHealthAssessmentCo";
import HealthcareContainer from "./HealthcareContainer";
import "./SectionCard1.css";

const SectionCard1 = () => {
  return (
    <section className="group-parent3">
      <PersonalizedHealthAssessmentCo
        ourCollaborationOffersPer="Our collaboration offers personalized health assessments that consider your medical history, nutritional preferences, and lifestyle and serve as the foundation for tailored health and nutrition plans."
        personalized="Personalized "
        healthAssessment="Health Assessment"
      />
      <HealthcareContainer
        sehatZindagisHealthcareEx="Sehat Zindagi's healthcare expertise covers a wide range of medical concerns, from prevention to treatment. We are your virtual healthcare sanctuary, ensuring your health is in safe hands."
        medicalExpertise="Medical Expertise"
      />
      <div className="group-wrapper">
        <HealthcareContainer
          sehatZindagisHealthcareEx="Benefit from direct access to healthcare professionals and experienced nutritionists. Our collective expertise ensures you receive the highest quality guidance for your health and nutrition needs."
          medicalExpertise="Expert Guidance"
          propTop="0px"
          propLeft="0px"
        />
      </div>
      <PersonalizedHealthAssessmentCo
        ourCollaborationOffersPer="Engage with a thriving health-conscious community through online forums and live chats. Share experiences, ask questions, and find motivation and support on your health journey."
        personalized="Interactive "
        healthAssessment="Community"
        propLeft="839px"
      />
      <div className="why-sehat-zindagi-container">
        <p className="why">Why</p>
        <p className="sehat-zindagi">{`Sehat Zindagi `}</p>
        <p className="sehat-zindagi">x Nutradvice</p>
      </div>
    </section>
  );
};

export default SectionCard1;
