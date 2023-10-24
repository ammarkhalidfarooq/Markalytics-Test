import SectionForm1 from "../components/SectionForm1";
import SectionCard from "../components/SectionCard";
import SectionCard2 from "../components/SectionCard2";
import AboutSection from "../components/AboutSection";
import SectionCard3 from "../components/SectionCard3";
import SectionCard1 from "../components/SectionCard1";
import SendMessageFormContainer1 from "../components/SendMessageFormContainer1";
import "./SehatZindagiCollaborationWi.css";

const SehatZindagiCollaborationWi = () => {
  return (
    <div className="sehat-zindagi-collaboration-wi">
      <section className="sehat-zindagi-collaboration-wi-child" />
      <section className="sehat-zindagi-collaboration-wi-item" />
      <button className="rectangle-parent">
        <div className="group-child" />
        <div className="quick-consultation">QUICK CONSULTATION</div>
      </button>
      <h1 className="your-path-to-container">
        <p className="your-path-to">{`Your Path to Wellness `}</p>
        <p className="your-path-to">Starts Here!</p>
      </h1>
      <h2 className="embrace-a-vibrant">
        Embrace a vibrant and healthy life with us!
      </h2>
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
      <SectionForm1 />
      <div className="contact-us-parent">
        <div className="contact-us">CONTACT US</div>
        <div className="about-us">ABOUT US</div>
        <div className="home-parent">
          <div className="home">HOME</div>
          <div className="group-item" />
        </div>
      </div>
      <SectionCard />
      <SectionCard2 />
      <AboutSection />
      <h2 className="join-us-in-container">
        <p className="your-path-to">{`Join Us in Redefining Healthcare `}</p>
        <p className="your-path-to">{`with Sehat Zindagi x Nutradvice `}</p>
        <p className="your-path-to">Collaboration</p>
      </h2>
      <div className="together-sehat-zindagi">
        Together, Sehat Zindagi and Nutradvice are on a mission to revolutionize
        healthcare in Pakistan. We're committed to ensuring that every
        individual in the nation has access to top-tier healthcare and expert
        nutritional guidance. Join us in our collective effort to redefine
        well-being in Pakistan.
      </div>
      <SectionCard3 />
      <SectionCard1 />
      <SendMessageFormContainer1 />
      <div className="vector-parent">
        <img className="vector-icon" alt="" src="/vector.svg" />
        <h2 className="address">Address</h2>
      </div>
      <div className="vector-group">
        <img className="vector-icon1" alt="" src="/vector1.svg" />
        <h2 className="address">Mail</h2>
      </div>
      <div className="vector-container">
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <div className="div">+923084282001</div>
      </div>
      <button className="rectangle-group">
        <div className="group-inner" />
        <div className="get-started">GET STARTED</div>
      </button>
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
