import { CardMedia, Container, Grid, Paper, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';
import LocationIcon from '@mui/icons-material/RoomRounded';
import { Box } from '@mui/system';

const UserPrivate = () => {
    const [services] = useServices();
    const { serviceKey } = useParams();
    const [singleService, setSingleService] = useState({});

    useEffect(() =>
    {
        const foundService = services.find(service => service.key === serviceKey);
        setSingleService(foundService);
    }, [services]);
    return (
        <Container style={{ marginTop: '4rem', marginBottom: '4rem' }} sx={{textAlign: 'center', fontFamily: 'ubuntu'}}>
            <Grid container spacing={0}>
                <Grid item xs={7} md={7} sm={7}>
                    <Paper sx={{ mb: 5, height: '45rem' }} elevation={2}>
                        <CardMedia
                            style={{ padding: '0.5rem', width: '97.5%' }}
                            component="img"
                            image={singleService?.img}
                            alt={singleService?.name}
                        />
                    <Typography sx={{ fontFamily: 'ubuntu',textAlign: 'left', color: '#0a2c3d', m: '1.5rem' }} variant="h4">{singleService?.name}</Typography>
                    <Box style={{ display: 'flex', textAlign: 'left', margin: '1.5rem'}}>
                        <LocationIcon sx={{ color: '#ff5a3c', fontSize: '2rem', }}/>
                        <Typography sx={{ fontFamily: 'ubuntu', color: '#0a2c3d', marginLeft: '0.2rem' }} variant="h6">{singleService?.location}</Typography>
                        </Box>
                    <Box style={{display: 'flex', justifyContent: 'space-between', margin: '1.5rem' }}>
                    <Rating name="read-only" value={singleService?.rate} readOnly />
                    <Typography sx={{ fontFamily: 'ubuntu', color: '#0a2c3d', }} variant="h6">
                        Price: $ {singleService?.price}
                    </Typography>       
                        </Box>
                    <Typography sx={{ fontFamily: 'ubuntu', textAlign: 'left', color: '#0a2c3d', m: '1.5rem', mb: 5 }} variant="subtitle1">
                    {singleService?.detail}
                </Typography>
                    </Paper>
                </Grid>
                <Grid style={{ zIndex: '99' }} item xs={5} md={5} sm={5}>
                    <Paper elevation={0}>
                        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d', pb: 3 }} variant="h5">Rent a Home</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UserPrivate;