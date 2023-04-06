import './index.scss';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import adimg1 from './Images/adimg1.png';
import adimg2 from './Images/adimg2.png';
import adimg3 from './Images/adimg3.png';

const ads = [
  {
    id: 1,
    image: adimg3,
    caption: 'Comprar Iphone 14 na PCDiga',
  },
  {
    id: 2,
    image: adimg1,
    caption: 'Apple apresenta a potente Apple TV 4K de próxima geração',
  },
  {
    id: 3,
    image: adimg2,
    caption: 'O Headset da Apple poderá ser lançado em Janeiro',
  },
];

const Ad = ({ id, image, caption }) => {
  return (
    <Col xs={12} md={4} className="d-flex align-items-center">
      <div className="position-relative">
        <Image src={image} fluid />
        <div className="position-absolute bottom-0 start-0 w-100 p-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <p className="mb-0 text-white">{caption}</p>
        </div>
      </div>
    </Col>
  );
};

const Ads = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {ads.map((ad) => (
          <Ad key={ad.id} id={ad.id} image={ad.image} caption={ad.caption} />
        ))}
      </Row>
    </Container>
  );
};

export default Ads;
