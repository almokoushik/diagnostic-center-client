import { Box, Container } from "@mui/material";
import React, { useRef, useState } from "react";
import "./AboutQuote.css";
import invarted from "../../../images/inverted.png";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const quotes = [
    {
        id: "1",
        author: "John Doe",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    },
    {
        id: "2",
        author: "John Doe",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    },
    {
        id: "3",
        author: "John Doe",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    },
    {
        id: "4",
        author: "John Doe",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    },
    {
        id: "5",
        author: "John Doe",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    },
    {
        id: "6",
        author: "John Doe",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
    },
];

const AboutQuote = () => {
    return (
        <div className="about-quote-section" style={{ margin: "10% auto" }}>
            <Box
                sx={{
                    pt: 10,
                    pb: 5,
                    // border: "1px solid green",
                    margin: "auto",
                    width: {
                        xs: "90%",
                        md: "50%",
                        lg: "40%",
                    },
                    textAlign: "center",
                }}
                // style={{ width: "40%" }}
            >
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {quotes.map((quote) => {
                        return (
                            <SwiperSlide>
                                <img src={invarted} alt="" />
                                <p
                                    sx={{}}
                                    style={{
                                        color: "#FCFEFE",
                                        fontSize: "22px",
                                    }}
                                >
                                    {quote.quote}
                                </p>
                                <Divider
                                    variant="middle"
                                    style={{
                                        backgroundColor: "white",
                                        width: "50%",
                                        margin: "auto",
                                    }}
                                    sx={{ fontSize: "100px" }}
                                />
                                <h2
                                    style={{
                                        color: "white",
                                        marginBottom: "10%",
                                    }}
                                >
                                    {quote.author}-{quote.id}
                                </h2>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                ;
            </Box>
        </div>
    );
};

export default AboutQuote;
