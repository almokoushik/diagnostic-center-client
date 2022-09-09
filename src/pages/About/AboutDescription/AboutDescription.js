import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import description from "../../../images/description.png";
import { Container } from "@mui/material";
import Brightness1Icon from "@mui/icons-material/Brightness1";

const AboutDescription = () => {
    return (
        <div style={{ margin: "10% auto", width: "90%" }}>
            <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    sx={{ textAlign: "start" }}
                    // border: "1px solid red",
                >
                    <img src={description} alt="" style={{ width: "100%" }} />
                </Grid>

                {/* end of first grid */}
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={8}
                    // sx={{ border: "1px solid red" }}
                >
                    <Grid
                        container
                        xs={12}
                        sm={12}
                        md={12}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Container
                            maxWidth="xl"
                            sx={{
                                // border: "1px solid red",
                                textAlign: "start",
                                width: "90%",
                                // pt: { xs: 5, md: 0, lg: 0 },
                            }}
                        >
                            <h2 style={{ color: "#6BC2F3" }}>
                                Welcome to Diagnostic Center
                            </h2>
                            <h1 style={{ fontSize: "40px", color: "#1F2B6C" }}>
                                Best Care for Your Good Health
                            </h1>

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
                </Grid>
            </Grid>
        </div>
    );
};

export default AboutDescription;
