import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import gif from "../../images/img_vid/homeGif.gif";
import Button from "@mui/material/Button";
const HeaderBanner = () => {
    return (
        <div style={{ paddingTop: "20px" }}>
            <Box
                style={{ width: "90%" }}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    m: "auto auto",
                }}
            >
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 12, sm: 12, md: 12 }}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        py: 5,
                        my: 5,
                        px: 2,
                    }}
                >
                    <Grid
                        item
                        sx={{ textAlign: "start" }}
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                    >
                        <Typography
                            variant="h2"
                            component="h2"
                            color="#1F2B6C"
                            sx={{ fontWeight: "bold" }}
                        >
                            A Wealth of Experience To Heal And Help You.
                        </Typography>

                        <Typography
                            variant="h5"
                            component="h5"
                            color="#1F2B6C"
                            sx={{ my: 3 }}
                        >
                            Our main goal is to ensure the proper service to
                            patients. This application automates tasks of admin,
                            receptionist, and customers alike while boosting
                            user satisfaction.
                        </Typography>
                        <Button
                            variant="outlined"
                            sx={{
                                fontSize: 18,
                                color: "#1F2B6C",
                                backgroundColor: "#FFFFFF",
                                mr: 3,
                                my: 2,
                            }}
                        >
                            See More
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "#1F2B6C",
                                backgroundColor: "#FFFFFF",
                                fontSize: 18,
                            }}
                        >
                            Make an Appointment
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{}}>
                        <img src={gif} alt="" style={{ width: "90%" }} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default HeaderBanner;
