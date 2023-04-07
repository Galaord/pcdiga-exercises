import './index.scss'
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return(
        <>
            <footer className="bg-light py-3 mt-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <div className="d-flex align-items-start flex-column">
                                <svg className="mr-2" style={{marginBottom:'-95px'}}>
                                    <g data-name='Group 15142' className="svg-icon">
                                        <path data-name="Path 672" d="M20.5 0H1.691L0 6.839h20.5a3.42 3.42 0 010 6.839H0v13.677h6.8v-6.839h13.7A10.258 10.258 0 0020.5 0z" fill="#ff4d23" fillRule="evenodd"></path>
                                        <path data-name="Path 673" d="M47.855 20.516a6.839 6.839 0 010-13.677h15.4L64.929 0h-17.1a13.678 13.678 0 000 27.355h15.406l1.672-6.839z" fill="#ff4d23" fillRule="evenodd"></path>
                                        <path data-name="Path 674" d="M85.464 0H70.058l-1.672 6.839h17.1a6.839 6.839 0 110 13.677H75.225V10.2h-6.839v17.155h17.1A13.678 13.678 0 1085.464 0z" fill="#1c5a9d" fillRule="evenodd"></path>
                                        <path data-name="Path 675" d="M126.5 6.839h15.4L143.574 0h-17.1a13.678 13.678 0 100 27.355h17.1v-17.1h-15.406L126.5 17.1h10.258v3.419H126.5a6.839 6.839 0 010-13.677z" fill="#1c5a9d" fillRule="evenodd"></path>
                                        <path data-name="Rectangle 2015" fill="#1c5a9d" d="M102.561 0h6.839v27.355h-6.839z"></path>
                                        <path data-name="Path 676" d="M160.689 23.212a9.517 9.517 0 010-19.034h10.068a2.906 2.906 0 012.906 2.906v9.517h-2.621V6.648h-10.353a7.05 7.05 0 100 14.1h17.116V7.066a7.057 7.057 0 00-7.048-7.048h-10.068a13.659 13.659 0 100 27.317h16.071l1.026-4.141h-17.1zm6.212-6.63h-6.212a2.906 2.906 0 010-5.813h6.212z" fill="#1c5a9d"></path>
                                    </g>
                                </svg>
                                <p className="m-0 ml-3 flex-grow-1">PCDIGA Online - Loja de Informática Nº1 em Portugal.</p>
                                <div className="d-flex flex-wrap flex-grow-1" style={{marginTop:'15px'}}>
                                    <a href="https://www.facebook.com/PCDIGA"><FaFacebook className="socials mx-2" color='#000000'/></a>
                                    <a href="https://twitter.com/Pcdiga"><FaTwitter className="socials mx-2" color='#000000'/></a>
                                    <a href="https://www.instagram.com/pcdiga/"><FaInstagram className="socials mx-2" color='#000000'/></a>
                                    <a href="https://www.youtube.com/channel/UCssDLlWWO8qDfSWUUBE9sow"><FaYoutube className="socials mx-2" color='#000000'/></a>
                                    <a href="https://www.tiktok.com/@pcdiga.com"><FaTiktok className="socials mx-2" color='#000000' /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default Footer