import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import loginImage from "../../images/login.png"
import loginImage from "../../images/img_vid/login.gif"
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import Alert from '@mui/material/Alert';
const loginButton = {
    background: 'linear-gradient(90deg, #4ddee6, #1dc0c9)',
    color: "white",
    padding: " 5px 30px",
    width: "100%"
}
const RegisterForm = () => {
    const navigate=useNavigate()
    const {user,registerUser,loading,authError}=useAuth()

    const [login, setLogin] = useState(false)

    const [error, setError] = useState({
        email: false,
        password: false,
        password2: false
    })
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        password2: ""
    })
    const handleRegSubmit = async e => {
        e.preventDefault()
        if (formData.password === formData.password2 && formData.password.length > 0 && formData.email.length > 0) {
            e.target[0].value = ""
            e.target[1].value = ""
            e.target[2].value = ""
            registerUser(formData.email,formData.password)
        }
        else {
            return
        }      
    }
    const handleBlur = e => {
        if (e.target.name === "email") {

            const re = /\S+@\S+\.\S+/;
            const err = (!re.test(e.target.value))
            if (err) {
                const newError = { ...error }
                newError.name = err
                setError(newError)
                return
            }
            else{
                const newData = { ...formData }
                newData.email = e.target.value;
                setFormData(newData)
                setError(false)
            }
        }
        else if (e.target.name === "password") {
            const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            const err = (!re.test(e.target.value))
            if (err) {
                const newError2 = { ...error }
                newError2.password = err
                setError(newError2)
                return
            }
            else {
                const newData = { ...formData }
                newData.password = e.target.value;
                setFormData(newData)
                setError(false)
            }
        }
        else if (e.target.name === "password2") {
          
            const err =!(formData.password === e.target.value);
            if (err) {
                const newError3 = { ...error }
                newError3.password2 = err
                setError(newError3)
                return
            }
            else {
                const newData = { ...formData }
                newData.password2 = e.target.value;
                setFormData(newData)
                setError(false)
            }
        }
    }
    return (
        <Container sx={{ flexGrow: 1, mt: 5,mb:2 }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 8 }}>
                <Grid item xs={4} md={4} lg={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    >
                        {user?.email&&  <Alert severity="success">User Created Successfully</Alert>}
                        {
                            (authError!==false) &&  <Alert severity="error">{authError}</Alert>
                        }
                        <NavLink to="/login" style={{ textDecoration: "none" }} >
                            <Typography variant="h6">Log In</Typography>
                        </NavLink>
                        <form onSubmit={handleRegSubmit}>
                            <TextField onBlur={handleBlur} id="standard-basic" label="Username" type="email" name="email" fullWidth variant="standard"
                                error={error.name}
                                helperText={!error.name ? "" : "Incorrect Format"}

                            />
                            <br></br>
                            <br></br>
                            <TextField onBlur={handleBlur} id="standard-basic" label="Password" name="password" type="password" fullWidth variant="standard"

                                error={error.password}
                                helperText={!error.password ? "" : "Length must be 8 with 1 [A-Z] 1[a-z] 1[!@#$%^&*] 1 [1-9]"}

                            />
                            <br></br>
                            <br></br>
                            <TextField onBlur={handleBlur} id="standard-basic" label="Enter Password Again" name="password2" fullWidth variant="standard"
                                type="password"
                                error={error.password2}
                                helperText={!error.password2 ? "" : "Password Doesn't Match"}

                            />
                            <br></br>
                            <br></br>
                            <br></br>
                            <Button type="submit" style={loginButton}>Register</Button>
                        </form>
                    </Box>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <img style={{ width: "100%" }} src={loginImage} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default RegisterForm;