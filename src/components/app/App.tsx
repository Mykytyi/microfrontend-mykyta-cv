import { useContext } from 'react';
import Alert from '@mui/material/Alert';
import WelcomePage from '../welcomePage/WelcomePage';
import IntroInformation from '../IntroInformation/IntroInformation';
import Portfolio from '../portfolio/Portfolio';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import { AppContext } from '../../context/app';

import './App.css';

function App() {
  const messages = useContext(AppContext).state.messages;
  console.log('MESSAGES: ', messages);
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
      <div className="AlertContainer Animated BackInRight">
        <Alert severity="error">This is a success alert — check it out!</Alert>
      </div>
    </div>
  );
}

export default App;
