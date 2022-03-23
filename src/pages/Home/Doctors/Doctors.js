import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import SingleDoctor from '../SingleDoctor/SingleDoctor';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Doctors = () => {
    return (
        <Container sx={{ width: '100%' ,margin:"70px auto"}}>
             <Typography gutterBottom variant="h5" sx={{color:"#1dc0c9", my:5,py:5,fontWeight:"400px"}}component="div">
                    Our Doctors
                    </Typography>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4} >
                   <SingleDoctor></SingleDoctor>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                <SingleDoctor></SingleDoctor>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                <SingleDoctor></SingleDoctor>
                </Grid>
               
            </Grid>
        </Container>
    );
};

export default Doctors;