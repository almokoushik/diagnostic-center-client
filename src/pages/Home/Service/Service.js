import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { name, description, image } = props.service;
    return (
        <div>
            <Card sx={{ minWidth: 275  ,border:0, boxShadow:0}}>
                <CardMedia
                    component="img"
                    height="194"
                    style={{ width: "auto", margin: "0 auto", height: "80px" }}
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>


                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <br></br>
                    <Typography variant="body2" color="text.secondary">
                        {description}

                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Service;