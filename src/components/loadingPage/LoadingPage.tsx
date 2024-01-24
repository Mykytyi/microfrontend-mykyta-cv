import { useEffect, useState } from 'react';
import LinearProgressBar from './linearProgressBar/LinearProgressBar';

import './LoadingPage.css'

import logo from '../../logo-512x512.png';

interface LoadingPageProps {
  timeForLoadingPage: number;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ timeForLoadingPage }) => {
  const [percent, setPercent] = useState(0);
  const canvas = document.getElementById('canvasAnim');

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prevPercent) => {
        if (prevPercent < 100) {
          return prevPercent + 25;
        }
        return prevPercent;
      });
    }, (timeForLoadingPage - 2000) / 5);
    return () => clearInterval(timer);
  }, [percent, timeForLoadingPage]);

  useEffect(() => {
    if (canvas) {
      canvas.className = 'DisabledCanvas';
    }
    return () => {
      if (canvas) {
        canvas.className = '';
      }
    }
  }, [canvas]);

  return (
    <div className={`LoadingPage ${percent === 100 ? 'DisappearingAnimation' : 'AppearingAnimation'}`}>
      <div className="MainContent">
        <div className="CenteredContainer">
          <img alt="Mykyta" src={logo} className="M_Picture" />
          <p className="Text">Mykyta is thinking</p>
        </div>
        <LinearProgressBar percent={percent} animateTiming={100} />
      </div>
    </div>
  );
}

export default LoadingPage;
