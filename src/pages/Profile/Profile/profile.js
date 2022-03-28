import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const profile = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <h1>This is User Profile</h1>
            <Footer></Footer>
        </Box>
    );
};

export default profile;