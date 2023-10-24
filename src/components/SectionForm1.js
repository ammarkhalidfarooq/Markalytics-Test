import "./SectionForm1.css";

const SectionForm1 = () => {
  return (
    <section className="group-section">
      <div className="group-child1" />
      <div className="bostel-llc-parent">
        <div className="bostel-llc">© 2019 sehat zindagi</div>
        <h1 className="request-more-informa">Request More Information</h1>
        <div className="bostel-technologies">
          Providing you and your family, a convenient and affordable primary
          care. Any time, Anywhere.
        </div>
        <button className="contact-us1">
          <div className="rectangle" />
          <div className="item1">Contact Us</div>
        </button>
      </div>
      <img className="line-icon" alt="" src="/line-2.svg" />
      <img className="sehat-logo-icon1" alt="" src="/sehatlogo1.svg" />
      <img className="social-icon" alt="" src="/social.svg" />
      <div className="team-parent">
        <div className="team">Services</div>
        <div className="case-studies">About us</div>
        <div className="publications">Quick Consultation</div>
      </div>
    </section>
  );
};

export default SectionForm1;
