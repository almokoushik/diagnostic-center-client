import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';
import chair from "../../../images/chair.png"
import bg from "../../../images/bg.png"
import Calender from '../Calender/Calender';





const bannerBg = {
    background: `url(${bg})`,
}

const AppointmentHeader = ({date,setDate}) => {
    // console.log(date)
    return (
        <Box style={bannerBg} sx={{ width: '100%', mb: 10, py: 10 }} >
            <Grid container rowSpacing={{ xs: 5, sm: 5, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }} columnSpacing={{ xs: 5, sm: 5, md: 3 }}>
                <Grid item xs={4} sm={8} md={6} style={{ textAlign: "start", }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >

                    <Container >
                        <Typography variant="h4" fontWeight={600}>
                            Appointment
                        </Typography>

                        <Calender  date={date} setDate={setDate} style={{ width: "150%", }}></Calender>

                    </Container>

                </Grid>
                <Grid item xs={4} sm={8} md={6} sx={{ display: 'flex', justifyContent: "start", alignItems: "center" }}>
                    <Container sx={{

                        width: {
                            xs: '100%',
                            sm: '100%',
                            md: '75%',
                            lg:"75%"
                        }
                    }}>
                        <img src={chair} alt="" style={{ width: "100%" }} />
                    </Container>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentHeader;