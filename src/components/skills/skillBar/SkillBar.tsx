import React from 'react';

import './SkillBar.css';

interface Props {
  bar: 'RJ' | 'NJ' | 'FE' | 'BE',
  progress: number,
  color: string,
}

const SkillBar: React.FC<Props> = ({bar, progress, color}) => {

  const skillBarClassParser = (prop: 'RJ' | 'NJ' | 'FE' | 'BE') => {
    if (prop === 'RJ') {
      return 'ReactJS';
    }
    if (prop === 'NJ') {
      return 'Node.js';
    }
    if (prop === 'FE') {
      return 'Front-end';
    }
    if (prop === 'BE') {
      return 'Back-end';
    }
  };

  return (
    <li className="SkillBarsItem">
      <p className="SkillBarName">{skillBarClassParser(bar)}</p>
      <div className="SkillBar">
        <span className="Fill" style={{width: `${progress}%`, backgroundColor: `${color}`}}/>
      </div>
    </li>
  );
};

export default SkillBar;
