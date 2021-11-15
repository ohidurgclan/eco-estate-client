import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useAuth from '../../../hooks/useAuth';
import MoreIcon from '@mui/icons-material/MoreVert';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

    const Header = () => {
    const { user, logOut } = useAuth();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to="/home" style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Home</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/services" style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', marginRight: '2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Explore</NavLink>
      </MenuItem>
      { user?.email ? <Box><MenuItem> <NavLink to="/admindashboard" style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', marginRight: '2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Dashboard</NavLink> </MenuItem> <MenuItem><Button
        style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', textTransform: 'capitalize' }}
        onClick={logOut} variant="text">Logout</Button> </MenuItem></Box> : 
        <Box>
            <MenuItem><NavLink to="/login"
            style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', marginRight: '2rem', textDecoration: 'none' }}
            activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Login</NavLink> </MenuItem>
                <MenuItem><NavLink to="/signup"
                    style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', textDecoration: 'none' }}
                    activeStyle={{ fontWeight: "600", color: "#ff5a3c", marginTop: '2rem' }}>Ragister</NavLink>
            </MenuItem>          
        </Box> }
    </Menu>
  );
    
    
    // const { user, logOut } = useAuth();
return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'rgb(10, 44, 61)' }}>
        <Toolbar>
            <Typography style={{ fontFamily: 'ubuntu', fontWeight: '600'}} variant="h4" component="div"
                sx={{ flexGrow: 1 }}>
                Eco-Estate
            </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <NavLink to="/home"
                style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', color: '#fff', margin: '2rem', textDecoration: 'none' }}
                activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Home</NavLink>
            <NavLink to="/services"
                style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', color: '#fff', margin: '2rem', textDecoration: 'none' }}
                activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Explore</NavLink>
                {user?.email ? <Button
                    style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem',margin: '1rem', color: '#fff', textTransform: 'capitalize' }}
                    onClick={logOut} variant="text">Logout</Button>
                    :
                <Box style={{ margin: '2rem' }}>
                    <NavLink to="/login"
                        style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem',marginRight: '2rem', color: '#fff', marginRight: '2rem', textDecoration: 'none' }}
                        activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Login</NavLink>
                    <NavLink to="/signup"
                        style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', marginLeft: '2rem', color: '#fff', textDecoration: 'none' }}
                        activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Ragister</NavLink>
                </Box>}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}



export default Header;