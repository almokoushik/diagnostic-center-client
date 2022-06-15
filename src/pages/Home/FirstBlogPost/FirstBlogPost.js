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
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box } from '@mui/system';


const firstBlogPost = {
    backgroundImage: `linear-gradient(90deg, #4ddee6, #1dc0c9)`,
    color: 'white'
}
const FirstBlogPost = () => {
    return (
        <Card sx={{ maxWidth: 480 }} style={firstBlogPost}>
            <CardHeader sx={{ textAlign: "start" }}
                title={<Typography variant="h5" sx={{ color: 'white', }}>Rashed Kabir</Typography>}
                subheader={<Typography sx={{ color: 'white', }}>September 14, 2016</Typography>}
            />
            <CardContent>
                <Typography variant="h6" textAlign="start" sx={{ color: 'white',fontSize:"24px",padding:"28px 0px",py:{lg:2}}}>
                    2 Times brush in a day can keep you healthy
                </Typography>
            </CardContent>
            
            <CardActions disableSpacing>
                <IconButton aria-label="share" style={{ color: "white" }}>
                    <ArrowRightAltIcon></ArrowRightAltIcon>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default FirstBlogPost;