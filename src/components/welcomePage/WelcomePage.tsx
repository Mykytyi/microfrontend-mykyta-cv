import CharacterWrapper from './characterWrapper/CharacterWrapper';

import './WelcomePage.css';

const WelcomePage = () => {
  const firstRow = 'Hi there,'.split('');
  const secondRow = 'I\'m Mykyta,'.split('');
  const thirdRow = 'web developer'.split('');

  return (
    <div className="WelcomePage">
      <div className="Wrapper">
        <h1>
          {firstRow.map((char) => {
            return <CharacterWrapper char={char}/>;
          })}
          <br/>
          {secondRow.map((char) => {
            return <CharacterWrapper char={char}/>;
          })}
          <br/>
          {thirdRow.map((char) => {
            return <CharacterWrapper char={char}/>;
          })}
        </h1>
        <p className="FrontendDeveloper">
          Front End developer / React expert
        </p>
        <button className="Button">Contact me!</button>
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
