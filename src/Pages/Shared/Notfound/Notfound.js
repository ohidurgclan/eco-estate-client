import { Container, Typography } from '@mui/material';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Notfound = () => {
    return (
    <>
        <Header />
            <Container style={{marginTop: '8rem', marginBottom: '8rem'}}>
                <Typography sx={{ fontFamily: 'ubuntu', fontSize: '20rem', fontWeight: '700', color: '#0a2c3d', textAlign: 'center', opacity: '20%' }} variant="h1">404</Typography>
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '700', color: '#0a2c3d', textAlign: 'center', }} variant="h2">We are Sorry! Page Not Found.</Typography>
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '700', color: '#0a2c3d',textAlign: 'center', mt: 2, }} variant="h6">The Page You Are Looking For Might Have Been Removed, If Had Then It's Name Changed Or Unavailable.</Typography>
            </Container>
        <Footer />
    </>
    );
};

export default Notfound;