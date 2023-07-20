import React, { useState } from 'react';
import './carrousel.scss';
import leftArrow from "../../assets/images/ArrowLeft.png"


const Carrousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => {
      const newSlide = prevSlide === 0 ? images.length - 1 : prevSlide - 1;
      setCurrentImageIndex(newSlide);
      return newSlide;
    });
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const newSlide = prevSlide === images.length - 1 ? 0 : prevSlide + 1;
      setCurrentImageIndex(newSlide);
      return newSlide;
    });
  };
 

  

  return (
    <div className="carousel" >
      <img className="carousel-image" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />

      
        <img className="leftArrow" src={leftArrow} alt="Left Arrow" onClick={handlePrevSlide} />
      

      
        <img className="rightArrow" src={leftArrow} alt="Right Arrow" onClick={handleNextSlide}/>
     

      <div className="carousel-dots">
        {images.map((image, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
