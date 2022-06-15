import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bg from "../../../images/appointment-bg.png"
import { Button, Typography } from '@mui/material';
import doctor from "../../../images/doctor.png"
import TextField from '@mui/material/TextField';


const appointmentCss = {
    background: `url(${bg})`,
    backgroundWidth: "100%",
    backgroundColor: "rgba(45, 58, 74,0.9)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: "100px",
    paddingTop:"50px",
    paddingBottom:"100px"
}
const learnMoreButton = {
    background: 'linear-gradient(90deg, #4ddee6, #1dc0c9)',
    color: "white",
    padding: " 5px 30px",
}

const ContactUs = () => {

    return (
        <Box style={{ ...appointmentCss, textAlign: "center" }} sx={{ flexGrow: 1}} >

            <Box >
                <Typography variant="h6" style={{ color: "#20d6df", marginTop: "30px" }}>
                    Appointment
                </Typography>
                <Typography variant="h4" fontWeight="500" style={{ color: '#d9d9d9' }} sx={{ my: 3 }}>
                    Always Connect With Us
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Box
                        sx={{
                            mb: 2,
                            width: 460,
                            maxWidth: '100%',
                            background: "white",
                            borderRadius: "5px"
                        }}
                    >
                        <TextField fullWidth label="Email Address *" id="email" variant="standard" />
                    </Box>
                    <Box
                        sx={{
                            my: 2,
                            width: 460,
                            maxWidth: '100%',
                            background: "white",
                            borderRadius: "5px",
                        }}
                    >
                        <TextField fullWidth label="Subject" id="subject" variant="standard" />
                    </Box>
                    <Box
                        sx={{
                            my: 2,
                            width: 460,
                            maxWidth: '100%',
                            background: "white",
                            borderRadius: "5px"
                        }}
                    >
                        <TextField fullWidth label="Message" id="message" variant="standard"  multiline rows={4}/>
                    </Box>
                   
                    <Button style={learnMoreButton}>
                        Submit
                    </Button>
                </Box>
            </Box>



        </Box >
    );
};

export default ContactUs;