import { useEffect, useState } from 'react';
import Sphere from './sphere/Sphere';
import CharacterWrapper from '../welcomePage/characterWrapper/CharacterWrapper';
import { animationListener } from '../../helpers/animations';

import './IntroInformation.css';

const IntroInformation = () => {
  const [animated, setAnimated] = useState(false);
  const introText = 'Me, Myself and I'.split('');

  useEffect(animationListener(setAnimated, 'IntroInformation'), [animated]);

  return (
    <div className="IntroInformation" id="IntroInformation">
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
            Welcome to my digital realm, where creativity and technology merge to shape captivating web development experiences.
            <br/><br/>
            Inspired by the idea of building a website for my family business, I embarked on a journey of continuous growth and innovation.
            <br/><br/>
            I have been working for companies and individuals for about five years and I had many opportunities to work in a vast spectrum of web technologies what let me gather a significant amount of various experience.
            <br/><br/>
            A few words about my hobbies: I enjoy table tennis, find relaxation in gym workouts, and love cycling. They keep me fit, focused, and forever chasing new levels of strength and skill.
          </p>
        </div>
      </div>
      <div className="SphereBlock">
        <Sphere/>
      </div>
    </div>
  );
};

export default IntroInformation;
