import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt:5 }}>
            <AppBar style={{backgroundColor: '#0A2C3D' }}  position="static">
                <Toolbar>
                    <Typography style={{ fontFamily: 'ubuntu', fontWeight: '500', margin: '3vmin', textAlign: 'center' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Copyright © 2021 Eco-Estate All Rights Reserved.
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Footer;