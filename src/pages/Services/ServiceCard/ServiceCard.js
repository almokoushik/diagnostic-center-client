import { Box, Container } from "@mui/material";
import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import checkup from "../../../images/checkup.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ServiceCard = () => {
    return (
        <div style={{ margin: "5% auto", width: "88%" }}>
            <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
                {Array.from(Array(8)).map((_, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                width: "100%",
                                textAlign: "start",
                                "&:hover": {
                                    backgroundColor: "#BFD2F8",
                                },

                                cursor: "pointer",
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={checkup}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    color="#1F2B6C"
                                    sx={{
                                        fontWeight: "500",
                                    }}
                                >
                                    Free Checkup
                                </Typography>
                                <Typography
                                    // variant="body2"
                                    color="text.dark"
                                    sx={{
                                        width: "90%",
                                        fontWeight: "400px",
                                        py: 1,
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing Quisque placerat Convallis felis
                                    vitae tortor augue. Velit nascetur massa in.
                                </Typography>
                                <Button size="small" sx={{ color: "#6BC2F3" }}>
                                    Learn More
                                    <ArrowRightAltIcon
                                        sx={{ ml: 2, color: "#1F2B6C" }}
                                    ></ArrowRightAltIcon>
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ServiceCard;
