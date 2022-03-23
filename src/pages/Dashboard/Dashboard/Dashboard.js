import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GridViewIcon from '@mui/icons-material/GridView';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import MedicationIcon from '@mui/icons-material/Medication';

import LogoutIcon from '@mui/icons-material/Logout';

import useFirebase from '../../../hooks/useFirebase';
import { NavLink } from 'react-router-dom';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import {
    Routes,
    Route,
    Link,

} from "react-router-dom";
import AddDoctor from '../AddDoctor/AddDoctor';
import AddAdmin from '../AddAdmin/AddAdmin';
import DashboardHome from '../DashboradHome/DashboardHome';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import AdminLogin from '../../Login/AdminLogin/AdminLogin';
const drawerWidth = 240;

function Dashboard(props) {


    const {
        admin,
        logoutUser
    } = useFirebase()





    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const icons = [<CalendarMonthIcon></CalendarMonthIcon>, <HelpOutlineIcon></HelpOutlineIcon>, <MedicationIcon></MedicationIcon>, <SettingsIcon></SettingsIcon>]


    const drawer = (

        <div  >
            <Toolbar />
            <List >

                <NavLink style={{ color: "black", textDecoration: "none" }} to="/">

                    <ListItem button key={"Logout"}>
                        <ListItemIcon>
                            <HomeIcon></HomeIcon>
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>

                </NavLink>

                <NavLink style={{ color: "black", textDecoration: "none" }} to="">

                    <ListItem button key={"Logout"}>
                        <ListItemIcon>
                            <GridViewIcon></GridViewIcon>
                        </ListItemIcon>
                        <ListItemText primary={"Dashboard"} />
                    </ListItem>

                </NavLink>

                {/* <Link to="addDoctor">Add Doctor</Link> */}

                {
                    admin && <>
                        <NavLink style={{ color: "black", textDecoration: "none" }} to="addDoctor">

                            <ListItem button key={"Logout"} >
                                <ListItemIcon>
                                    <VaccinesIcon></VaccinesIcon>
                                </ListItemIcon>
                                <ListItemText primary={"Add Doctor"} />
                            </ListItem>

                        </NavLink>

                        <NavLink style={{ color: "black", textDecoration: "none" }} to={`addAdmin`}>

                            <ListItem button key={"Logout"}>
                                <ListItemIcon>
                                    <AdminPanelSettingsIcon></AdminPanelSettingsIcon>
                                </ListItemIcon>
                                <ListItemText primary={"Add Admin"} />
                            </ListItem>

                        </NavLink>


                        <NavLink style={{ color: "black", textDecoration: "none" }} to={`patients`}>

                            <ListItem button key={"Logout"}>
                                <ListItemIcon>
                                    <PeopleOutlineIcon></PeopleOutlineIcon>
                                </ListItemIcon>
                                <ListItemText primary={"Patients"} />
                            </ListItem>

                        </NavLink>
                    </>
                }

            </List>

            <List>
                {['Appointment', 'About Me', 'Prescriptions', 'Setting'].map((text, index) => (
                    <Link key={index} style={{ color: "black", textDecoration: "none" }} to={`${text.toLocaleLowerCase()}`}>
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {icons[index]}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}

            </List>

            <Toolbar /> <Toolbar />

            <List >
                <ListItem button key={"Logout"} onClick={logoutUser}>
                    <ListItemIcon>
                        < LogoutIcon></ LogoutIcon>
                    </ListItemIcon>
                    <ListItemText primary={"Logout"} />
                </ListItem>
            </List>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                color="transparent"
                position="fixed"
                sx={{
                    border: "none",
                    boxShadow: "none",
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
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

                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer


                    variant="permanent"
                    sx={{

                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>



            {/* content box */}
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                {/* If route content doesn't show then use outlet
                <Outlet /> */}

                <Routes>
                    <Route path="/" element={<DashboardHome></DashboardHome>}>
                    </Route>


                    <Route path={`/addAdmin`} element={
                        <AdminLogin>
                            <AddAdmin></AddAdmin>
                        </AdminLogin>
                    }>
                    </Route>

                    <Route path={`/addDoctor`} element={
                        <AdminLogin>
                            <AddDoctor></AddDoctor>
                        </AdminLogin>
                    }>
                    </Route>

                    {/* <Route path={`/patients`} element={ <MedicationIcon></MedicationIcon>}>
                    </Route> */}

                </Routes>

            </Box>
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
