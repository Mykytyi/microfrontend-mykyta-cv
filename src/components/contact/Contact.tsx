import ContactForm from './contactForm/ContactForm';
import Map from '../../pics/MAP.png';

import './Contact.css';

const Contact = () => {
  return (
    <div className="Contact" id="contactMe">
      <div className="FormContainer">
        <div className="TextDetails">
          <h2 className="H2Lables">Contact</h2>
          <p className="PLabels">
            I’m interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
          </p>
        </div>
        <ContactForm/>
      </div>

      <div className="MapContainer">
        <div className="LocationDetails">
          <p>
            Mykyta Cherevatyi,
            <br/>
            St. Progresyvna 3,
            <br/>
            Dnirpo 49098, Ukraine
          </p>

          <br/>

          <p><span className="Captcha">@</span>: cherevaty.nik@gmail.com</p>
        </div>
        <div className="Wrapper">
          <img alt="Map" src={Map}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
