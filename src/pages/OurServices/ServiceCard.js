import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
const ServiceCard = ({ service }) => {
    const { title, bgImage, description } = service;
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    background: "#BFD2F8",
                    "&:hover": {
                        // background: "#F8FBFF",
                        cursor: "pointer",
                    },

                    width: 1,
                    pt: 2,
                    color: "#1F2B6C",
                },
            }}
        >
            <Paper
                elevation={0}
                style={{
                    transitionDelay: "1s",
                    transitionProperty: "backgroundColor",
                }}
            >
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                        }}
                    >
                        <img
                            src={require(`../../images/img_vid/${bgImage}`)}
                            alt=""
                            style={{ width: "100%" }}
                        />
                    </Box>
                </Box>
                <Box>
                    <h3>{title}</h3>
                    {/* <p style={{ fontSize: "18px" }}>{description}</p> */}
                </Box>
            </Paper>
        </Box>
    );
};

export default ServiceCard;
