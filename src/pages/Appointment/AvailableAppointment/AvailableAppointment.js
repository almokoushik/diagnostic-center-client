import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Booking from '../Booking/Booking';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



const bookings = [
    {
        id: 1,
        name: "Teeth Orthodonics",
        time: "07.00 AM- 08.00 AM",
        space: 10
    },
    {
        id: 2,
        name: "Teeth X-Ray",
        time: "08.00 AM- 09.00 AM",
        space: 8
    },
    {
        id: 3,
        name: "Cosmetic Dentistry",
        time: "09.00 AM- 10.00 AM",
        space: 8
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "11.00 AM- 12.00 AM",
        space: 5
    },
    {
        id: 5,
        name: "Pediatric Dental",
        time: "06.00 PM- 07.00 PM",
        space: 10
    },
    {
        id: 6,
        name: "Oral Surgery",
        time: "07.00 PM- 08.00 PM",
        space: 7
    },
    {
        id: 7,
        name: "Teeth Plastering",
        time: "08.00 PM- 09.00 PM",
        space: 10
    },
    {
        id: 8,
        name: "Teeth Scaling",
        time: "09.00 PM- 10.00 PM",
        space: 9
    }

]

const AvailableAppointment = ({ date, setDate, successAlert, setSuccessAlert }) => {

    return (
        <Container>
            <h1 style={{ color: "#45DADF" }}>Available appointment on {date.toDateString()}</h1>

           {
               successAlert&& <Stack sx={{ width: '100%',my:2 }} spacing={2}>
               <Alert severity="success">Appointment Placed Successfully</Alert>
           </Stack>
           }

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                    {bookings.map((booking, index) => (
                        <Booking key={booking.id} successAlert={successAlert} setSuccessAlert={setSuccessAlert} booking={booking} date={date}></Booking>

                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default AvailableAppointment;