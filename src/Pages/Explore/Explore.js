import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import useServices from '../../hooks/useServices';
import Services from '../Shared/Services/Services';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Explore = () => {
    const [services] = useServices();
    return (
        <>
            <Header/>
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
            <Footer/>
        </>
    );
};

export default Explore;