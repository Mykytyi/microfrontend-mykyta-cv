import { useEffect, useState } from 'react';
import CharacterWrapper from './characterWrapper/CharacterWrapper';

import './WelcomePage.css';

const WelcomePage = () => {
  const [animationClass, setAnimationClass] = useState<string>('');
  const [animated, setAnimated] = useState(false);
  const introText = 'Hi there, I\'m Mykyta, web developer'.split('');
  const newLines = [10, 22];

  useEffect(() => {
    setAnimated(true);
    setAnimationClass('AppearanceAnimation');
  }, []);

  return (
    <div className={`WelcomePage ${animationClass}`}>
      <div className="Wrapper">
        <h1>
          {introText.map((char, index) => {
            return <CharacterWrapper
              key={index}
              char={char}
              num={(index + 1)}
              withSVG
              newLines={newLines}
              isAnimated={animated}
            />;
          })}
        </h1>
        <p className="FrontendDeveloper">
          Front End developer / React expert
        </p>
        <button className="Button"><a href="#contactMe">Contact me!</a></button>
      </div>

      <div className="AdditionalElements">
        <div className="wrapper">
          <span className="scroll-1">scroll down  &rarr;</span>
          <span className="scroll-2">scroll down  &rarr;</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
