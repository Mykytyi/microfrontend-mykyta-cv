import { FC, Dispatch, SetStateAction } from 'react';
import { imageParser } from '../../../helpers/imageParser';

import { ISlides } from '../../../type-definitions';

import './Slides.css';

type Props = {
  typeOfSlides: 'Yacht' | 'A1' | 'Godlike';
  slides: ISlides;
  setSlides: Dispatch<SetStateAction<ISlides>>;
}

const Slides: FC<Props> = ({
  typeOfSlides,
  slides,
  setSlides
}) => {
  return (
    <div className="Wrapper">
      <span className="ImageWrapper MainPicture">

        <img src={imageParser(typeOfSlides, 1)}/>

        <button className="Button ViewMoreButton" onClick={() => {
          if (slides) {
            setSlides(null)
          } else {
            setSlides(typeOfSlides)
          }
        }}>View<br/>more</button>

        <span className="AdditionalImage SecondPicture">
          <img src={imageParser(typeOfSlides, 2)}/>
        </span>
        <span className="AdditionalImage ThirdPicture">
          <img src={imageParser(typeOfSlides, 3)}/>
        </span>

      </span>
    </div>
  );
};

export default Slides;
