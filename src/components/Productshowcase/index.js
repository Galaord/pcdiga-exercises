import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import productimg1 from './Images/product1.png'
import productimg2 from './Images/product2.png'
import productimg3 from './Images/product3.png'
import productimg4 from './Images/product4.png'
import productimg5 from './Images/product5.png'
import productimg6 from './Images/product6.png'
import productimg7 from './Images/product7.png'
import productimg8 from './Images/product8.png'
import './index.scss'

const images = [
  {
    id: 'image-1',
    src: productimg1,
    name: 'iPhone 14 Pro',
  },
  {
    id: 'image-2',
    src: productimg2,
    name: 'iPad Mini',
  },
  {
    id: 'image-3',
    src: productimg3,
    name: 'AirPods Max',
  },
  {
    id: 'image-4',
    src: productimg4,
    name: 'iPhone 13',
  },
  {
    id: 'image-5',
    src: productimg5,
    name: 'WATCH Ultra',
  },
  {
    id: 'image-6',
    src: productimg6,
    name: 'AirPods Pro',
  },
  {
    id: 'image-7',
    src: productimg7,
    name: 'iPad Pro',
  },
  {
    id: 'image-8',
    src: productimg8,
    name: 'Macbook Air',
  },
];
const Productshowcase = () => {
    return (
      <Container className='showcase-container'>
        <Row>
          {images.map((image) => (
            
            <Col key={image.id} xs={6} md={3} className="my-3">
              <div className='product-container'>
              <div className="image-wrapper2">
                <div className="image-caption2">{image.name}</div>
                <div className="dots-wrapper">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className={`dot dot-${i}`} />
                  ))}
                </div>
                <img src={image.src} alt={image.name} draggable="false" />
              </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default Productshowcase;