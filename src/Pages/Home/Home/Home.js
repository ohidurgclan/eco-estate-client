import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useServices from '../../../hooks/useServices';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Services from '../../Shared/Services/Services';
import HomeSlider from '../HeaderSlider/HeaderSlider';
import HomeContact from '../HomeContact/HomeContact';
import Worship from '../Worship/Worship';

const Home = () => {
    const [services] = useServices();
    return (
        <>
            <Header/>
            <HomeSlider></HomeSlider>
            <Worship></Worship>
            <Container sx={{ mt: 5, mb: 5 }}>
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d', mt: 5 , mb:5 }} variant="h4">*Our Services</Typography>
                <Grid container spacing={3}>
            {
                services.slice(0, 6).map(service => <Services
                    key={service.key}
                    service={service}
                ></Services>)
            }
            </Grid>
            </Container>
            <HomeContact></HomeContact>
            <Footer/>
        </>
    );
};

export default Home;