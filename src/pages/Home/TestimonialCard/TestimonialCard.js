import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import people2 from "../../../images/people-2.png"


const TestimonialCard = () => {
    return (
        <Card sx={{ maxWidth:580,  margin: 'auto' }} >
            <CardContent>
                <Typography variant="p" color="text.secondary">
                    It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using 'Content here,content'

                    It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using 'Content here,content'
                </Typography>
            </CardContent>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        <img src={people2} alt="" style={{ width: "100%" }} />
                    </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
        </Card>

    );
};

export default TestimonialCard;