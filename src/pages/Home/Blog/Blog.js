import React, { useRef, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { blogItems } from "./blogItem"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";





// import required modules
import { Pagination } from "swiper";
import BlogPost from '../BlogPost/BlogPost';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Blog = () => {
    return (
        <Box style={{width:"90%",marginLeft:"auto",marginRight:"auto"}}>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    "@0.75": {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    "@1.00": {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    "@1.50": {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <BlogPost post={1}></BlogPost>
                </SwiperSlide>
                <SwiperSlide>
                    <BlogPost post={3}></BlogPost>
                </SwiperSlide>
                <SwiperSlide>
                    <BlogPost post={5}></BlogPost>
                </SwiperSlide>
                <SwiperSlide>
                    <BlogPost post={7}></BlogPost>
                </SwiperSlide>
                <SwiperSlide>
                    <BlogPost post={9}></BlogPost>
                </SwiperSlide>
                <SwiperSlide>
                    <BlogPost post={11}></BlogPost>
                </SwiperSlide>


            </Swiper>
        </Box>
    );
};

export default Blog;