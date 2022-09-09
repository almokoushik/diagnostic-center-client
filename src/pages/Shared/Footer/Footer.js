import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GoogleOutlinedIcon from "@mui/icons-material/Google";
import TwitterOutlinedIcon from "@mui/icons-material/Twitter";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import footerBg from "../../../images/footer-bg.png";
import footerImage from "../../images/img_vid/footer-svg.svg";
import { ImportantDevicesTwoTone } from "@mui/icons-material";

const footerStyle = {
  backgroundColor: "#1F2B6C",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const getAppointmentButton = {
  background: "#F8FBFF",
  color: "black",
  padding: " 4px 20px",
};
const tealColor = {
  color: "#4ddee6",
};
const decoration = {
  cursor: "pointer",
  textDecoration: "none",
  color: "white",
  fontSize: 18,
};
const Footer = () => {
  return (
    <Box style={footerStyle}>
      <Box
        sx={{
          px: "6%",
          width: "100%",
          mt: 5,
          pt: 20,
          pb: 3,
          textAlign: "start",
        }}
      >
        <Grid
          container
          item
          spacing={1}
          columns={{ xs: 3, sm: 6, md: 12, lg: 12 }}
        >
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box>
              <Link to="/services" style={decoration}>
                Emergency Dental Care
              </Link>
            </Box>

            <Box>
              <Link to="" style={decoration}>
                Check Up
              </Link>
            </Box>

            <Box>
              <Link
                to=""
                variant="p"
                display="block"
                gutterBottom
                style={decoration}
              >
                Plastic Surgery
              </Link>
            </Box>

            <Box>
              <Link to="/services" style={decoration}>
                Rheumatalogy
              </Link>
            </Box>
            <Box>
              <Link to="/services" style={decoration}>
                Orthopedic
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Typography
              variant="h6"
              display="block"
              gutterBottom
              sx={{ color: "white" }}
            >
              Services
            </Typography>
            <Box>
              <Link to="/services" style={decoration}>
                Cardiovascular
              </Link>
            </Box>
            <Box>
              <Link to="/services" style={decoration}>
                Neurology
              </Link>
            </Box>
            <Box>
              <Link to="/services" style={decoration}>
                Cancer
              </Link>
            </Box>
            <Box>
              <Link to="/services" style={decoration}>
                Urology
              </Link>
            </Box>
            <Box>
              <Link to="/services" style={decoration}>
                Immunelogy
              </Link>
            </Box>
            <Box>
              <Link to="/services" style={decoration}>
                Neuclear Medicine
              </Link>
            </Box>
            <Box>
              <Link to="/services" style={decoration}>
                Surgery
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Typography
              variant="h6"
              display="block"
              gutterBottom
              sx={{ color: "white" }}
            >
              Services
            </Typography>
            <Box>
              <Link to="/services" style={decoration}>
                Mother Care
              </Link>
            </Box>
            <Box>
              <Link to="/services" style={decoration}>
                Hair Treatment
              </Link>
            </Box>
            <Box>
              <Link to="/services" style={decoration}>
                Renal Medicine
              </Link>
            </Box>
            <Box>
              <Link to="/services" style={decoration}>
                Emergency Dental Care
              </Link>
            </Box>
            <Box>
              <Link to="/services" style={decoration}>
                Respiratory Diseases
              </Link>
            </Box>

            <Box>
              <Link to="/services" style={decoration}>
                Pchycology
              </Link>
            </Box>

            <Box>
              <Link to="/services" style={decoration}>
                Pathology
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Typography
              variant="h6"
              display="block"
              gutterBottom
              sx={{ color: "white" }}
            >
              Our Address
            </Typography>

            <Typography
              variant="p"
              display="block"
              gutterBottom
              sx={{ color: "white" }}
            >
              New York-101010 Hudson Yards
            </Typography>

            <div style={{ marginLeft: "-10px" }}>
              <IconButton
                sx={{ ml: "-1" }}
                variant="outlined"
                size="large"
                style={{ color: "white" }}
              >
                <FacebookOutlinedIcon></FacebookOutlinedIcon>
              </IconButton>
              <IconButton variant="outlined" style={{ color: "#F8FBFF" }}>
                <GoogleOutlinedIcon></GoogleOutlinedIcon>
              </IconButton>
              <IconButton variant="outlined" style={{ color: "#F8FBFF" }}>
                <TwitterOutlinedIcon></TwitterOutlinedIcon>
              </IconButton>
              <IconButton variant="outlined" style={{ color: "#F8FBFF" }}>
                <WhatsappOutlinedIcon></WhatsappOutlinedIcon>
              </IconButton>
            </div>

            <br></br>
            <br></br>
            <Typography
              variant="p"
              display="block"
              gutterBottom
              sx={{ color: "white" }}
            >
              Call Now
            </Typography>
            <Button style={getAppointmentButton}>+8801910000000</Button>
          </Grid>
        </Grid>

        <Typography
          variant="p"
          gutterBottom
          component="div"
          sx={{ textAlign: "center", color: "white", mt: 5, pt: 5 }}
        >
          Copyright 2022 All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
