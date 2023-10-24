import RequestMoreInformationForm1 from "../components/RequestMoreInformationForm1";
import CoreObjectivesContainer from "../components/CoreObjectivesContainer";
import MissionAndVisionContainer from "../components/MissionAndVisionContainer";
import AboutSection from "../components/AboutSection";
import LeadersAndExpertsContainer1 from "../components/LeadersAndExpertsContainer1";
import HealthAssessmentContainer1 from "../components/HealthAssessmentContainer1";
import MessageContainer from "../components/MessageContainer";
import "./SehatZindagiCollaborationWi.css";

const SehatZindagiCollaborationWi = () => {
  return (
    <div className="sehat-zindagi-collaboration-wi">
      <img
        className="sehat-zindagi-collaboration-wi-child"
        alt=""
        src="/rectangle-2882@2x.png"
      />
      <div className="sehat-zindagi-collaboration-wi-item" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="quick-consultation">QUICK CONSULTATION</div>
      </div>
      <div className="your-path-to-container">
        <p className="your-path-to">{`Your Path to Wellness `}</p>
        <p className="your-path-to">Starts Here!</p>
      </div>
      <div className="embrace-a-vibrant">
        Embrace a vibrant and healthy life with us!
      </div>
      <div className="sehat-zindagi-x">
        Sehat Zindagi x Nutradvice Collaboration
      </div>
      <div className="text">{`     `}</div>
      <div className="experience-a-holistic-container">
        <p className="your-path-to">{`Experience a holistic approach to health that combines personalized health `}</p>
        <p className="your-path-to">
          advice, expert nutritional guidance, and direct access to healthcare
          professionals.
        </p>
      </div>
      <img className="sehat-logo-icon" alt="" src="/sehatlogo.svg" />
      <RequestMoreInformationForm1 />
      <div className="contact-us-parent">
        <div className="contact-us">CONTACT US</div>
        <div className="about-us">ABOUT US</div>
        <div className="home-parent">
          <div className="home">HOME</div>
          <div className="group-item" />
        </div>
      </div>
      <CoreObjectivesContainer />
      <MissionAndVisionContainer />
      <AboutSection />
      <div className="join-us-in-container">
        <p className="your-path-to">{`Join Us in Redefining Healthcare `}</p>
        <p className="your-path-to">{`with Sehat Zindagi x Nutradvice `}</p>
        <p className="your-path-to">Collaboration</p>
      </div>
      <div className="together-sehat-zindagi">
        Together, Sehat Zindagi and Nutradvice are on a mission to revolutionize
        healthcare in Pakistan. We're committed to ensuring that every
        individual in the nation has access to top-tier healthcare and expert
        nutritional guidance. Join us in our collective effort to redefine
        well-being in Pakistan.
      </div>
      <LeadersAndExpertsContainer1 />
      <HealthAssessmentContainer1 />
      <MessageContainer />
      <div className="vector-parent">
        <img className="vector-icon" alt="" src="/vector.svg" />
        <div className="address">Address</div>
      </div>
      <div className="vector-group">
        <img className="vector-icon1" alt="" src="/vector1.svg" />
        <div className="address">Mail</div>
      </div>
      <div className="vector-container">
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <div className="address">+923084282001</div>
      </div>
      <div className="rectangle-group">
        <div className="group-inner" />
        <div className="get-started">GET STARTED</div>
      </div>
      <img className="xmlid-1-icon" alt="" src="/xmlid-1.svg" />
      <img className="xmlid-1-icon1" alt="" src="/xmlid-11.svg" />
      <div className="rectangle-container">
        <div className="rectangle-div" />
        <img
          className="doctor-with-stethoscope-hands-icon"
          alt=""
          src="/doctorwithstethoscopehandshospitalbackgroundremovebgpreview-1@2x.png"
        />
      </div>
      <img className="xmlid-1-icon2" alt="" src="/xmlid-12.svg" />
      <img className="xmlid-1-icon3" alt="" src="/xmlid-13.svg" />
    </div>
  );
};

export default SehatZindagiCollaborationWi;
