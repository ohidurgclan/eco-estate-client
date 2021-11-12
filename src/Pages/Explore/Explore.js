import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import useServices from '../../hooks/useServices';
import Services from '../Shared/Services/Services';

const Explore = () => {
    const [services] = useServices();
    return (
        <Container>
            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d', mt: 5 , mb:5 }} variant="h4">*Our Services</Typography>
            <Grid container spacing={3}>
            {
                services.map(service => <Services
                    key={service.key}
                    service={service}
                ></Services>)
            }
            </Grid>
        </Container>
    );
};

export default Explore;