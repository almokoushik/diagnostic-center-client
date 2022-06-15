import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const LowerBanner = () => {
    return (
        <Box sx={{ width: { xs: "95%", md: "85%", lg: "80%" }, margin: "-150px  auto  100px" }} >
            <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 8, lg: 12 }}>

                <Grid item xs={4} sm={4} md={4} lg={4} >
                    <Box sx={{ minWidth: 275 }} >
                        <Card variant="outlined" style={{ backgroundColor: "#21C3CC", color: "white" }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <CardContent>
                                <AccessTimeOutlinedIcon sx={{ fontSize: "50px" }}></AccessTimeOutlinedIcon>
                            </CardContent>

                            <CardContent>
                                <Typography variant="h6">
                                    Opening Hours
                                </Typography>
                                <Typography variant="body2">
                                    Lorem Ipsum is simply
                                    dummy text
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Box sx={{ minWidth: 275 }} >
                        <Card variant="outlined" style={{ backgroundColor: "#041831", color: "white" }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <CardContent>
                                <RoomOutlinedIcon sx={{ fontSize: "50px" }}></RoomOutlinedIcon>
                            </CardContent>

                            <CardContent>
                                <Typography variant="h6">
                                    Visit Our Location
                                </Typography>
                                <Typography variant="body2">
                                    Brooklyn, NY 10036, United States
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Box sx={{ minWidth: 275 }} >
                        <Card variant="outlined" style={{ backgroundColor: "#21C3CC", color: "white" }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <CardContent>
                                <CallOutlinedIcon sx={{ fontSize: "50px" }}></CallOutlinedIcon>
                            </CardContent>

                            <CardContent>
                                <Typography variant="h6">
                                    Contact Us Now
                                </Typography>
                                <Typography variant="body2">
                                    +000 123 456 789
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LowerBanner;