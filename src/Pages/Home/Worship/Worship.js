import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';

const Worship = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <Typography variant="h2"> I am h2</Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Typography variant="h2"> I am h2</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Worship;