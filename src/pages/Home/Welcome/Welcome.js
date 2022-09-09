import React from "react";
import welcome_img from "../../../images/welcome_img.png";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import { Container } from "@mui/material";

const Welcome = () => {
    return (
        <Container sx={{ mt: 15 }}>
            <h2 style={{ color: "#159EEC" }}>WELCOME TO DIAGNOSTIC CENTER</h2>
            <h1 style={{ color: "#1F2B6C" }}>
                A GREAT PLACE FOR EXCELLENT CARE
            </h1>
            <p style={{ width: "90%", margin: "auto", fontSize: "18px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati eveniet cum blanditiis ea, temporibus <br></br>
                tempore Obcaecati eveniet cum blanditiis ea, temporibus tempore
                Obcaecati eveniet cum blanditiis ea, temporibus tempore
                <br></br>
                Obcaecati eveniet cum blanditiis ea, temporibus tempore mollitia
                earum aliquid, velit corporis unde dignissimos
            </p>
            <Box
                style={{
                    border: "none",
                    background: "none",
                    color: "#159EEC",
                    margin: "30px 0px",
                }}
            >
                <Button variant="text" endIcon={<ArrowRightAltIcon />}>
                    Learn More
                </Button>
            </Box>

            <img
                src={welcome_img}
                alt="Not Found"
                style={{ width: "100%", margin: "20px 0px" }}
            />
        </Container>
    );
};

export default Welcome;
