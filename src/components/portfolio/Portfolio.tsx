import { useEffect, useState } from 'react';
import CharacterWrapper from '../welcomePage/characterWrapper/CharacterWrapper';
import { animationListener } from '../../helpers/animations';

import LendironLogo from '../../pics/Lendiron/LendironLogo.png';
import MainBoat from '../../pics/Lendiron/MainBoat.jpg';
import Graphs from '../../pics/Lendiron/Graphs.jpg';
import BoatAndSensors from '../../pics/Lendiron/Boat&Sensors.jpg';

import A1Logo from '../../pics/A1/A1Logo.png';
import A1Site from '../../pics/A1/A1Site.png';
import Portal from '../../pics/A1/Portal.png';
import Storybook from '../../pics/A1/Storybook.png';

import GoodlikeLogo from '../../pics/Goodlike/GoodLikeLogo.svg';
import GoodLikeLanding from '../../pics/Goodlike/GoodLikeLanding.png';
import AdminPanelOne from '../../pics/Goodlike/AdminPanelOne.png';
import AdminPanelTwo from '../../pics/Goodlike/AdminPanelTwo.png';

import './Portfolio.css';

const Portfolio = () => {
  const [animated, setAnimated] = useState(false);
  const introText = 'My Portfolio'.split('');

  useEffect(animationListener(setAnimated, 'Portfolio'), [animated]);

  return (
    <div className="Portfolio" id="Portfolio">
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
          <div className="Wrapper">
            <span className="ImageWrapper MainPicture">

              <img alt="Picture of a site with 3d model of a boat" src={MainBoat}/>

              <button className="Button ViewMoreButton">View<br/>more</button>

              <span className="AdditionalImage SecondPicture">
                <img alt="Graphs" src={Graphs}/>
              </span>
              <span className="AdditionalImage ThirdPicture">
                <img alt="Boat and sensors" src={BoatAndSensors}/>
              </span>

            </span>
          </div>
        </div>

      </div>

      <div className="Project A1Block">
        <div className="Slides">
          <div className="Wrapper">
            <span className="ImageWrapper MainPicture">

              <img alt="The site of the A1 company" src={A1Site}/>

              <button className="Button ViewMoreButton">View<br/>more</button>

              <span className="AdditionalImage SecondPicture">
                <img alt="List of applications" src={Portal}/>
              </span>
              <span className="AdditionalImage ThirdPicture">
                <img alt="Site with a react component library" src={Storybook}/>
              </span>

            </span>
          </div>
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
          <div className="Wrapper">
            <span className="ImageWrapper MainPicture">

              <img alt="Landing page of a hosting site" src={GoodLikeLanding}/>

              <button className="Button ViewMoreButton">View<br/>more</button>

              <span className="AdditionalImage SecondPicture">
                <img alt="Picture of an admin panel on the hosting site" src={AdminPanelOne}/>
              </span>
              <span className="AdditionalImage ThirdPicture">
                <img alt="Second picture of an admin panel on the hosting site" src={AdminPanelTwo}/>
              </span>

            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
