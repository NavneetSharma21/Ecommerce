import React, { useState } from "react";
import './carousel.css';
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";

const Carousel = () =>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      {
        src: '/assets/image1.jpg',
        text: '1',
        Quotes: {
          p1: 'Shrimply the best',
          h1:'A Catch Of the day !',
          p2:'Fresh &  sustainably  caught',
        }
      },
      {
        src: '/assets/image2.jpg',
        text: '2',
        Quotes: {
          p1: 'Testy And Authentic',
          h1:'A Pizza the Action !',
          p2:'Made the traditional way',
        }
       
      },
      {
        src: '/assets/image3.jpg',
        text: '3',
        Quotes: {
          p1: 'Testy And Authentic',
          h1:'The Good food is waiting !',
          p2:'Fresh &  sustainably  caught',
        }
      },
    ];

    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return(
     <div className="carousel">
      <div className="imageContainer">
        <button className="prevButton" onClick={goToPrevSlide}><FaAngleLeft /></button>
        <img src={images[currentIndex].src} alt="carousel" />
        <div className="imageText">{images[currentIndex].text}</div>
        <button className="nextButton" onClick={goToNextSlide}><FaAngleRight /></button>
        <div className="extra_info">
          <div className="text">
          <p>{images[currentIndex].Quotes.p1}</p>
          <h1>{images[currentIndex].Quotes.h1}</h1>
          <p>{images[currentIndex].Quotes.p2}</p>
          </div>
          <div className="ButtonOnMain">
            <button id="btn">Shop cheese an Dairy</button>
            <button id="btn">Store Cupboard</button>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Carousel;