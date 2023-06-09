import { FC, useState, useEffect } from 'react';
import logo from '../../../logo-512x512.png';

import './CharacterWrapper.css';

type Props = {
  char: string;
  num: number;
  row: number;
}

const CharacterWrapper: FC<Props> = ({ char , num, row}) => {
  const [classArray, setClassArray] = useState(['']);
  const [charLogoClass, setCharLogoClass] = useState(['Char-logo']);

  useEffect(() => {
    setTimeout(() => {
      setClassArray(['Char', 'animated', 'rubberBand']);
    }, num * 75);
    setTimeout(() => {
      setClassArray(['Char']);
    }, num * 75 + 1000)
    if (char === 'M') {
      setTimeout(() => {
        setCharLogoClass(['Char-logo', 'CharLogoAnimated']);
      }, (num * 75));
    }
  }, []);

  const animationHandler = () => {
    setClassArray(['Char', 'animated', 'rubberBand']);
    setTimeout(() => {
      setClassArray(['Char']);
    }, 1000);
  }
  if (num === 10 || num === 22) {
    return <br/>;
  }
  if (char === ' ') {
    return <>&nbsp;</>;
  }
  if (char === 'M') {
    return <img alt="Mykyta" src={logo} className={charLogoClass.join(' ')}/>;
  }
  return <span
    className={`InitialCharacter ${classArray.join(' ')}`}
    onMouseOver={animationHandler}
  >{char}</span>;
}
export default CharacterWrapper;
