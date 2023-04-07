import { Button, Container, Form, InputGroup, Nav, Navbar, NavbarBrand, Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react';
import './index.scss';

const Navibar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Container className='justify-content-center'>
            <Navbar className='navbar' bg='#e0e0e0' variant='light' expand='lg'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><Button className='button2' variant='no-outline'><svg width='23' height='23' viewBox="0 0 23 16" ><path d="M.632 15.5h10.896V13H.632v2.5zm0-6.25h21.792v-2.5H.632v2.5zm0-6.25h21.792V.5H.632V3z" fill="currentColor"></path></svg></Button></Navbar.Toggle>
                    <Button className='button1' variant='no-outline'><svg width='23' height='23' viewBox="0 0 23 16" ><path d="M.632 15.5h10.896V13H.632v2.5zm0-6.25h21.792v-2.5H.632v2.5zm0-6.25h21.792V.5H.632V3z" fill="currentColor"></path></svg></Button>
                        <NavbarBrand href='#home'><svg className='logo' width='150' height='23.08' viewBox="0 0 177.805 27.355">
                            <g data-name='Group 15142'>
                            <path data-name="Path 672" d="M20.5 0H1.691L0 6.839h20.5a3.42 3.42 0 010 6.839H0v13.677h6.8v-6.839h13.7A10.258 10.258 0 0020.5 0z" fill="#ff4d23" fillRule="evenodd"></path>
                            <path data-name="Path 673" d="M47.855 20.516a6.839 6.839 0 010-13.677h15.4L64.929 0h-17.1a13.678 13.678 0 000 27.355h15.406l1.672-6.839z" fill="#ff4d23" fillRule="evenodd"></path>
                            <path data-name="Path 674" d="M85.464 0H70.058l-1.672 6.839h17.1a6.839 6.839 0 110 13.677H75.225V10.2h-6.839v17.155h17.1A13.678 13.678 0 1085.464 0z" fill="#1c5a9d" fillRule="evenodd"></path>
                            <path data-name="Path 675" d="M126.5 6.839h15.4L143.574 0h-17.1a13.678 13.678 0 100 27.355h17.1v-17.1h-15.406L126.5 17.1h10.258v3.419H126.5a6.839 6.839 0 010-13.677z" fill="#1c5a9d" fillRule="evenodd"></path>
                            <path data-name="Rectangle 2015" fill="#1c5a9d" d="M102.561 0h6.839v27.355h-6.839z"></path>
                            <path data-name="Path 676" d="M160.689 23.212a9.517 9.517 0 010-19.034h10.068a2.906 2.906 0 012.906 2.906v9.517h-2.621V6.648h-10.353a7.05 7.05 0 100 14.1h17.116V7.066a7.057 7.057 0 00-7.048-7.048h-10.068a13.659 13.659 0 100 27.317h16.071l1.026-4.141h-17.1zm6.212-6.63h-6.212a2.906 2.906 0 010-5.813h6.212z" fill="#1c5a9d"></path>
                            </g>
                            </svg></NavbarBrand>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ml-auto" style={{marginLeft:'3px'}}>
                            <Nav.Link className="d-inline-block" href="#link1">Top Vendas</Nav.Link>
                            <Nav.Link className="d-inline-block" href="#link2">Promoções</Nav.Link>
                            <Nav.Link className="d-inline-block" href="#link3">Campanhas</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        <InputGroup className="mb-1 mt-2">
                        <InputGroup.Text style={{borderRadius:'0px'}} className='bg-light'><svg fill='none' width='1em' height='1em' viewBox="0 0 21 22"><path d="M18.36 21.009l-6.842-7c-3.044 2.214-7.238 1.672-9.649-1.245-2.41-2.917-2.233-7.237.408-9.938a7.067 7.067 0 019.716-.418c2.853 2.465 3.383 6.755 1.219 9.869l6.842 6.999-1.693 1.731-.001.002zM7.355 3.122c-2.27 0-4.229 1.63-4.69 3.903-.461 2.274.702 4.566 2.785 5.49 2.083.923 4.514.223 5.82-1.676a4.984 4.984 0 00-.423-6.169l.725.735-.817-.833-.014-.014a4.702 4.702 0 00-3.386-1.436z" fill="currentColor"></path></svg></InputGroup.Text>
                        <Form.Control className=''
                            style={{borderRadius:'0px', borderLeft:'0'}}
                            id='search-id'
                            type='Search' 
                            placeholder='Escreva aqui o que procuras...'
                            aria-label='Search'/>
                        </InputGroup>
                        <div style={{marginLeft:'10px', marginRight:'8px'}}>
                            <svg height='25' color='#ffad00' width='25' ><path d="M14.883 27.334h-2.598v-4h2.598v4zm6.968-2.963l-2.755-2.828 1.836-1.885 2.757 2.829-1.836 1.884h-.002zm-16.533 0L3.48 22.486l2.754-2.83 1.838 1.886-2.754 2.828v.001zm8.266-3.695c-3.591-.001-6.502-2.99-6.5-6.677 0-3.687 2.912-6.675 6.504-6.675 3.591 0 6.502 2.99 6.502 6.676-.003 3.687-2.914 6.674-6.506 6.676zm0-10.685c-2.156.001-3.904 1.797-3.903 4.011.001 2.214 1.75 4.008 3.907 4.008s3.905-1.796 3.905-4.01c-.002-2.214-1.751-4.008-3.909-4.009zm12.99 5.343h-3.897v-2.667h3.896v2.667zm-22.082 0H.595v-2.667h3.897v2.667zm16.439-6.99l-1.835-1.886 2.755-2.83 1.838 1.887-2.757 2.828-.001.001zm-14.695 0L3.483 5.516 5.32 3.631l2.753 2.83-1.836 1.882-.002.001zm8.647-3.677h-2.598v-4h2.598v4z" fill="currentColor"></path></svg>
                        </div>
                        <Form className='switch'>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                        </Form>
                        <div style={{marginLeft:'0px', marginRight:'10px'}}>
                            <svg height='25' width='25'><path fillRule="evenodd" clipRule="evenodd" d="M20.13 19.097l-.3.003c-7.364 0-13.333-6.112-13.333-13.653 0-.103.001-.206.003-.308a10.005 10.005 0 00-3.64 7.755c0 5.484 4.342 9.93 9.697 9.93 3.063 0 5.796-1.455 7.574-3.727zm1.477-2.627c-.578.098-1.172.148-1.777.148-6.025 0-10.909-5.001-10.909-11.171 0-.62.05-1.228.144-1.82.16-1 .45-1.957.852-2.85a11.857 11.857 0 00-2.96 1.107C3.08 3.955.436 8.108.436 12.894c0 6.855 5.426 12.413 12.12 12.413 4.674 0 8.73-2.709 10.752-6.677.482-.945.849-1.963 1.08-3.032-.87.411-1.805.708-2.782.873z" fill="currentColor"></path></svg>
                        </div>
                            <Button variant="no-outline">
                                <svg width="16" height="16" viewBox="0 0 21 20" fill="none">
                                    <path d="M10.014 20C4.498 20 .026 15.523.026 10S4.498 0 10.014 0c5.517 0 9.988 4.477 9.988 10-.006 5.52-4.474 9.994-9.988 10zm-7.99-9.828c.047 4.401 3.637 7.938 8.033 7.914 4.396-.024 7.947-3.598 7.947-8 0-4.401-3.551-7.976-7.947-8C5.66 2.062 2.07 5.599 2.024 10v.172zM12.012 15H9.015v-4h-.998V9h2.996v4h.999v2zm-.999-8H9.015V5h1.998v2z" fill="currentColor"></path>
                                </svg>
                            </Button>
                                <Button className='test-btn' variant="no-outline" onClick={handleShow}>
                                    <svg width="23" height="23" viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3343 20.5372C10.6307 19.9151 9.83549 19.2681 8.99444 18.5797H8.98353C6.02187 16.1654 2.66532 13.4336 1.18286 10.1602C0.695811 9.11811 0.437701 7.98429 0.425794 6.83466C0.422541 5.25723 1.05716 3.74506 2.18623 2.63992C3.3153 1.53478 4.84352 0.929964 6.42549 0.96216C7.71338 0.964188 8.97353 1.33526 10.0558 2.03117C10.5314 2.3389 10.9617 2.71114 11.3343 3.13716C11.709 2.71281 12.1394 2.34079 12.6139 2.03117C13.6957 1.33512 14.9556 0.964029 16.2431 0.96216C17.8251 0.929964 19.3533 1.53478 20.4824 2.63992C21.6115 3.74506 22.2461 5.25723 22.2428 6.83466C22.2317 7.98612 21.9736 9.12189 21.4858 10.1657C20.0033 13.4391 16.6478 16.1698 13.6862 18.5797L13.6753 18.5884C12.8331 19.2724 12.039 19.9195 11.3354 20.5459L11.3343 20.5372ZM6.42549 3.13716C5.40937 3.12448 4.42931 3.51218 3.69836 4.21596C2.99409 4.90562 2.60048 5.85052 2.60742 6.83466C2.61986 7.67258 2.81022 8.49838 3.16602 9.25761C3.86582 10.67 4.81005 11.9481 5.95533 13.0334C7.03636 14.1209 8.27993 15.1736 9.35551 16.0588C9.65331 16.3035 9.95657 16.5504 10.2598 16.7973L10.4507 16.9528C10.742 17.1898 11.0431 17.4356 11.3343 17.677L11.3485 17.664L11.355 17.6586H11.3616L11.3714 17.6509H11.3769H11.3823L11.4019 17.6346L11.4467 17.5987L11.4543 17.5922L11.4663 17.5835H11.4729L11.4827 17.5748L12.207 16.9821L12.3968 16.8266C12.7033 16.5776 13.0066 16.3307 13.3044 16.086C14.38 15.2008 15.6246 14.1492 16.7057 13.0563C17.8511 11.9715 18.7954 10.6937 19.495 9.28154C19.8572 8.51572 20.0503 7.68129 20.0612 6.83466C20.0657 5.85356 19.6723 4.91228 18.9703 4.22466C18.2407 3.5177 17.2605 3.12681 16.2431 3.13716C15.0017 3.12664 13.8148 3.64542 12.9815 4.56287L11.3343 6.45512L9.68713 4.56287C8.85379 3.64542 7.66696 3.12664 6.42549 3.13716Z"/>
                                    </svg>
                                </Button>
                                <Offcanvas show={show} keyboard onHide={handleClose} placement='end'>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        Some text as placeholder. In real life you can have the elements you
                                        have chosen. Like, text, images, lists, etc.
                                    </Offcanvas.Body>
                                </Offcanvas>
                            <Button variant="no-outline" onClick={handleShow}>
                                <svg width="23" height="23" viewBox="0 0 21 20" fill="none">
                                    <path d="M4.167 6.333a5.833 5.833 0 1111.666 0 5.833 5.833 0 01-11.666 0zM10 9.833a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM3.4 16.067a9.333 9.333 0 00-2.733 6.6H3a7 7 0 0114 0h2.333a9.333 9.333 0 00-15.933-6.6z" fill="currentColor"></path>
                                </svg>
                            </Button>
                            <Offcanvas show={show} keyboard onHide={handleClose} placement='end'>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        Test1.
                                    </Offcanvas.Body>
                                </Offcanvas>
                            <Button variant='no-outline' onClick={handleShow}>
                                <svg width="23" height="23" viewBox="0 0 21 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H2.19158C3.13466 0 3.94959 0.6588 4.14719 1.58094L4.45127 3H17.6708C19.0016 3 19.9613 4.27559 19.5924 5.55432L17.8616 11.5543L16.9008 11.2772L17.8616 11.5543C17.6147 12.4105 16.8311 13 15.94 13H6.59413L6.80842 14H15C16.6569 14 18 15.3431 18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 16.6494 12.0602 16.3128 12.1707 16H8.82929C8.93985 16.3128 9 16.6494 9 17C9 18.6569 7.65685 20 6 20C4.34315 20 3 18.6569 3 17C3 15.764 3.7475 14.7025 4.8151 14.2431L2.19158 2H1C0.447715 2 0 1.55228 0 1ZM6.16556 11H15.94L17.6708 5H4.87984L6.16556 11ZM14 17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17ZM5 17C5 16.4477 5.44772 16 6 16C6.55229 16 7 16.4477 7 17C7 17.5523 6.55229 18 6 18C5.44772 18 5 17.5523 5 17Z" fill="currentColor"></path>
                                </svg>
                            </Button>
                            <Offcanvas show={show} keyboard onHide={handleClose} placement='end'>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        Test2.
                                    </Offcanvas.Body>
                            </Offcanvas>
                </Navbar>
            </Container>
        </>
    );
}
export default Navibar