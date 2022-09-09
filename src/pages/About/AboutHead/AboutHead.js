import { Container } from "@mui/material";
import React from "react";
import "./AboutHead.css";

const AboutHead = () => {
    return (
        <div className="main-about-area">
            <Container
                maxWidth="xl"
                sx={{
                    textAlign: "start",
                    width: "90%",
                    pl: 5,
                    py: 10,
                    color: "#1F2B6C",
                }}
            >
                <h3>Home / About</h3>
                <h1>About Us</h1>
            </Container>
        </div>
    );
};

export default AboutHead;
