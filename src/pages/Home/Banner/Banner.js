import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';
import chair from "../../../images/chair.png"
import bg from "../../../images/bg.png"



const getAppointmentButton = {
    background: 'linear-gradient(90deg, #4ddee6, #1dc0c9)',
    color: "white",
    padding: " 8px 20px",
}

const bannerBg = {
    background: `url(${bg})`,
    width:"100%"
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ width: '100%', mb: 10,py:10 }} >
            <Grid container rowSpacing={{ xs: 5, sm: 5, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} columnSpacing={{ xs: 5, sm: 5, md: 3 }}>
                <Grid item xs={4} sm={8} md={6} style={{ textAlign: "start", }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >

                    <Container >
                        <Typography variant="h4" fontWeight={600}>
                            Your New Smile <br></br> Starts Here
                        </Typography>
                        <Typography sx={{ color: "gray" }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia et exercitationem ab mollitia accusantium rerum veritatis reprehenderit voluptas ea quis.
                        </Typography>
                        <br></br>
                        <Button style={getAppointmentButton}>Get Appointment</Button>
                    </Container>

                </Grid>
                <Grid item xs={4} sm={8} md={6} sx={{ display: 'flex', justifyContent: "start", alignItems: "center" }}>
                    <Container sx={{

                        width: {
                            xs: '100%',
                            sm: '100%',
                            md: '75%',
                        }
                    }}>
                        <img src={chair} alt="" style={{ width: "100%" }} />
                    </Container>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Banner;