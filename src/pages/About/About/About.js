import { Box } from "@mui/material";
import React from "react";
import Blog from "../../Home/Blog/Blog";
import Doctors from "../../Home/Doctors/Doctors";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AboutDescription from "../AboutDescription/AboutDescription";
import AboutHead from "../AboutHead/AboutHead";
import AboutQuote from "../AboutQuote/AboutQuote";

const About = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <AboutHead></AboutHead>
            <AboutDescription></AboutDescription>
            <AboutQuote></AboutQuote>
            <Doctors></Doctors>
            <Blog></Blog>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </Box>
    );
};

export default About;
