import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
// import doctorSmall from "../../../images/doctor-small.png"
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { green } from "@mui/material/colors";

const SingleDoctor = ({ doctor }) => {
    const { title, sector } = doctor;
    console.log(doctor);
    return (
        <Card sx={{ mb: 3 }}>
            <CardActionArea>
                <img
                    src={require(`../../../images/doctors/${title}.png`)}
                    alt=""
                    style={{ width: "75%", height: "300px" }}
                />

                <CardContent
                    style={{ backgroundColor: "#BFD2F8", color: "#1F2B6C" }}
                >
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ fontSize: 18 }}
                    >
                        {sector}
                    </Typography>
                    <IconButton
                        aria-label="add to favorites"
                        style={{ color: "#1F2B6C" }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton aria-label="share" style={{ color: "#1F2B6C" }}>
                        <FacebookOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="share" style={{ color: "#1F2B6C" }}>
                        <TwitterIcon />
                    </IconButton>

                    <IconButton aria-label="share" style={{ color: "#1F2B6C" }}>
                        <GoogleIcon />
                    </IconButton>
                </CardContent>

                <CardActions
                    style={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#1F2B6C",
                    }}
                >
                    <button
                        size="large"
                        color="primary"
                        style={{
                            border: "none",
                            background: "inherit",
                            cursor: "pointer",
                        }}
                    >
                        <Typography variant="h6" color="#BFD2F8">
                            View Profile
                        </Typography>
                    </button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
};

export default SingleDoctor;
