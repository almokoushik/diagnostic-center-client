import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const {user,loginUser,
    logoutUser,loading}=useAuth()
         
  const navButton={
    textDecoration:"none",
    color:"white"
  }
  const handleLogout=()=>{
    logoutUser()
  }
  // const handleLogin=()=>{
  //   loginUser()
  // }

    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Doctors Portal
          </Typography>
          <Link to="/home"   style={navButton}> <Button color="inherit">Home</Button></Link>
         
          <Link to="/appointment"   style={navButton}> <Button color="inherit">Appointment</Button></Link>



        {user?.email?  <>
          <Link to="/dashboard"   style={navButton}> <Button color="inherit">Dashboard</Button></Link>
        <Link to="/" onClick={handleLogout}  style={navButton}> <Button color="inherit">Logout</Button></Link>
        </>: 
        
        <Link to="/login"style={navButton}> <Button color="inherit">Login</Button></Link>}
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;