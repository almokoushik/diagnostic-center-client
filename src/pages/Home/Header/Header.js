import { Box, Container } from "@mui/material";
import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import "./Header.css";

const Header2 = () => {
  return (
    <Box className="mainHeader">
      <Navigation></Navigation>
      <HeaderBanner></HeaderBanner>
    </Box>
  );
};

export default Header2;
