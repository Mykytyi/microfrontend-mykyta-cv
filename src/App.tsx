import React from 'react';
import CharacterWrapper from './components/characterWrapper/CharacterWrapper';

import './App.css';

function App() {
  const firstRow = 'Hi there,'.split('');
  const secondRow = 'I\'m Mykyta,'.split('');
  const thirdRow = 'web developer'.split('');

  return (
    <div className="App">
      <footer>
        <span/>
      </footer>
      <main>
        <h1 className="FontWeightNormal">
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
        <p className="FrontendDeveloper FontWeightNormal">
          Front End Developer
        </p>
        <button className="Button">Contact me!</button>
      </main>
    </div>
  );
}

export default App;
