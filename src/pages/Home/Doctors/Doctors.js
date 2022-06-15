import React, { useRef } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import SingleDoctor from '../SingleDoctor/SingleDoctor';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import { doctorsList } from "./doctorsList"
import { useNavigate } from 'react-router-dom';

SwiperCore.use([Autoplay])

const Doctors = () => {

    const swiperRef = useRef(null)
    const navigate = useNavigate()

    return (

        <div style={{ width: '90%', margin: "20px auto" }}>
            <Box sx={{ mb: 5 }}>
                <h2 style={{ color: "#34C9B6" }}>Trusted Care</h2>
                <h1>Our Expert Team</h1>
            </Box>
            <Grid sx={{ mt: 5 }} container colSpacing={{ xs: 1 }} rowSpacing={{ xs: 1 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                ,        <Swiper


                    breakpoints={{
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 1,

                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,

                        },
                        // when window width is >= 720px
                        720: {
                            slidesPerView: 5,

                        },
                        // when window width is >= 992px
                        1400: {
                            slidesPerView: 6,
                        }
                    }}


                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    ref={swiperRef}
                    speed={2500}
                    allowTouchMove={true}
                    // slidesPerView={5}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    className="mySwiper"


                >
                    {
                        doctorsList.slice(0, 12).map((doctor, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3}>
                                    <SwiperSlide>
                                        <SingleDoctor doctor={doctor} key={index}></SingleDoctor>
                                    </SwiperSlide>
                                </Grid>

                            )
                        })

                    }
                </Swiper>
                <button style={{ border: "none", width: "100%", backgroundColor: "#34C9B6", color: "white", padding: "10px 0px", fontSize: "20px", fontWeight: "700", marginTop: "30px" }} onClick={() => navigate("/review")}>Show All Doctors</button>
            </Grid>

        </div>
    );
};

export default Doctors;