import React from 'react';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// Contact Image
import img1 from '../homeImage/contact.jpg';

const HomeContact = () => {
    return (
        <Container>
            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d', mt: 5 , mb:5 }} variant="h4">*Who We Are</Typography>
            <Grid container spacing={3}>
                <Grid style={{ padding: '2rem'}} item xs={12} md={6} sm={6}>
                    <Paper elevation={0}>
                        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h4">We Provide You The Best Service
                            Of Real Estate Industries</Typography>
                        <Typography sx={{ fontFamily: 'ubuntu',padding: '0.5rem', marginTop: '0.5rem', color: '#0a2c3d'}} variant="subtitle1" gutterBottom>
                            Building when an unknown printer took a galley of type and scram bled it to make a type specimen book.
                            It has survived not only five centuries, but also the leape.<br/><br/>when an unknown printer took a galley of type andetry
                            scram bled it to make a type specimen bookhas survived not only centuriesalwith the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6} sm={6}>
                    <Paper elevation={0}>
                        <img style={{ width: '100%', height: '100%', marginTop: '1.5rem' }} src={img1} alt="rent a home" loading="lazy" />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
export default HomeContact;