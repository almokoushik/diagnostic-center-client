import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const About = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <h1>This is about</h1>
            <Footer></Footer>
        </Box>
    );
};

export default About;