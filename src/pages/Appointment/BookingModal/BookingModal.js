import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid grey',
    borderRadius: "5px",
    boxShadow: 24,
    p: 3,
    textAlign: 'center',
};

const bookingModalButton = {
    background: 'linear-gradient(90deg, #4ddee6, #1dc0c9)',
    color: "white",
    padding: " 5px 20px",

}

const BookingModal = ({ open, setOpen, booking,date,successAlert,setSuccessAlert }) => {
    const { name, id, spaces, time } = booking;
    const {user}=useAuth()
   

    let userDetail={
        name:user.displayName,
        email:user.email,
        time:time,
        date:date.toLocaleDateString()
    }

    const [order,setOrder]=useState({
       ...userDetail
    })


    const handleBlur=e=>{
        const newDetail={...order}
           newDetail[e.target.name]=e.target.value;
            setOrder(newDetail)
            console.log(e.target.name,e.target.value)
    }
    
    const handleSubmit=e=>{
        setOpen(false)
       
        fetch("https://diagnostic-center-backend.herokuapp.com/addBooking",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data. insertedId){
                setSuccessAlert(true);
            }
        })
        .catch(err=>console.log(err))
       
        //send data to database and do something
        e.preventDefault()
    }
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={()=>setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>

                        <form onSubmit={handleSubmit}>
                        
                        <TextField
                            sx={{ my: 2 }}
                            fullWidth
                            disabled
                            id="outlined-size-small"
                            size="small"
                            defaultValue={time}
                        />
                         <TextField
                            sx={{ my: 1 }}
                            fullWidth
                            onBlur={handleBlur}
                            id="outlined-size-small"
                            size="small"
                            name="phone"
                            label="Phone Number"
                            
                        />
                       
                        <TextField
                            sx={{ my: 1 }}
                            fullWidth
                            onBlur={handleBlur}
                            id="outlined-size-small"
                            size="small"
                            label="Your Name"
                            name="name"
                            defaultValue={user.displayName}
                        />
                       
                        <TextField
                            sx={{ my: 1 }}
                            fullWidth
                            onBlur={handleBlur}
                            id="outlined-size-small"
                            size="small"
                            label="Email"
                            name="email"
                            defaultValue={user.email}
                            
                        />

                        <TextField
                            disabled
                            sx={{ my: 2 }}
                            fullWidth
                            id="outlined-size-small"
                            size="small"
                            defaultValue={date.toDateString()}
                            label="Appointment Date mm/dd/yy"
                        />
                        <  Box  sx={{ display:"flex",justifyContent:"right"}}>
                            <Button  type="submit" style={bookingModalButton}>Submit</Button>


                          

                        </ Box>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default BookingModal;