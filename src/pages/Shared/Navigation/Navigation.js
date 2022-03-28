// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

// const Navigation = () => {
//   const {user,loginUser,
//     logoutUser,loading}=useAuth()

//   const navButton={
//     textDecoration:"none",
//     color:"white"
//   }
//   const handleLogout=()=>{
//     logoutUser()
//   }
//   // const handleLogin=()=>{
//   //   loginUser()
//   // }

// const [mobileOpen, setMobileOpen] = React.useState(false);

// const handleDrawerToggle = () => {
//   setMobileOpen(!mobileOpen);
// };

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//            Doctors Portal
//           </Typography>
//           <Link to="/home"   style={navButton}> <Button color="inherit">Home</Button></Link>

//           <Link to="/appointment"   style={navButton}> <Button color="inherit">Appointment</Button></Link>



//         {user?.email?  <>
//           <Link to="/dashboard"   style={navButton}> <Button color="inherit">Dashboard</Button></Link>
//         <Link to="/" onClick={handleLogout}  style={navButton}> <Button color="inherit">Logout</Button></Link>
//         </>: 

//         <Link to="/login"style={navButton}> <Button color="inherit">Login</Button></Link>}
//         </Toolbar>

//       </AppBar>
//     </Box>
//     );
// };

// export default Navigation;





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
import { Link } from 'react-router-dom';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import avaPic from "../../../images/2.jpg"
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';


const drawerWidth = 240;

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


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
  const handleLogout = () => {
    logoutUser()
  }
  // const handleLogin=()=>{
  //   loginUser()
  // }



  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",

        }}
      >
        <Toolbar>
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

            <Link to="/home" style={navButton}> <Button color="inherit">About</Button></Link>

            <Link to="/home" style={navButton}> <Button color="inherit">Services</Button></Link>

            <Link to="/home" style={navButton}> <Button color="inherit">Reviews</Button></Link>

            <Link to="/home" style={navButton}> <Button color="inherit">Blog</Button></Link>

            <Link to="/home" style={navButton}> <Button color="inherit">Contact Us</Button></Link>

            <Link to="/appointment" style={navButton}> <Button color="inherit">Appointment</Button></Link>

            {user?.email ? <>


              <Link to="/dashboard" style={navButton}> <Button color="inherit">Dashboard</Button></Link>
              
              <Link to="/" onClick={handleLogout} style={navButton}> <Button color="inherit">Logout</Button></Link>


              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

              <>
                <Tooltip title="Open settings">
                  <IconButton
                    color="inherit"
                    onClick={handleOpenUserMenu} sx={{ p: 0, mx: 3 }}>
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>

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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
