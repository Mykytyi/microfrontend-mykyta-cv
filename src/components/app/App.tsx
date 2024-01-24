import { useContext, useEffect, useState } from 'react';
import WelcomePage from '../welcomePage/WelcomePage';
import IntroInformation from '../IntroInformation/IntroInformation';
import Portfolio from '../portfolio/Portfolio';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import InfoPanel from '../common/infoPanel/InfoPanel';
import LoadingPage from '../loadingPage/LoadingPage';
import { AppContext } from '../../context/app';

import './App.css';

const loadingPageTime = 4000;

function App() {
  const [isAnimated, setIsAnimated] = useState(true);
  const messages = useContext(AppContext).state.messages;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(false);
    }, loadingPageTime);
    return () => clearTimeout(timer);
  }, []);

  if (isAnimated) {
    return <LoadingPage timeForLoadingPage={loadingPageTime} />;
  }

  return (
    <div className="App Shown">
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
