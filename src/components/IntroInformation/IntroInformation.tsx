import Sphere from './sphere/Sphere';

import './IntroInformation.css';

const IntroInformation = () => {
  return (
    <div className="IntroInformation">
      <div className="TextBlock">
        <div className="Wrapper">
          <h2>Me, Myself and I</h2>
          <p>
            Welcome to my digital realm, where creativity and technology merge to shape captivating web development experiences.
            <br/><br/>
            Inspired by the idea of building a website for my family business, I embarked on a journey of continuous growth and innovation.
            <br/><br/>
            I have been working for companies and individuals for about five years and I had many opportunities to work in a vast spectrum of web technologies what let me gather a significant amount of various experience.
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
