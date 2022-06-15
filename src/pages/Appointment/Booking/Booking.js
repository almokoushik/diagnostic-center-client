import { Button, Grid } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';




const bookAppointmentButton = {
    background: 'linear-gradient(90deg, #4ddee6, #1dc0c9)',
    color: "white",
    padding: " 5px 20px",
    marginBottom:"20px"
}

const Booking = ({ booking,date,successAlert,setSuccessAlert }) => {
    const [open, setOpen] = React.useState(false);
    const { id, name, time, space } = booking;
    const handleOpen = () => {setOpen(true); setSuccessAlert(false)};
    const handleClose = () => setOpen(false);
    return (
        <Grid item xs={4} sm={4} md={4} lg={3} key={id}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: "100%",
                    },
                }}
            >
                <Paper elevation={3} >
                    <h3 style={{ color: "#45DADF" }}>{name}</h3>
                    <h4>{time}</h4>
                    <p style={{ color: "grey" }}>{space} Spaces Available</p>
                    <Button onClick={()=>handleOpen(true)} style={bookAppointmentButton}>Book Appointment</Button>
                    {
                        open && <BookingModal open={open} setOpen={setOpen} booking={booking}date={date} successAlert={successAlert} setSuccessAlert={setSuccessAlert} ></BookingModal>
                    }
                </Paper>
            </Box>
        </Grid>
    );
};

export default Booking;