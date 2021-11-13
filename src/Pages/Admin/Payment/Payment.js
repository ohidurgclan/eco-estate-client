import { Container, Typography } from '@mui/material';
import React from 'react';

const Payment = () => {
    return (
        <Container style={{ marginTop: '10rem', marginBottom: '10rem' }}>
            <Typography style={{ fontFamily: 'ubuntu', fontWeight: '700', color: '#0a2c3d' }} sx={{ m: 5 }} variant="h2" noWrap component="div">
                    We Are Sorry...
            </Typography>
            <Typography style={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} sx={{ m: 5 }} variant="h3" noWrap component="div">
                Payment Process Coming Soon.
          </Typography>
        </Container>
    );
};

export default Payment;