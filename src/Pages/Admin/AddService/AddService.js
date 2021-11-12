import { Container, Typography } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        
        axios.post('http://localhost:5030/services', data)
            .then(res => {
                if (res.data.insertedId)
                {
                    alert('added successfully');
                    reset();
                }
            });
    
    };



    return (
        <Container>
            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d', mt: 5 }} variant="h3">Add A Service</Typography>

            <form className="addService-form" onSubmit={handleSubmit(onSubmit)}>
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Add Product Key</Typography>
                    <input type="number" placeholder="Product Key" {...register("key", { required: true, maxLength: 9999 })} />
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Add Product Name</Typography>
                    <input type="text" placeholder="Product Name" {...register("name", { required: true, max: 150 })} />
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Add Product Location</Typography>
                    <input type="text" placeholder="Product Location" {...register("location", { required: true, max: 150 })} />
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Add Product Rating (Out of 5)</Typography>
                    <input type="number" placeholder="Product Rating" {...register("rate", { required: true, max: 5 })} />
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Add Product Price</Typography>
                    <input type="number" placeholder="Product Price" {...register("price", {})} />
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Add Product Status</Typography>
                    <input type="text" placeholder="Product Status" {...register("status", {})} />
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Add Product Details</Typography>
                    <textarea placeholder="Product Details" {...register("detail", {required: true, max: 600})} />
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h6">Add Hosted Product Image Link</Typography>
                    <input type="text" placeholder="Product Image Link" {...register("img", {})} />

            <input type="submit" />
          </form>  
        </Container>
    );
};

export default AddService;