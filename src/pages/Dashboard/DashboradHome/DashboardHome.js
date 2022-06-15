import React from 'react';
import { Grid, Typography } from '@mui/material';
import Calender from '../../Appointment/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date,setDate]=React.useState(new Date())
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 4, lg: 8 }}>
        <Grid item xs={4} sm={4} md={4} lg={4}>
            <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
            <Typography variant="h5">Showing Appointments OF--{date.toLocaleDateString()}</Typography>
            <Appointments date={date} setDate={setDate}></Appointments>
        </Grid>
    </Grid>
    );
};

export default DashboardHome;