import { useState } from "react";
import "./carousel.css";
import Button from './Button';

const Carousel = ({ images, alts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousIndex = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  // if already reach the top, then we reached to the last index to get the last image.
  const nextIndex = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };
//same logic with previousIndex

  return (
    <div className="carousel">
      <img className="carousel__img" src={images[currentIndex]} alt={alts[currentIndex]} />
      <div className="carousel__buttons">
        <Button className="carousel__button" visual='carousel' onClick={previousIndex}>{'<'}</Button>
        <Button className="carousel__button" visual='carousel' onClick={nextIndex}>{'>'}</Button>
       </div>
    </div>
  );
};

export default Carousel;
