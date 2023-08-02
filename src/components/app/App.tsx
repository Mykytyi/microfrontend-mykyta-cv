import { useContext } from 'react';
import WelcomePage from '../welcomePage/WelcomePage';
import IntroInformation from '../IntroInformation/IntroInformation';
import Portfolio from '../portfolio/Portfolio';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import InfoPanel from '../common/infoPanel/InfoPanel';
import { AppContext } from '../../context/app';

import './App.css';

function App() {
  const messages = useContext(AppContext).state.messages;

  return (
    <div className="App">
      <header>
        <span/>
      </header>

      <main>
        <WelcomePage/>
        <IntroInformation/>
        <Portfolio/>
        <Skills/>
        <Contact/>
      </main>

      <footer>
        <span/>
      </footer>
      <div className="MessagesContainer">
        {messages.map((message) => {
          return <InfoPanel message={message} />;
        })}
      </div>
    </div>
  );
}

export default App;
