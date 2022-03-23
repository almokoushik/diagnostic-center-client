import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import treatment from "../../../images/treatment.png"
import { Button, Typography } from '@mui/material';

const LearnMoreButton = {
    background: 'linear-gradient(90deg, #4ddee6, #1dc0c9)',
    color: "white",
    padding: " 8px 20px",
}

const DentalCareDemo = () => {
    return (
        <Box sx={{ width: '95%', margin: "20px auto" }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 8, lg: 8 }}>
                <Grid item xs={4} sm={4} md={4} lg={4} sx={{ display: "flex", justifyContent: "end" }}>
                    <Box component="img" src={treatment} sx={{ width: { xs: "100%", md: '75%',lg:"60%" } }}></Box>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} sx={{ display: "flex", textAlign: "start", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ pr: 5 }}>
                        <Typography variant="h4" sx={{ fontWeight: "600" }}>
                            Exceptional Dental <br></br>
                            Care, on Your Terms
                        </Typography>
                        <Typography variant="p" sx={{color:"grey"}}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. the point of using Lorem ipsum that is has a more-or-less normal distribution of letters, as opposed to using "Content-here,Content here", making it look like readable English. Many desktop publishing packages and web page
                        </Typography>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Button style={LearnMoreButton}>Learn More</Button>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DentalCareDemo;