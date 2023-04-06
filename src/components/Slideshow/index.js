import { Carousel } from 'react-bootstrap'
import './index.scss'
import imageSlide1 from './Images/slide1.png'
import React from 'react';

const images = [
    { id: 1, src: imageSlide1 },
    { id: 2, src: imageSlide1 },
    { id: 3, src: imageSlide1 }
  ];

const Slideshow = () => {
    return (
        <Carousel className='test'>
          {images.map((image) => (
            <Carousel.Item key={image.id}>
              <img
                className="d-block w-100"
                src={image.src}
                alt={`Slide ${image.id}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      );
}
export default Slideshow