import { Button, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';
import LocationIcon from '@mui/icons-material/RoomRounded';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './UserPrivate.css';
import useAuth from '../../../hooks/useAuth';

const UserPrivate = () => {
    const { user } = useAuth();
    const [services] = useServices();
    const { serviceKey } = useParams();
    const [singleService, setSingleService] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const reviewData = (data) => {
        data.serviceName = singleService?.name;
        axios.post('http://localhost:5030/user_review', data)
            .then(res => {
                if (res.data.insertedId)
                {
                    alert('added successfully');
                    reset();
                }
            });
    };
    
    const orderData = (orderItem) => {
        orderItem.serviceName = singleService?.name;
        orderItem.userEmail = user?.email;
        axios.post('http://localhost:5030/user_order', orderItem)
            .then(res => {
                if (res.data.insertedId)
                {
                    alert('added successfully');
                    reset();
                }
            });
    };

    useEffect(() =>
    {
        const foundService = services.find(service => service.key === serviceKey);
        setSingleService(foundService);
    }, [services]);
    return (
        <Container style={{ marginTop: '4rem', marginBottom: '4rem' }} sx={{textAlign: 'center', fontFamily: 'ubuntu'}}>
            <Grid container spacing={5}>
                <Grid style={{ marginTop: '6rem', marginBottom: '4rem' }} item xs={7} md={7} sm={7}>
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
                    <Paper elevation={2}>
                        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h4">Give Feedback</Typography>
                        <form className="review-form" onSubmit={handleSubmit(reviewData)}>
                            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Your Hosted Image Link</Typography>
                            <input type="text" placeholder="Image Link" {...register("Image Url", {required: false})} />
                            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Your Name</Typography>
                            <input type="text" placeholder="name" {...register("feedbackName", {required: false, max: 200})} />
                            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Your Review</Typography>
                            <textarea {...register("review", {required: false, max: 300})} />
                            <Button style={{ width: '40%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '2rem',}} type="submit">Feedback</Button>
                        </form>
                    </Paper>
                    <Paper elevation={2}>
                        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h4">Place Order</Typography>
                        <form className="order-form" onSubmit={handleSubmit(orderData)}>
                            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Your Name</Typography>
                            <input type="text" placeholder={user?.name} {...register("orderName", {required: false, max: 200})} />
                            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Your Email</Typography>
                            <input type="email" placeholder={user?.email} {...register("orderMail", { required: false, pattern: /^\S+@\S+$/i })} />
                            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Your Phone Number</Typography>
                            <input type="number" placeholder="Phone Number" {...register("mobile", { required: false })} />
                            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Your Address</Typography>
                            <input type="text" placeholder="Address" {...register("address", { required: false })} />
                            <Button style={{ width: '40%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '2rem',}} type="submit">Place Order</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UserPrivate;