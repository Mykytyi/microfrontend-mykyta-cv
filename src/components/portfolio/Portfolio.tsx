import { useEffect, useState } from 'react';
import CharacterWrapper from '../welcomePage/characterWrapper/CharacterWrapper';
import Slides from './slides/Slides';
import ModalWindow from './modalWindow/ModalWindow';
import { animationListener } from '../../helpers/animations';

import LendironLogo from '../../pics/Lendiron/LendironLogo.png';
import A1Logo from '../../pics/A1/A1Logo.png';
import GoodlikeLogo from '../../pics/Goodlike/GoodLikeLogo.svg';

import { ISlides } from '../../type-definitions';

import './Portfolio.css';

const Portfolio = () => {
  const [animated, setAnimated] = useState(false);
  const [slides, setSlides] = useState<ISlides>(null);
  const introText = 'My Portfolio'.split('');

  useEffect(animationListener(setAnimated, 'Portfolio'), [animated]);

  useEffect(() => {
    if (slides) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [slides]);

  return (
    <div className="Portfolio" id="Portfolio">
      <ModalWindow slides={slides} setSlides={setSlides} />
      <div className="TextBlock">
        <h2 className="H2Lables">
          {introText.map((char, index) => {
            return <CharacterWrapper key={index} char={char} num={(index + 1)} isAnimated={animated}/>;
          })}
        </h2>
        <p>
          A small gallery of recent projects chosen by me. I’ve done them all together with amazing people from companies around the globe.
        </p>
      </div>

      <div className="Project LendironBlock">

        <div className="ProjectDescription">
          <div className="Wrapper">
            <span className="CompanyLogo">
              <img alt="Lendiron logo" src={LendironLogo}/>
            </span>
            <p>
              Yacht portal with 3D model of the boat and displaying data from IoT on its decks.
              <br/><br/>
              <strong>Tools and Technologies:</strong> JavaScript, Typescript, React, Redux, Node.js, Express, MongoDB.
              <br/><br/>
              <strong>Responsibilities:</strong> Developed admin and client sides; design; implemented graphs; flexible tables; forms with validators etc.
            </p>
          </div>
        </div>

        <div className="Slides">
          <Slides setSlides={setSlides} slides={slides} typeOfSlides="Yacht" />
        </div>

      </div>

      <div className="Project A1Block">
        <div className="Slides">
          <Slides setSlides={setSlides} slides={slides} typeOfSlides="A1" />
        </div>

        <div className="ProjectDescription">
          <div className="Wrapper">
            <span className="CompanyLogo A1LogoWrapper">
              <img alt="A1 logo" src={A1Logo}/>
            </span>
            <p>
              The site of the largest telecommunications company in Austria, providing a wide range of services, from mobile Internet to IT systems.
              <br/>
              <br/>
              <strong>Tools and Technologies:</strong> JavaScript; Flow; Typescript; React; Redux; Node.js; Express; MySQL; Jenkins; Kubernetes.
              <br/>
              <br/>
              <strong>Responsibilities:</strong> Development; design; creating new components for a personal React component library and maintaining them; participating in estimation meetings; full app support from DEV to PROD; CI/CD maintenance.
            </p>
          </div>
        </div>
      </div>

      <div className="Project GoodlikeBlock">
        <div className="ProjectDescription">
          <div className="Wrapper">
            <span className="CompanyLogo GoodlikeLogoWrapper">
              <img alt="Goolike logo" src={GoodlikeLogo}/>
            </span>
            <p>
              Game Server Hosting where customer is able to rent high-performance servers for favorite multiplayer games. Get fast and reliable server rental for a smooth gaming experience
              <br/><br/>
              <strong>Tools and Technologies:</strong> JavaScript, Typescript, React, Redux.
              <br/><br/>
              <strong>Responsibilities:</strong> Development; communication with developers of third-party libraries; development and implementation of new design solutions.
            </p>
          </div>
        </div>

        <div className="Slides">
          <Slides setSlides={setSlides} slides={slides} typeOfSlides="Godlike" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
