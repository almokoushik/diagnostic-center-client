import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';

import avaPic from "../../../images/2.jpg"




import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PreviewIcon from '@mui/icons-material/Preview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MedicationIcon from '@mui/icons-material/Medication';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GridViewIcon from '@mui/icons-material/GridView';
import LogoutIcon from '@mui/icons-material/Logout';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const drawerWidth = 240;

export default function Navigation(props: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { user, loginUser,
    logoutUser, loading } = useAuth()

  const navButton = {
    textDecoration: "none",
    color: "white"
  }
  const handleLogout = (e) => {
    e.preventDefault();
    handleCloseUserMenu();
    logoutUser();
  }

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon:<HomeIcon></HomeIcon>},
    {
      name: "About",
      path: "/about",
      icon:<InfoIcon></InfoIcon>},
    {
      name: "Services",
      path: "/services",
      icon:<MiscellaneousServicesIcon></MiscellaneousServicesIcon>},
    {
      name: "Reviews",
      path: "/review",
      icon:<PreviewIcon></PreviewIcon>},
    {
      name: "Blog",
      path: "/blog",
      icon:<AssignmentIcon></AssignmentIcon>},
    {
      name: "Contact Us",
      path: "/contact",
      icon:<PermContactCalendarIcon></PermContactCalendarIcon>},
    {
      name: "Appointment",
      path: "/appointment",
      icon:<MedicationIcon></MedicationIcon>}]


  const menuItemLoggedIn = [
    {
      name: "Profile",
      path: "/profile",
      icon:<ManageAccountsIcon></ManageAccountsIcon>},
    {
      name: "Dashboard",
      path: "/dashboard",
      icon:<GridViewIcon></GridViewIcon>},
    {
      name: "Logout",
      path: "/",
      icon:< LogoutIcon></LogoutIcon>},
  ]


  const drawer = (
    <div>
       {/* <Toolbar /> */}
      <Typography variant="h5" gutterBottom  sx={{pl:2,pt:5}}>
        Diagnostic Center
      </Typography>
      {/* <Toolbar /> */}
     
      <Divider />

      <List >
        {menuItems.map((text, index) => (
         
          <Link  key={index} to={`${text.path}`}style={{display:"flex",justifyContent:"start" , margin:"10px",textDecoration:"none" ,color:"black", fontSize:"40px",alignItems:"center"}} >
        
              {text.icon}
         
            <ListItemText sx={{ml:5}} primary={text.name} />
          </Link>
         
        ))}
      </List>
      <Divider />


      <List>
        {
        user.email?
        (
        
        menuItemLoggedIn.map((text, index) => (
          <NavLink  style={{display:"flex",justifyContent:"start" , margin:"10px",fontSize:"40px",textDecoration:"none" ,color:"black",alignItems:"center"}} onClick={text.name==="Logout"&& handleLogout} button key={index} to={`${text.path}`}>
           
              {text.icon}
            
            <ListItemText sx={{ml:5}} primary={text.name} />
          </NavLink>
        ))):

        <Link button  to={"/login"}style={{display:"flex",fontSize:"40px",justifyContent:"center" ,margin:"10px",textDecoration:"none" ,color:"black",alignItems:"center"}} >
        
        <LockOpenIcon></LockOpenIcon>
   
      <ListItemText sx={{ml:5}} primary={"Login"} />
    </Link>
        
        }
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",


        }} s

      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Diagnostic Center
          </Typography>


          <Box transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }} style={{ marginLeft: "auto" }} sx={{ display: { xs: "none", md: "block" } }}>

            <Link to="/home" style={navButton}> <Button color="inherit">Home</Button></Link>

            <Link to="/about" style={navButton}> <Button color="inherit">About</Button></Link>

            <Link to="/services" style={navButton}> <Button color="inherit">Services</Button></Link>

            <Link to="/review" style={navButton}> <Button color="inherit">Reviews</Button></Link>

            <Link to="/blog" style={navButton}> <Button color="inherit">Blog</Button></Link>

            <Link to="/contact" style={navButton}> <Button color="inherit">Contact Us</Button></Link>

            <Link to="/appointment" style={navButton}> <Button color="inherit">Appointment</Button></Link>

            {user?.email ? <>
              <Tooltip title="Open settings">
                <IconButton
                  color="inherit"
                  onClick={handleOpenUserMenu} sx={{ p: 0, mx: 3, overflow: "hidden" }}>
                  <Avatar style={{ fontSize: "24px" }} alt="Remy Sharp" src={avaPic} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Box sx={{ width: "350px" }}>
                  <Link to="/profile" style={navButton} > <MenuItem sx={{ color: "black", fontWeight: "450" }} onClick={handleCloseUserMenu}>Profile</MenuItem></Link>

                  <Link to="/dashboard" style={navButton} > <MenuItem sx={{ color: "black", fontWeight: "450" }} onClick={handleCloseUserMenu}>Dashboard</MenuItem></Link>

                  <Link to="/" style={navButton}>
                    <MenuItem sx={{ color: "black", fontWeight: "450" }} onClick={handleLogout}>Logout</MenuItem>

                  </Link>

                </Box>

              </Menu>

            </> :

              <Link to="/login" style={navButton}> <Button color="inherit">Login</Button></Link>}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>


        <Drawer
          variant="temporary"
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          close
        >
          {drawer}
        </Drawer>


      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
