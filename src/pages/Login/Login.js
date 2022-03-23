import React, { useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from "../Shared/Footer/Footer"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import loginImage from "../../images/login.png"
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../hooks/useAuth';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import GoogleIcon from '@mui/icons-material/Google';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
const loginButton = {
    background: 'linear-gradient(90deg, #4ddee6, #1dc0c9)',
    color: "white",
    padding: " 5px 30px",
    width: "100%"
}



const Login = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const { user,
        registerUser,
        loginUser,
        logoutUser,
        loading ,loginWithGoogle,
        loginWithFacebook,
        loginWithGithub} = useAuth()

    const [login, setLogin] = useState(false)
    const [error, setError] = useState({
        email: false,
        password: false,
        password2: false
    })

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })


    const handleLoginFormSubmit = async e => {
        e.preventDefault()
        if (formData.email && formData.password && formData.password.length > 0 && formData.email.length > 0) {
            e.target[0].value = ""
            e.target[1].value = ""
            await loginUser(formData.email, formData.password, () => {
                navigate(state.path || "/", { replace: true });
            });
        }
        else {
            return;
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
            else {
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
    }

    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ flexGrow: 1, my: 5 }}>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 8 }}>
                    <Grid item xs={4} md={4} lg={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                            }}
                        >
                            <NavLink to="/register" style={{ textDecoration: "none" }} >
                                <Typography variant="h6">Sign In</Typography>
                            </NavLink>

                            {!loading ? <form onSubmit={handleLoginFormSubmit}>
                                <TextField onBlur={handleBlur} id="standard-basic"
                                    error={error.name}
                                    helperText={!error.name ? "" : "Incorrect Format"}

                                    label="Username" type="email" name="email" fullWidth variant="standard" />
                                <br></br>
                                <br></br>
                                <TextField onBlur={handleBlur} id="standard-basic" label="Password" name="password" type="password" fullWidth variant="standard"
                                    error={error.password}
                                    helperText={!error.password ? "" : "Length must be 8 with 1 [A-Z] 1[a-z] 1[!@#$%^&*] 1 [1-9]"}

                                />
                                <br></br>
                                <br></br>
                                <br></br>
                                <Button type="submit" style={loginButton}>Log In</Button>
                                <Box mt={2}>
                                    <Divider  >Or Sign In With</Divider>
                                </Box>
                                <Stack
                                    mt={3}
                                    direction={{ xs: 'column', sm: 'row' }}
                                    spacing={{ xs: 1, sm: 2, md: 3 }}

                                    alignItems="around" justifyContent="space-between" >
                                    <Button onClick={()=>{loginWithGoogle(()=>navigate(state.path || "/", { replace: true }))}} variant="outlined" startIcon={<GoogleIcon color="primary" />}>
                                        Google
                                    </Button>
                                    <Button onClick={()=>{loginWithFacebook(()=>navigate(state.path || "/", { replace: true }))}} variant="outlined" startIcon={<FacebookIcon />}>
                                        Facebook
                                    </Button>
                                    <Button onClick={()=>loginWithGithub(()=>navigate(state.path || "/", { replace: true }))} variant="outlined" startIcon={<GitHubIcon />}>
                                        Github
                                    </Button>

                                </Stack>

                            </form> : <CircularProgress />}
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                        <img style={{ width: "100%" }} src={loginImage} alt="" />
                    </Grid>
                </Grid>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Login;