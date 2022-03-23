import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { Typography } from '@mui/material';



const Testimonial = () => {
    return (
        <Box sx={{ width: '95%',textAlign:"start" ,margin:"100px auto"}}>
            <Box sx={{mb:5}}>
            <Typography variant="h6" sx={{ color: "#1dc0c9" }}>TESTIMONIAL</Typography>
            <Typography style={{fontWeight:"500"}} variant="h4">What Our Patients Says</Typography>
            </Box>

            <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 2, md: 1 ,lg:1}} columns={{ xs: 4, sm:8 , md: 12}}>
                <Grid item xs={4} md={4} lg={4}>
                   <TestimonialCard></TestimonialCard>
                </Grid>
                <Grid item  xs={4} md={4} lg={4}>
                <TestimonialCard></TestimonialCard>
                </Grid>
                <Grid item  xs={4} md={4} lg={4}>
                <TestimonialCard></TestimonialCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Testimonial;