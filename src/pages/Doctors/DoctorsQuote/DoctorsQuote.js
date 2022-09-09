import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import doctors_quote from "../../../images/doctors_quote.svg";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";

const bgImg = {
  // problem of background color on background image
  backgroundColor: "red",
  backgroundImage: `url(${doctors_quote})`,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  opacity: 2.8,
  // for blur image
  // filter: "blur(1px)",
};

const DoctorsQuote = () => {
  return (
    <Box style={bgImg} sx={{ height: 100, mt: 5, background: "primary" }}>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      {/* <img src={doctors_quote} alt="" /> */}
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </Box>
  );
};

export default DoctorsQuote;
