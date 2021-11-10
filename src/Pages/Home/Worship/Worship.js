import React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import buy from '../homeImage/icon/buy.png';
import rent from '../homeImage/icon/rent.png';
import sell from '../homeImage/icon/sell.png';


const Worship = () => {
    return (
        <Container sx={{textAlign: 'center', fontFamily: 'ubuntu', mb: 5}}>
            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '600', mb: '6vmin' }} variant="h3">Our Business</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} sm={6}>
                    <Paper elevation={3}>
                        <img style={{ marginTop: '8vmin' }} src={buy} alt="buy a home" loading="lazy" />
                        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500' }} variant="h4">Buy a Home</Typography>
                        <Typography sx={{ fontFamily: 'ubuntu',padding: '20px', marginTop: '20px'}} variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>
                        <Button style={{ marginBottom: '5vmin' }} variant="text">Find a Home</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <Paper elevation={3}>
                        <img style={{ marginTop: '8vmin' }} src={rent} alt="rent a home" loading="lazy" />
                        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500' }} variant="h4">Rent a Home</Typography>
                        <Typography sx={{ fontFamily: 'ubuntu',padding: '20px', marginTop: '20px'}} variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>
                        <Button style={{ marginBottom: '5vmin' }} variant="text">Find a Home</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <Paper elevation={3}>
                        <img style={{ marginTop: '8vmin' }} src={sell} alt="sell a home" loading="lazy" />
                        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500' }} variant="h4">Sell a Home</Typography>
                        <Typography sx={{ fontFamily: 'ubuntu',padding: '20px', marginTop: '20px'}} variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>
                        <Button style={{ marginBottom: '5vmin' }} variant="text">Find a Home</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Worship;