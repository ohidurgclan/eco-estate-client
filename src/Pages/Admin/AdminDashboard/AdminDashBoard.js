import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, useRouteMatch, NavLink } from "react-router-dom";
import CreateAdmin from '../CreateAdmin/CreateAdmin';
import AddService from '../AddService/AddService';
import Payment from '../Payment/Payment';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageOrder from '../ManageOrder/ManageOrder';
import PrivateRoute from '../../Login/PrivareRoute/PrivateRoute';
import MyOrder from '../../User/MyOrder/MyOrder';
import MyFeedback from '../../User/MyFeedback/MyFeedback';
import ManageProduct from '../ManageProduct/ManageProduct';

const drawerWidth = 240;

const AdminDashBoard = (props) => {
    const { window } = props;
    const { admin, logOut } = useAuth();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
      <div>
    <Toolbar>
        <Typography style={{ fontFamily: 'ubuntu', fontWeight: '700', color: '#0a2c3d', fontSize: '1.1rem'}} sx={{ m: 5 }} variant="h6" noWrap component="div">
            Dashboard
        </Typography>      
    </Toolbar>
      <Divider />
        <List>
          <ListItem>
                  {admin ? <Box  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '3rem' }}>
                    <NavLink to={ `${url}/makeAdmin` } style={{ fontFamily: 'ubuntu', fontWeight: '400', color: '#0a2c3d', fontSize: '1.2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Make Admin</NavLink>
                    <NavLink to={`${url}/addProducts`} style={{ fontFamily: 'ubuntu', fontWeight: '400', color: '#0a2c3d', fontSize: '1.2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Add Services</NavLink>
                    <NavLink to={ `${url}/manageProduct` } style={{ fontFamily: 'ubuntu', fontWeight: '400', color: '#0a2c3d', fontSize: '1.2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Manage Product</NavLink> 
                    <NavLink to={`${url}/manageOrder`} style={{ fontFamily: 'ubuntu', fontWeight: '400', color: '#0a2c3d', fontSize: '1.2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Manage Order</NavLink>
                    <NavLink to={ `${url}/paymentProcess` } style={{ fontFamily: 'ubuntu', fontWeight: '400', color: '#0a2c3d', fontSize: '1.2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Payment</NavLink> 
                  </Box> :
                  <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '3rem' }}>
                    <NavLink to={ `${url}/myOrders` } style={{ fontFamily: 'ubuntu', fontWeight: '400', color: '#0a2c3d', fontSize: '1.2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>My Orders</NavLink> 
                    <NavLink to={ `${url}/myFeedback` } style={{ fontFamily: 'ubuntu', fontWeight: '400', color: '#0a2c3d', fontSize: '1.2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>My Review</NavLink>
                    <NavLink to={ `${url}/paymentProcess` } style={{ fontFamily: 'ubuntu', fontWeight: '400', color: '#0a2c3d', fontSize: '1.2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Payment</NavLink>
                  </Box>}
            <ListItemText/>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
    
    return (
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <AppBar
          style={{backgroundColor: '#0a2c3d'}}
        position="fixed"
        sx={{
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
          <Box style={{ display: 'flex' }} >
              {admin ? <Typography sx={{ m: 5 }} variant="h6" noWrap component="div">Admin Backend Dashboard</Typography> : <Typography sx={{ m: 5 }} variant="h6" noWrap component="div">User Dashboard</Typography>}
              <NavLink to="/home" sx={{ m: 5 }} style={{ fontFamily: 'ubuntu', fontWeight: '400', color: '#fff', fontSize: '1.2rem', marginTop: '2.6rem', textDecoration: 'none' }}>Return Home</NavLink>
              <Button style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', color: '#fff', marginLeft: '2rem', textTransform: 'capitalize' }} onClick={logOut} variant="text">Logout</Button>
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
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
    <Toolbar />
      <Switch>
        <PrivateRoute path={`${path}/myOrders`}>
          <MyOrder></MyOrder>
        </PrivateRoute>
        <PrivateRoute path={`${path}/myFeedback`}>
          <MyFeedback></MyFeedback>
        </PrivateRoute>
        <PrivateRoute path={`${path}/paymentProcess`}>
          <Payment></Payment>
        </PrivateRoute>     
        <AdminRoute path={`${path}/addProducts`}>
          <AddService></AddService>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProduct`}>
          <ManageProduct></ManageProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <CreateAdmin></CreateAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageOrder`}>
          <ManageOrder></ManageOrder>
        </AdminRoute>   
      </Switch>     
      </Box>
    </Box>
    );
};

export default AdminDashBoard;