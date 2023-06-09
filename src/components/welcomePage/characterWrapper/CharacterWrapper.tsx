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
    if (row === 1) {
      setTimeout(() => {
        setClassArray(['Char', 'animated', 'rubberBand']);
      }, (num + 1) * 75);
      setTimeout(() => {
        setClassArray(['Char']);
      }, (num + 1) * row + 2075);
    } else if (row === 2) {
      setTimeout(() => {
        setClassArray(['Char', 'animated', 'rubberBand']);
      }, ((num + 1) * 75 + 750));
      setTimeout(() => {
        setClassArray(['Char']);
      }, (num + 1) * row + 2750);
    } else if (row === 3) {
      setTimeout(() => {
        setClassArray(['Char', 'animated', 'rubberBand']);
      }, ((num + 1) * 75 + 1500));
      setTimeout(() => {
        setClassArray(['Char']);
      }, (num + 1) * row + 3500);
    }
    if (char === 'M') {
      setTimeout(() => {
        setCharLogoClass(['Char-logo', 'CharLogoAnimated']);
      }, ((num + 1) * 75 + 800));
    }
  }, []);

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
    return <img alt="Mykyta" src={logo} className={charLogoClass.join(' ')}/>;
  }
  return <span
    className={`InitialCharacter ${classArray.join(' ')}`}
    onMouseOver={animationHandler}
  >{char}</span>;
}
export default CharacterWrapper;
