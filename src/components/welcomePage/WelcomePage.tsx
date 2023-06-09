import { useEffect, useState } from 'react';
import CharacterWrapper from './characterWrapper/CharacterWrapper';

import './WelcomePage.css';

const WelcomePage = () => {
  const [animationClass, setAnimationClass] = useState<string>('');
  const firstRow = 'Hi there,'.split('');
  const secondRow = 'I\'m Mykyta,'.split('');
  const thirdRow = 'web developer'.split('');

  useEffect(() => {
    setAnimationClass('AppearanceAnimation');
  }, []);

  return (
    <div className={`WelcomePage ${animationClass}`}>
      <div className="Wrapper">
        <h1>
          {firstRow.map((char, index) => {
            return <CharacterWrapper char={char} num={index} row={1}/>;
          })}
          <br/>
          {secondRow.map((char, index) => {
            return <CharacterWrapper char={char} num={index} row={2}/>;
          })}
          <br/>
          {thirdRow.map((char, index) => {
            return <CharacterWrapper char={char} num={index} row={3}/>;
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
