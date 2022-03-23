import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import GoogleOutlinedIcon from '@mui/icons-material/Google';
import TwitterOutlinedIcon from '@mui/icons-material/Twitter';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import footerBg from "../../../images/footer-bg.png"

const footerStyle = {
    background: `url(${footerBg})`,
    backgroundWidth: "100%",
    backgroundRepeat: "no-repeat"
}
const getAppointmentButton = {
    background: 'linear-gradient(90deg, #4ddee6, #1dc0c9)',
    color: "white",
    padding: " 3px 20px",

}
const tealColor = {
    color: "#4ddee6"
}
const Footer = () => {
    return (
        <Box sx={{}} sx={{ width: "95%", marginLeft: "auto", marginRight: "auto", mt: 5, pt: 5, textAlign: "start" }} style={footerStyle}>
            <Grid container item spacing={1} columns={{ xs: 3, sm: 6, md: 12, lg: 12 }}>

                <Grid item xs={3} sm={3} md={3} lg={3} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Emergency Dental Care
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Check Up
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Treatment of Personal Diseases
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Tooth Extraction
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Check Up
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} >
                    <Typography variant="h6" display="block" gutterBottom sx={{ color: "#1dc0c9" }}>
                        Services
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Emergency Dental Care
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Check Up
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Treatment of Personal Diseases
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Tooth Extraction
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Check Up
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Check Up
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Check Up
                    </Typography>

                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} >
                    <Typography variant="h6" display="block" gutterBottom sx={{ color: "#1dc0c9" }}>
                        Services
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Emergency Dental Care
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Check Up
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Treatment of Personal Diseases
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Tooth Extraction
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Check Up
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Check Up
                    </Typography>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Check Up
                    </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} >
                    <Typography variant="h6" display="block" gutterBottom sx={{ color: "#1dc0c9" }}>
                        Our Address
                    </Typography>

                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        New York-101010 Hudson Yards
                    </Typography>

                    <div style={{ marginLeft: "-10px" }}>
                        <IconButton sx={{ ml: "-1" }} variant="outlined" color="primary" size="large" >
                            <FacebookOutlinedIcon ></FacebookOutlinedIcon>
                        </IconButton>
                        <IconButton variant="outlined" color="primary">
                            <GoogleOutlinedIcon></GoogleOutlinedIcon>
                        </IconButton>
                        <IconButton variant="outlined" color="primary" sx={{ color: "#00B6F1" }}>
                            <TwitterOutlinedIcon></TwitterOutlinedIcon>
                        </IconButton>
                        <IconButton variant="outlined" style={{ color: "green" }}>
                            <WhatsappOutlinedIcon></WhatsappOutlinedIcon>
                        </IconButton>
                    </div>

                    <br></br>
                    <br></br>
                    <Typography variant="p" display="block" gutterBottom sx={{ color: "gray" }}>
                        Call Now
                    </Typography>
                    <Button style={getAppointmentButton}>+880191</Button>
                </Grid>

            </Grid>


            <Typography variant="p" gutterBottom component="div" sx={{ textAlign: "center", color: "gray", mt: 5, pt: 5 }}>
                Copyright 2022 All Rights Reserved
            </Typography>

        </Box>
    );
};

export default Footer;