import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Close from '../../../pics/Close.png';
import Arrow from '../../../pics/Arrow.png';
import { ISlides } from '../../../type-definitions';

import './ModalWindow.css';
import { imageParser } from '../../../helpers/imageParser';

type Props = {
  slides: ISlides;
  setSlides: Dispatch<SetStateAction<ISlides>>;
}

const forwardAnim = ['AnimationOneTwo', 'AnimationTwoThree', 'AnimationThreeOne'];
const backwardAnim = ['AnimationOneThree', 'AnimationTwoOne', 'AnimationThreeTwo'];

const ModalWindow = ({ slides, setSlides }: Props) => {
  const [ controlledSlide, setControlledSlide ] = useState(slides);
  const [slideNumber, setSlideNumber] = useState<number | null>(null);
  const [animated, setAnimated] = useState<null | 'previous' | 'secondary'>(null);


  useEffect(() => {
    if (slides) {
      setControlledSlide(slides);
    }
  }, [slides]);

  const slideHandler = (slide: 'previous' | 'secondary') => {
    setAnimated(slide);

    if (!slideNumber && slideNumber !== 0) {
      setSlideNumber(0);
      return;
    }

    if (animated && slide !== animated) {
      if (slide === 'previous') {
        if (slideNumber === 2) {
          return setSlideNumber(0);
        } else {
          return setSlideNumber(slideNumber + 1);
        }
      } else if (slide === 'secondary') {
        if (slideNumber === 0) {
          return setSlideNumber(2);
        } else {
          return setSlideNumber(slideNumber - 1);
        }
      }
    }

    if (slide === 'previous') {
      if (slideNumber === 0) {
        return setSlideNumber(2);
      } else {
        return setSlideNumber(slideNumber - 1);
      }
    } else if (slide === 'secondary') {
      if (slideNumber === 2) {
        return setSlideNumber(0);
      } else {
        return setSlideNumber(slideNumber + 1);
      }
    }
  };

  const contentWrapperHandler = (contentNum: 0 | 1 | 2) => {
    if (!animated || slideNumber === null) {
      return '';
    }

    if (animated === 'secondary') {
      return forwardAnim[(slideNumber + contentNum) % 3];
    } else if (animated === 'previous') {
      return backwardAnim[(slideNumber + contentNum) % 3]
    }

    return '';
  };

  const handleClose = () => {
    setTimeout(() => {
      setSlideNumber(null);
      setAnimated(null);
    }, 1000);
    setSlides(null);
  }

  return (
    <div className={`ModalWindow ${slides && 'Shown'}`}>
      <div className="ModalContent">
        <div className={`ContentWrapper First ${contentWrapperHandler(0)}`}>
          <img src={imageParser(controlledSlide, 1)} />
        </div>
        <div className={`ContentWrapper Second ${contentWrapperHandler(1)}`}>
          <img src={imageParser(controlledSlide, 2)} />
        </div>
        <div className={`ContentWrapper Third ${contentWrapperHandler(2)}`}>
          <img src={imageParser(controlledSlide, 3)} />
        </div>
        <div className="Buttons">
          <div className="ArrowLeft">
            <img src={Arrow} onClick={() => slideHandler('previous')} />
          </div>
          <div className="ArrowRight">
            <img src={Arrow} onClick={() => slideHandler('secondary')} />
          </div>
          <div className="CloseButton" onClick={handleClose}>
            <img src={Close} />
          </div>
        </div>
        <div className="SliderButtons">
          <span className="FirstButton"/>
          <span className="SecondButton"/>
          <span className="ThirdButton"/>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ModalWindow);
