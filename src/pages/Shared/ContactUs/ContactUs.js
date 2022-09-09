import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { contactList } from "./contactList";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const ItemStyle = {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "start",
    "& > :not(style)": {
        m: 1,
        pl: 10,
        width: 1,
        // height: 128,
        backgroundColor: "#BFD2F8",
        color: "#1F2B6C",
        // border: "1px solid #57C9B6",
    },
    "& :hover": {
        backgroundColor: "#1F2B6C",
        color: "#BFD2F8",
    },
    cursor: "pointer",
};

const ContactUs = () => {
    return (
        <Box sx={{ flexGrow: 1, width: "89%", my: 10, mx: "auto" }}>
            <Box sx={{ mb: 5 }}>
                <h2 style={{ color: "#159EEC" }}>GET IN TOUCH</h2>
                <h1>STAY CONNECTED</h1>
            </Box>
            <Grid
                container
                rowSpacing={{ xs: 1 }}
                colSpacing={{ xs: 1, md: 4 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={ItemStyle}>
                        <Paper elevation={0}>
                            <WifiCalling3OutlinedIcon
                                sx={{ fontSize: 40, mt: 3 }}
                            ></WifiCalling3OutlinedIcon>
                            <h1>EMERGENCY</h1>
                            <p>(237) 682-821-255</p>
                            <p>(237) 666-331-894</p>
                        </Paper>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={ItemStyle}>
                        <Paper elevation={0}>
                            <LocationOnOutlinedIcon
                                sx={{ fontSize: 40, mt: 3 }}
                            ></LocationOnOutlinedIcon>
                            <h1>LOCATION</h1>
                            <p>0123 Some Place</p>
                            <p>9876 Some Country</p>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={ItemStyle}>
                        <Paper elevation={0}>
                            <EmailOutlinedIcon
                                sx={{ fontSize: 40, mt: 3 }}
                            ></EmailOutlinedIcon>
                            <h1>EMAIL</h1>
                            <p>someone@someone.com</p>
                            <p>someone@someone.com</p>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={ItemStyle}>
                        <Paper elevation={0}>
                            <AccessTimeOutlinedIcon
                                sx={{ fontSize: 40, mt: 3 }}
                            ></AccessTimeOutlinedIcon>
                            <h1>ON TIME</h1>
                            <p>Mon-Sat 09.00-20.00</p>
                            <p>Sunday Emergency Only</p>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactUs;
