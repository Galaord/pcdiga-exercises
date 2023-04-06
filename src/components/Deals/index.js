import React, { useState } from "react";
import productimg1 from './Images/imgproduct1.png'
import productimg2 from './Images/imgproduct2.png'
import productimg3 from './Images/imgproduct3.png'
import productimg4 from './Images/imgproduct4.png'
import productimg5 from './Images/imgproduct5.png'
import productimg6 from './Images/imgproduct6.png'
import productimg7 from './Images/imgproduct7.png'
import productimg8 from './Images/imgproduct8.png'
import { Swiper, SwiperSlide } from "swiper/react";
import './index.scss'
import { Button, Col, Container, Row } from "react-bootstrap";

const Deals = () => {
    const [products] = useState([
      { id: 1, name: "iPhone 11", image: productimg1, price: 169.00, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", inStock:'Em Stock', eta:'Entrega Prevista a partir de 17 JAN', salePrice: 10.00  },
      { id: 2, name: "Adaptador USB-C", image: productimg2, price: 169.00, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", inStock:'Em Stock', eta:'Entrega Prevista a partir de 17 JAN', salePrice: 150.00 },
      { id: 3, name: "Apple Watch Ultra", image: productimg3, price: 169.00, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", inStock:'Em Stock', eta:'Entrega Prevista a partir de 17 JAN', salePrice: 20.00  },
      { id: 4, name: "iPad Air", image: productimg4, price: 169.00, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", inStock:'Em Stock', eta:'Entrega Prevista a partir de 17 JAN', salePrice: 40.00  },
      { id: 5, name: "Macbook Pro", image: productimg5, price: 169.00, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", inStock:'Em Stock', eta:'Entrega Prevista a partir de 17 JAN', salePrice: 5.00   },
      { id: 6, name: "WATCH Ultra", image: productimg6, price: 169.00, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", inStock:'Em Stock', eta:'Entrega Prevista a partir de 17 JAN', salePrice: 90.00  },
      { id: 7, name: "iPad Pro", image: productimg7, price: 169.00, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", inStock:'Em Stock', eta:'Entrega Prevista a partir de 17 JAN', salePrice: 25.00  },
      { id: 8, name: "Macbook Air", image: productimg8, price: 169.00, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", inStock:'Em Stock', eta:'Entrega Prevista a partir de 17 JAN', salePrice: 122.00 },
    ]);
    return(
        <>
            <Container className="swiper-container" fluid>
            <Row>
                <Col>
                <h1 className="destaque">Promoções</h1>
                <Swiper
                style={{ width: "74.5%", margin: "0 auto" }}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                loop={false}
                breakpoints={{
                    768: {
                        initialSlide:2,
                        slidesPerView: 2,
                      },
                      992: {
                        initialSlide:2,
                        slidesPerView: 3,
                      },
                      1025:{
                        initialSlide: 3,
                        slidesPerView: 5,
                      }
                }}
                >
                    {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="product-card2">
                        <img src={product.image} alt={product.name} />
                        {product.salePrice && (
                            <div className="on-sale">
                            -{product.salePrice}€
                            </div>
                        )}
                        <h4>{product.name}</h4>
                        <h1>{product.description}</h1>
                        <h3><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.423 13.3619C2.94414 13.3581 0.124914 10.562 0.121094 7.11164V6.98663C0.190372 3.5518 3.04177 0.81631 6.50535 0.86189C9.96893 0.907469 12.7462 3.71703 12.7235 7.15247C12.7009 10.5879 9.88689 13.3612 6.423 13.3619ZM3.53043 6.85537L2.64186 7.73667L5.16262 10.2368L10.2041 5.23655L9.31558 4.349L5.16262 8.46795L3.53043 6.85537Z" fill="#52A35A"/>
                        </svg>{product.inStock}</h3>
                        <h5>{product.eta}</h5>
                        <h2>{product.price}€</h2>
                        <p><span>PVPR</span></p>
                        <h6>{product.price+product.salePrice}€</h6>
                        <div className="buttons" style={{display:'flex'}}>
                            <div className="wishlist-button" style={{display:'flex'}}>
                                <Button variant="no-outline" size="sm">
                                <svg width="16" height="16" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3343 20.5372C10.6307 19.9151 9.83549 19.2681 8.99444 18.5797H8.98353C6.02187 16.1654 2.66532 13.4336 1.18286 10.1602C0.695811 9.11811 0.437701 7.98429 0.425794 6.83466C0.422541 5.25723 1.05716 3.74506 2.18623 2.63992C3.3153 1.53478 4.84352 0.929964 6.42549 0.96216C7.71338 0.964188 8.97353 1.33526 10.0558 2.03117C10.5314 2.3389 10.9617 2.71114 11.3343 3.13716C11.709 2.71281 12.1394 2.34079 12.6139 2.03117C13.6957 1.33512 14.9556 0.964029 16.2431 0.96216C17.8251 0.929964 19.3533 1.53478 20.4824 2.63992C21.6115 3.74506 22.2461 5.25723 22.2428 6.83466C22.2317 7.98612 21.9736 9.12189 21.4858 10.1657C20.0033 13.4391 16.6478 16.1698 13.6862 18.5797L13.6753 18.5884C12.8331 19.2724 12.039 19.9195 11.3354 20.5459L11.3343 20.5372ZM6.42549 3.13716C5.40937 3.12448 4.42931 3.51218 3.69836 4.21596C2.99409 4.90562 2.60048 5.85052 2.60742 6.83466C2.61986 7.67258 2.81022 8.49838 3.16602 9.25761C3.86582 10.67 4.81005 11.9481 5.95533 13.0334C7.03636 14.1209 8.27993 15.1736 9.35551 16.0588C9.65331 16.3035 9.95657 16.5504 10.2598 16.7973L10.4507 16.9528C10.742 17.1898 11.0431 17.4356 11.3343 17.677L11.3485 17.664L11.355 17.6586H11.3616L11.3714 17.6509H11.3769H11.3823L11.4019 17.6346L11.4467 17.5987L11.4543 17.5922L11.4663 17.5835H11.4729L11.4827 17.5748L12.207 16.9821L12.3968 16.8266C12.7033 16.5776 13.0066 16.3307 13.3044 16.086C14.38 15.2008 15.6246 14.1492 16.7057 13.0563C17.8511 11.9715 18.7954 10.6937 19.495 9.28154C19.8572 8.51572 20.0503 7.68129 20.0612 6.83466C20.0657 5.85356 19.6723 4.91228 18.9703 4.22466C18.2407 3.5177 17.2605 3.12681 16.2431 3.13716C15.0017 3.12664 13.8148 3.64542 12.9815 4.56287L11.3343 6.45512L9.68713 4.56287C8.85379 3.64542 7.66696 3.12664 6.42549 3.13716Z" fill="black"/>
                                </svg>
                                 <x>Wishlist</x>
                                </Button>
                            </div>
                            <div className="compare-button" style={{display:'flex'}}>
                            <Button variant="no-outline" size="sm">
                                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.03399 12.0814L2.40759 9.16367L6.03399 6.24591V8.43423H15.4626V9.89311H6.03399V12.0814ZM10.3857 6.24591V4.0576H0.957031V2.59872H10.3857V0.4104L14.0121 3.32816L10.3857 6.24591Z" fill="black"/>
                                </svg>
                                <x>Comparar</x>
                                </Button>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
                </Col>
            </Row>
            </Container>
        </>
    )
}
export default Deals