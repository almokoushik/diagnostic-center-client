import { Container } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useAuth from '../../../hooks/useAuth';

const currencies = [
    {
        value: 'owner',
        label: 'Owner',
    },
    {
        value: 'main_admin',
        label: 'Main Admin',
    },
    {
        value: 'assistant_admin',
        label: 'Assistant Admin',
    }
];

const AddAdmin = () => {
    const {token}=useAuth()
    const [role,setRole]=useState("")
    const [open, setopen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));


    const handleClickOpen = () => {
        setopen(true)
    };

    const handleClose = () => {
        setopen(false);
    };
    const [admin, setAdmin] = useState({})

    const handleBlur = e => {
        const newAdmin = { ...admin }
        newAdmin[e.target.name] = e.target.value
        setAdmin(newAdmin)

    }

    const handleSubmit = e => {
        e.preventDefault()

        if (admin?.email && admin?.role) {
            //    Clear Formdata
            for (let i = 0; i < e.target.length; i++) {
                e.target[i].value = " ";

                // fetch()
                setAdmin({})

                document.getElementById("role").innerText = "";

            }



            fetch("https://diagnostic-center-backend.herokuapp.com/addAdmin",{
                method:"PUT",
                headers:{
                    "authorization":`Bearer ${token}`,
                    "content-type":"application/json"},
                body:JSON.stringify(admin)
            })
            .then(res=>res.json())
            .then(data=>{
               if(data?.upsertedCount>0){
                  setRole("Admin Added Successfully")
                handleClickOpen()
               }
               else if(data?.modifiedCount>0){
                setRole("Admin Modified Successfully")
              handleClickOpen()
             }
            })
            setAdmin({})
            

        }

        else {
            return;
        }


    }

    return (
        <Container sx={{ my: 5 }}>
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        minWidth: '400px',
                        maxWidth: '85%',
                    }}
                >
                    <TextField fullWidth
                        onBlur={handleBlur}
                        name="email" type="email" label="Enter Email" id="name" />
                </Box>


                <Box sx={{
                    my: 3, minWidth: '400px',
                    maxWidth: '85%',
                }}>
                    <TextField fullWidth
                        onBlur={handleBlur}
                        id="role"
                        select
                        label="Enter Role"
                        name="role"
                        defaultValue=""

                    >

                        {currencies.map((option) => (


                            <MenuItem key={option.value}
                                value={option.value} >
                                {option.label}

                            </MenuItem>

                        ))}

                    </TextField>
                </Box>
                <Button type="submit" variant="outlined">Submit Admin</Button>
            </form>
            {open&&
                <div>

                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {role}
                        </DialogTitle>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>

            }
        </Container>
    );
};

export default AddAdmin;