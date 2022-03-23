import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import cavity from "../../../images/cavity.png"
import fluoride from "../../../images/fluoride.png"
import whitening from "../../../images/whitening.png"
import Service from '../Service/Service';


const services = [
    {
        name: "Fluoride Treatment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image: fluoride,
        key: 1
    },
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image: cavity,
        key: 2
    },
    {
        name: "Teath whitening",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image: whitening,
        key: 3
    }
]

const Services = () => {
    return (
        <Container style={{margin:"10% auto"}}>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" fontWeight="500" sx={{ m:2}} style={{color:"#45DADF"}}>
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" component="div" fontWeight="600" sx={{m:3}}>
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                        <Grid item xs={4} sm={4} md={4} lg={3} key={index}>
                            <Service key={service.key} service={service}></Service>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;