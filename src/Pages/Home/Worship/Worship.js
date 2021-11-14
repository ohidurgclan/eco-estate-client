import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import buy from '../homeImage/icon/buy.png';
import rent from '../homeImage/icon/rent.png';
import sell from '../homeImage/icon/sell.png';


const Worship = () => {
    return (
        <Container style={{ marginTop: '-8rem' }} sx={{textAlign: 'center', fontFamily: 'ubuntu', mb: 5}}>
            <Grid container spacing={4}>
                <Grid style={{ zIndex: '99' }} item xs={12} md={4} sm={4}>
                    <Paper elevation={2}>
                        <img style={{ marginTop: '1rem' }} src={buy} alt="buy a home" loading="lazy" />
                        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d', pb: 3 }} variant="h5">Buy a Home</Typography>
                    </Paper>
                </Grid>
                <Grid style={{ zIndex: '99' }} item xs={12} md={4} sm={4}>
                    <Paper elevation={2}>
                        <img style={{ marginTop: '1rem' }} src={rent} alt="rent a home" loading="lazy" />
                        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d', pb: 3 }} variant="h5">Rent a Home</Typography>
                    </Paper>
                </Grid>
                <Grid style={{ zIndex: '99' }} item xs={12} md={4} sm={4}>
                    <Paper elevation={2}>
                        <img style={{ marginTop: '1rem' }} src={sell} alt="sell a home" loading="lazy" />
                        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d', pb: 3 }} variant="h5">Sell a Home</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Worship;