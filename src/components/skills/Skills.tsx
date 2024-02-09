import { useEffect, useState } from 'react';
import SkillBar from './skillBar/SkillBar';
import CharacterWrapper from '../welcomePage/characterWrapper/CharacterWrapper';
import { animationListener } from '../../helpers/animations';

import './Skills.css';

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const introText = 'Skills'.split('');

  useEffect(animationListener(setAnimated, 'Skills'), [animated]);

  return (
    <div className="Skills" id="Skills">
      <div className="TextBlock">
        <div className="Wrapper">
          <h2 className="H2Lables">
            {introText.map((char, index) => {
              return <CharacterWrapper
                key={index}
                char={char}
                num={(index + 1)}
                isAnimated={animated}
              />;
            })}
          </h2>
          <p>
            Since beginning my journey as a web developer more than 5 years ago, I’ve done remote work for agencies,
            collaborated with talented people to create web products for both business and consumer use.
            <br/><br/>
            I create successful responsive websites that are fast, easy to use, and built with best practices. The main
            area of my expertise is front-end development, React, JS, HTML, CSS, building small and medium web apps,
            complex logic, custom plugins, features and animations.
            <br/><br/>
            I also have full-stack developer experience with popular open-source server environment Node.js
            <br/><br/>
            Visit my <a href="https://www.linkedin.com/in/mykyta-cherevatyi-b17b48182" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile for more
            details or just <a href="#contactMe">contact</a> me.
          </p>
        </div>
      </div>

      <div className="SkillsDetails">
        <div className="SkillBars">
          <ul className="SkillBarsList">
            <SkillBar bar="FE" progress={95} color="#2FB4FF"/>
            <SkillBar bar="RJ" progress={90} color="#BBF80D" experience={5}/>
            <SkillBar bar="BE" progress={85} color="#F018C0"/>
            <SkillBar bar="NJ" progress={80} color="#18F0BC" experience={2}/>
          </ul>
        </div>

        <div className="Jobs">
          <div className="Job JobOne">
            <h3>Full stack developer</h3>

            <p className="CompanyName">Lendiron</p>
            <span>2019-2021</span>

            <p>
              Lendiron is a Finnish financial technology software development company with headquarters in Helsinki,
              Finland.
            </p>
          </div>
          <div className="Job JobTwo">
            <h3>Full stack developer</h3>

            <p className="CompanyName">A1</p>
            <span>2021-2024</span>

            <p>
              A1 Telekom Austria Group is a provider of a range of fixed-line, broadband Internet, multimedia services,
              data, and IT systems, wholesale as well as mobile payment services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
