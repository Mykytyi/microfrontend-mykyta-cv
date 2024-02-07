import { useEffect, useState } from 'react';
import CharacterWrapper from '../welcomePage/characterWrapper/CharacterWrapper';
import ContactForm from './contactForm/ContactForm';
import { animationListener } from '../../helpers/animations';
import Map from '../../pics/MAP.png';

import './Contact.css';

const Contact = () => {
  const [animated, setAnimated] = useState(false);
  const introText = 'Contact'.split('');

  useEffect(animationListener(setAnimated, 'contactMe'), [animated]);

  return (
    <div className="Contact" id="contactMe">
      <div className="FormContainer">
        <div className="TextDetails">
          <h2 className="H2Lables">
            {introText.map((char, index) => {
              return <CharacterWrapper key={index} char={char} num={(index + 1)} isAnimated={animated}/>;
            })}
          </h2>
          <p className="PLabels">
            I am interested in full-time employment with ambitious and large projects. However, if you have other request or question, don’t hesitate to use the form.
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

          <p><span className="LabelWrapper">Mail</span>: cherevaty.nik@gmail.com</p>
          <p><span className="LabelWrapper">Telegram</span>: <a href="https://t.me/mykyta_ch" target="_blank" rel="noopener noreferrer">@mykyta_ch</a></p>
          <p>
            <span className="LabelWrapper">Linkedin</span>
            :{' '}
            <a
              href="https://www.linkedin.com/in/mykyta-cherevatyi-b17b48182"
              target="_blank"
              rel="noopener noreferrer"
            >
              mykyta-cherevatyi
            </a>
          </p>
        </div>
        <div className="Wrapper">
          <img alt="Map" src={Map}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
