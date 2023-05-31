import WelcomePage from '../welcomePage/WelcomePage';
import IntroInformation from '../IntroInformation/IntroInformation';
import Portfolio from '../portfolio/Portfolio';

import './App.css';

function App() {

  return (
    <div className="App">
      <header>
        <span/>
      </header>

      <main>
        <WelcomePage/>
        <IntroInformation/>
        <Portfolio/>
      </main>

      <footer>
        <span/>
      </footer>
    </div>
  );
}

export default App;
