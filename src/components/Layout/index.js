import Ads from '../Ads';
import Deals from '../Deals';
import Highlights from '../Highlights';
import Navibar from '../Navibar';
import Productshowcase from '../Productshowcase';
import Slideshow from '../Slideshow';
import Underslider from '../Underslider';
import './index.scss';
import React from 'react';

const Layout = () => {
    return(
        <>
        <Navibar/>
        <Slideshow/>
        <Underslider/>
        <Productshowcase/>
        <Highlights/>
        <Deals/>
        <Ads/>
        </>
    );
}
export default Layout