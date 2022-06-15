import React from 'react';
import { blogItems } from "../Blog/blogItem"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import image from "../../images/fluoride.png"

const SingleBlogPost = ({ post }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 1,
                },
                background: "yellow"
            }}
        >
            <Paper elevation={0} sx={{ display: "flex", justifyContent: "start", alignItems: "center" }} >
               <Box>
                   <img src={image} alt="" />
               </Box>
               <Box></Box>
            </Paper>
        </Box>

    );
};

export default SingleBlogPost;