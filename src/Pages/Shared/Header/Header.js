import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{backgroundColor: '#0A2C3D' }}  position="static">
                <Toolbar>
                    <Typography style={{ fontFamily: 'ubuntu', fontWeight: '600', margin: '4vmin' }} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Eco-Estate
                    </Typography>
                    <NavLink to="/home" style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', color: '#fff', marginRight: '2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Home</NavLink>
                    <NavLink to="/services" style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', color: '#fff', marginRight: '2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Explore</NavLink>
                    <NavLink to="/about" style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', color: '#fff', marginRight: '2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>About</NavLink>
                    <NavLink to="/contact" style={{ fontFamily: 'ubuntu', fontWeight: '400', fontSize: '1.2rem', color: '#fff', marginRight: '2rem', textDecoration: 'none' }} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Contact</NavLink>
                    <NavLink to="/login" style={{ fontFamily: 'ubuntu', fontWeight: '400',fontSize: '1.2rem', color: '#fff', marginRight: '2rem', textDecoration: 'none'}} activeStyle={{ fontWeight: "600", color: "#ff5a3c" }}>Login</NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;