import React from "react";
import { blogItems } from "../Blog/blogItem";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import imgV from "../../../images/blog_image.png";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const SingleBlogPost = ({ post, blogItem }) => {
    console.log(blogItem);

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    m: 1,
                    minHeight: 210,
                    width: 1,
                    // background: "red",
                },
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                }}
            >
                <Box>
                    <img src={imgV} alt="" />
                </Box>
                <Box sx={{ textAlign: "start", pl: 2 }}>
                    <p style={{ color: "#159EEC" }}>{blogItem.date}</p>
                    <h2>{blogItem.title}</h2>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <RemoveRedEyeOutlinedIcon
                                sx={{ fontSize: 18, color: "#159EEC", mr: 1 }}
                            ></RemoveRedEyeOutlinedIcon>
                            <p>{blogItem.views}</p>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <FavoriteBorderOutlinedIcon
                                sx={{ fontSize: 18, color: "red", mx: 1 }}
                            ></FavoriteBorderOutlinedIcon>
                            <p>{blogItem.reaction}</p>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default SingleBlogPost;
