import React from "react";
import "./MainService.css";
import service from "../../../images/service.png";

import Container from "@mui/material/Container";

const MainService = () => {
    return (
        <div className="main-service-area">
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
                <h3>Home / Services</h3>
                <h1>Services</h1>
            </Container>
        </div>
    );
};

export default MainService;
