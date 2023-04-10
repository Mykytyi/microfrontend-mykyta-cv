import { FC, useState } from 'react';
import logo from '../../logo-512x512.png';

import './CharacterWrapper.css';

type Props = {
  char: string;
}

const CharacterWrapper: FC<Props> = ({ char }) => {
  const [classArray, setClassArray] = useState(['Char']);

  const animationHandler = () => {
    setClassArray(['Char', 'animated', 'rubberBand']);
    setTimeout(() => {
      setClassArray(['Char']);
    }, 1000);
  }

  if (char === ' ') {
    return <>&nbsp;</>;
  }
  if (char === 'M') {
    return <img alt="Mykyta" src={logo} width={73} height={75} className="Char-logo"/>;
  }
  return <span
    className={classArray.join(' ')}
    onMouseOver={animationHandler}
  >{char}</span>;
}
export default CharacterWrapper;
