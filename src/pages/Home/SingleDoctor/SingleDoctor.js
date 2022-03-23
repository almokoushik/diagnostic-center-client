import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import doctorSmall from "../../../images/doctor-small.png"
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const SingleDoctor = () => {
    return (
        <Card sx={{ maxWidth: 480}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    // height="140"
                    image={doctorSmall}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    Dr. Claudie
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <LocalPhoneOutlinedIcon fontSize="small" sx={{color:"#4ddee6"}} ></LocalPhoneOutlinedIcon>+61 452 200 126
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default SingleDoctor;