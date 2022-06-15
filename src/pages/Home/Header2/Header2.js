import { Box, Container } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import './Header2.css';

const Header2 = () => {
    return (
       <Box className="mainHeader">
        {/* <Container> */}
        <Navigation></Navigation> 
        <HeaderBanner></HeaderBanner>
        {/* </Container> */}
       </Box>
    );
};

export default Header2;