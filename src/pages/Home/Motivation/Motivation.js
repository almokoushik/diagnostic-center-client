import { Container, Divider } from "@mui/material";
import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import doct_one from "../../../images/doct_one.png";
import doct_two from "../../../images/doct_two.png";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Brightness1Icon from "@mui/icons-material/Brightness1";

const specialities = [
    {
        title: "Orthopedic",
        image: "orthopedic.png",
        index: 0,
    },

    {
        title: "Neurology",
        image: "Neurology.png",
        index: 1,
    },
    {
        title: "Mother Care",
        image: "mothercare.png",
        index: 2,
    },
];

const Motivation = () => {
    const [active, setActive] = useState(1);

    const handleClick = (props) => {
        setActive(props);
    };
    return (
        <div
            style={{
                width: "90%",
                margin: "5% auto 5%",
            }}
        >
            <h3 style={{ color: "#159EEC" }}>CARE YOU CAN BELIEVE IN</h3>
            <h1 style={{ color: "#1F2B6C" }}>OUR SERVICES</h1>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
                    {/* start of first grid */}

                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={2}
                        sx={{
                            // p: 1,    `A
                            // border: "1px solid grey",
                            borderRadius: "10px",
                            w: "90%",
                        }}
                    >
                        <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
                            {specialities.map((sp) => {
                                return (
                                    <Grid
                                        key={sp.index}
                                        xs={4}
                                        sm={4}
                                        md={12}
                                        item
                                        onClick={() => handleClick(sp.index)}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                cursor: "pointer",
                                                "& > :not(style)": {
                                                    width: 1,
                                                },
                                            }}
                                        >
                                            <Paper
                                                elevation={0}
                                                style={{
                                                    borderRadius: "10px",
                                                    border: "1px solid grey",
                                                }}
                                                sx={{
                                                    background:
                                                        active === sp.index
                                                            ? "#1F2B6C"
                                                            : "white",
                                                    color:
                                                        active === sp.index
                                                            ? "#BFD2F8"
                                                            : "black",
                                                }}
                                            >
                                                <img
                                                    src={require(`../../../images/img_vid/${sp.image}`)}
                                                    alt={sp.title}
                                                    style={{
                                                        width: "20%",
                                                        borderRadius: "50%",
                                                        background: "#BFD2F8",
                                                        marginTop: "11%",
                                                    }}
                                                />
                                                <h3>{sp.title}</h3>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                        <button
                            style={{
                                width: "100%",
                                border: "none",
                                background: "#1F2B6C",
                                color: "#BFD2F8",
                                padding: "35px 0px",
                                borderRadius: "10px",
                                fontSize: "18px",
                                cursor: "pointer",
                                lineHeight: "18px",
                            }}
                        >
                            View All
                        </button>
                    </Grid>
                    {/* end of first grid */}
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={7}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Container
                            sx={{
                                // border: "1px solid red",
                                textAlign: "start",
                                // pt: { xs: 5, md: 0, lg: 0 },
                            }}
                            maxWidth="md"
                        >
                            <h2>
                                A passion for putting patients first for -
                                <span
                                    style={{
                                        color: "#159EEC",
                                        marginLeft: "15px",
                                    }}
                                >
                                    {specialities[active].title}
                                </span>
                                <span></span>{" "}
                            </h2>

                            <Box sx={{ flexGrow: 1 }}>
                                <Grid
                                    container
                                    columnSpacing={0}
                                    rowSpacing={0}
                                    columns={{ xs: 12, sm: 12, md: 12 }}
                                >
                                    <Grid item xs={12} sm={6} md={6}>
                                        <Box
                                            style={{
                                                display: "flex",
                                                justifyContent: "start",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Brightness1Icon
                                                style={{
                                                    color: "#159EEC",
                                                    marginRight: "10px",
                                                    fontSize: "20px",
                                                }}
                                            ></Brightness1Icon>
                                            <h3>A Passion for Healing</h3>
                                        </Box>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={6}
                                        sx={{ m: "none" }}
                                    >
                                        <Box
                                            style={{
                                                display: "flex",
                                                justifyContent: "start",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Brightness1Icon
                                                style={{
                                                    color: "#159EEC",
                                                    marginRight: "10px",
                                                    fontSize: "20px",
                                                }}
                                            ></Brightness1Icon>
                                            <h3>A Passion for Healing</h3>
                                        </Box>
                                    </Grid>{" "}
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={6}
                                        sx={{ m: "none" }}
                                    >
                                        <Box
                                            style={{
                                                display: "flex",
                                                justifyContent: "start",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Brightness1Icon
                                                style={{
                                                    color: "#159EEC",
                                                    marginRight: "10px",
                                                    fontSize: "20px",
                                                }}
                                            ></Brightness1Icon>
                                            <h3>A Passion for Healing</h3>
                                        </Box>
                                    </Grid>{" "}
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={6}
                                        sx={{ m: "none" }}
                                    >
                                        <Box
                                            style={{
                                                display: "flex",
                                                justifyContent: "start",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Brightness1Icon
                                                style={{
                                                    color: "#159EEC",
                                                    marginRight: "10px",
                                                    fontSize: "20px",
                                                }}
                                            ></Brightness1Icon>
                                            <h3>A Passion for Healing</h3>
                                        </Box>
                                    </Grid>{" "}
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={6}
                                        sx={{ m: "none" }}
                                    >
                                        <Box
                                            style={{
                                                display: "flex",
                                                justifyContent: "start",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Brightness1Icon
                                                style={{
                                                    color: "#159EEC",
                                                    marginRight: "10px",
                                                    fontSize: "20px",
                                                }}
                                            ></Brightness1Icon>
                                            <h3>A Passion for Healing</h3>
                                        </Box>
                                    </Grid>{" "}
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={6}
                                        sx={{ m: "none" }}
                                    >
                                        <Box
                                            style={{
                                                display: "flex",
                                                justifyContent: "start",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Brightness1Icon
                                                style={{
                                                    color: "#159EEC",
                                                    marginRight: "10px",
                                                    fontSize: "20px",
                                                }}
                                            ></Brightness1Icon>
                                            <h3>A Passion for Healing</h3>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <p style={{ fontSize: "17px" }}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque placerat scelerisque
                                tortor ornare ornare. Quisque placerat
                                scelerisque tortor ornare ornare Convallis felis
                                vitae tortor augue. Velit nascetur proin massa
                                in. Consequat faucibus porttitor enim et.
                            </p>

                            <p style={{ fontSize: "17px" }}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque placerat scelerisque.
                                Convallis felis vitae tortor augue. Velit
                                nascetur proin massa in.
                            </p>
                        </Container>
                    </Grid>
                    {/* end of second  grid */}
                    <Grid item xs={12} sm={12} md={3}>
                        <img src={doct_one} alt="" style={{ width: "100%" }} />
                        <img src={doct_two} alt="" style={{ width: "100%" }} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Motivation;
