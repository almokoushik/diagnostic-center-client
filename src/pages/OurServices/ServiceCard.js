import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
const ServiceCard = ({ service }) => {
    const { title, bgImage, description } = service;
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    '&:hover': {
                        background: '#C7F2FF',
                        cursor: 'pointer',


                    },

                    width: 1,
                    padding: 5,

                },



            }}

        >
            <Paper elevation={1} style={{ transitionDelay: "1s", transitionProperty: "backgroundColor" }}>
                <Box style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "#F3FCFF" }}>  <img src={require(`../../images/img_vid/${bgImage}`)} alt="" style={{ width: "50%" }} /></Box>
                </Box>
                <Box >
                    <h2>{title}</h2>
                    <p style={{ fontSize: "18px" }}>{description}</p>
                </Box>
            </Paper>
        </Box>
    );
};

export default ServiceCard;