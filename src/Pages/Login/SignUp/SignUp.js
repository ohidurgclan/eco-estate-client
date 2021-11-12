import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
    
    return (
        <Container>
            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d', mt: 5, mb: 5 }} variant="h4">*Please Ragister</Typography>
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">Your Email</Typography>
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">Your Password</Typography>
                <input type="password" placeholder="Password" {...register("Password", {required: true})} />

                <Button style={{ width: '12%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '4rem',}} type="submit">Login</Button>
            </form>
            <NavLink style={{ textDecoration: 'none' }} to="/login">
                <Button style={{ color: '#0a2c3d', fontSize: '1.1rem', marginBottom: '2rem'}} variant="text" type="submit">Already Ragistered? Please Login</Button>
            </NavLink>
            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">- - - - - - - - - - - - - - - - - OR - - - - - - - - - - - - - - - - -</Typography>
            <Button style={{ width: '20%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '3rem', marginBottom: '2rem' }} type="submit">Sign Up With Google</Button>
        </Container>
    );
};

export default SignUp;