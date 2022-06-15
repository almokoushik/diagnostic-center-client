import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
// import doctorSmall from "../../../images/doctor-small.png"
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { green } from '@mui/material/colors';

const SingleDoctor = ({ doctor }) => {
    const { title } = doctor;
    return (
        <Card sx={{ mb: 5 }}>
            <CardActionArea >
                <img src={require(`../../../images/doctors/${title}.png`)} alt="" style={{ width: "80%", height: "300px" }} />

                <CardContent style={{ backgroundColor: "#CFF2EF" }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <IconButton aria-label="add to favorites" style={{ color: "#34C9B6" }}>
                        <LinkedInIcon />
                    </IconButton>
                    {/* style={{backgroundColor:"#34C9B6"}} */}
                    <IconButton aria-label="share" style={{ color: "#34C9B6" }}>
                        <FacebookOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="share" style={{ color: "#34C9B6" }}>
                        <TwitterIcon />
                    </IconButton>

                    <IconButton aria-label="share" style={{ color: "#34C9B6" }} >
                        <GoogleIcon />
                    </IconButton>
                </CardContent>

                <CardActions style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#34C9B6" }}>

                    <button size="large" color="primary" style={{ border: "none", background: "inherit", cursor: "pointer", }} >
                        <Typography variant="h6" color="white">View Profile</Typography>
                    </button>

                </CardActions>

            </CardActionArea>

        </Card>
    );
};

export default SingleDoctor;