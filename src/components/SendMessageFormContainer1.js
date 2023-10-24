import "./SendMessageFormContainer1.css";

const SendMessageFormContainer1 = () => {
  return (
    <div className="send-message-parent">
      <h2 className="send-message">Send Message</h2>
      <div className="name-parent">
        <input placeholder="Name" className="name" />
        <div className="line-div" />
      </div>
      <div className="email-parent">
        <input placeholder="Email" className="name" />
        <div className="group-child18" />
      </div>
      <div className="contact-parent">
        <input placeholder="Contact #" className="name" />
        <div className="group-child18" />
      </div>
      <div className="type-your-message-parent">
        <input placeholder="Type Your Message" className="name" />
        <div className="group-child20" />
      </div>
      <button className="rectangle-parent9">
        <div className="group-child21" />
        <div className="send">Send</div>
      </button>
    </div>
  );
};

export default SendMessageFormContainer1;
