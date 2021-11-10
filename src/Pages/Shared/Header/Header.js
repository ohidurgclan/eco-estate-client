import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{backgroundColor: '#0A2C3D' }}  position="static">
                <Toolbar>
                    <Typography style={{ fontFamily: 'ubuntu', fontWeight: '600', margin: '4vmin' }} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Eco-Estate
                </Typography>
                <Link to="/appoinment"><Button color="inherit">Get Appoinment</Button></Link>  
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;