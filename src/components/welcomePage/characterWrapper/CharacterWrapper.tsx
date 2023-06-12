import { FC, useState, useEffect } from 'react';
import { animationHandler } from '../../../helpers/animations';

import logo from '../../../logo-512x512.png';

import './CharacterWrapper.css';

type Props = {
  char: string;
  num: number;
  isAnimated: boolean;
  newLines?: Array<number>;
  withSVG?: boolean;
}

const CharacterWrapper: FC<Props> = ({
  char ,
  num,
  isAnimated,
  newLines,
  withSVG,
}) => {
  const [classArray, setClassArray] = useState(['']);
  const [charLogoClass, setCharLogoClass] = useState(['Char-logo']);

  useEffect(() => {
    if (isAnimated) {
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
    }
  }, [isAnimated]);

  if (newLines?.includes(num)) {
    return <br/>;
  }
  if (char === ' ') {
    return <>&nbsp;</>;
  }
  if (char === 'M' && withSVG) {
    return <img alt="Mykyta" src={logo} className={charLogoClass.join(' ')}/>;
  }
  return <span
    className={`InitialCharacter ${classArray.join(' ')}`}
    onMouseOver={animationHandler(setClassArray)}
  >{char}</span>;
}
export default CharacterWrapper;
