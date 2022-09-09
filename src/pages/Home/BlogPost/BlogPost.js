import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import SingleBlogPost from "../SingleBlogPost/SingleBlogPost";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BlogPost = ({ post, blogItem }) => {
  console.log(blogItem);

  return (
    <Box sx={{ flexGrow: 1, mb: 10 }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <SingleBlogPost
            post={post}
            blogItem={blogItem}
            key={post}
          ></SingleBlogPost>
          <SingleBlogPost
            post={post + 1}
            blogItem={blogItem}
            key={post + 1}
          ></SingleBlogPost>
        </Grid>
        {/* {
             blogItems.slice(post-1,1).map((blogItem)=>{
                 return (
                    
                 )
             })
         } */}
      </Grid>
    </Box>
  );
};

export default BlogPost;
