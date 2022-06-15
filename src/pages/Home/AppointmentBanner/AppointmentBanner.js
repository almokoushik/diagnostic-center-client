import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bg from "../../../images/appointment-bg.png"
import { Button, Typography } from '@mui/material';
import doctor from "../../../images/doctor.png"

const appointmentCss = {
    background: `url(${bg})`,
    backgroundWidth: "100%",
    backgroundColor: "rgba(45, 58, 74,0.9)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: "16%",
    marginBottom:"0"
}
const learnMoreButton = {
    background: 'linear-gradient(90deg, #4ddee6, #1dc0c9)',
    color: "white",
    padding: " 8px 20px",
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentCss} sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 3, sm: 2, md: 1 }}  style={{width:"95%"}}>
                <Grid item xs={12} md={6} >
                    <img

                        style={{ width: "100%", marginTop: "-25%" }}
                        src={doctor} alt="" />
                </Grid>

                <Grid sx={{ display: "flex",justifyContent: "center", alignItems: "center" }} item xs={6} md={6}>
                    <Box style={{ textAlign: "left",width:"90%",margin:"auto"}} sx={{ display: "flex", flexDirection:"column" ,justifyContent: "center", alignItems: "start" ,pb:{xs:5, sm:5}}}>
                        <Typography variant="h6" style={{ color: "#20d6df" }}>
                            Appointment
                        </Typography>
                        <Typography variant="h3" fontWeight="500" style={{ color: '#d9d9d9' }} sx={{}}>
                            Make an  appointment Today
                        </Typography>
                        <Typography style={{ color: '#d9d9d9' }}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                        </Typography>
                       <br></br>
                        <Button style={learnMoreButton}>

                            Learn More
                        </Button>
                    
                    </Box>

                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;