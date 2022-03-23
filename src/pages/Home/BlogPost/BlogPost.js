import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import doctorAvatar from "../../../images/people-1.png"
import { Button } from '@mui/material';


const BlogPost = () => {   
    return (
        <Card sx={{ maxWidth: 480 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{}} aria-label="recipe">
                        <img style={{width:"100%"}} src={doctorAvatar} alt="" />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent>

            <Typography variant="h6" textAlign="start" style={{marginBottom:"5px"}}>
                    2 Times brush in a day can keep you healthy
                </Typography>

                <Typography variant="body2" color="text.secondary" style={{textAlign:"start"}}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum sunt quae eaque corrupti itaque sint voluptas laboriosam explicabo hic!
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
               <Button sx={{marginLeft:"auto",color:"#1dc0c9"}}>Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default BlogPost;