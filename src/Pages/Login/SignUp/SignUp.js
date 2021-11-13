import { Alert, Button, Container, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './SignUp.css';

const SignUp = () => {
    const { user, registerUser, loading, authError} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const loginData = data => {
        if (data.password !== data.password2) {
            alert('Your Password Did not Match');
            return;
        }
        registerUser(data.email, data.password, location, history);
    };
    
    return (
        <Container>
            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d', mt: 5, mb: 5 }} variant="h4">*Please Ragister</Typography>
            {user?.email && <Alert style={{ width: '37.8%' }} severity="success">Registered Successfully</Alert>}
            {authError && <Alert style={{ width: '37.8%' }} severity="error">{authError}</Alert>}
            {!loading && <form className="signup-form" onSubmit={handleSubmit(loginData)}>
                    <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">Your Email</Typography>
                    <input type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">Your Password</Typography>
                    <input type="password"  placeholder="Password" {...register("password", {required: true})} />
                    <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">Retype Your Password</Typography>
                    <input type="password" placeholder="Retype Your Password" {...register("password2", {required: true})} />
                    <Button style={{ width: '12%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '4rem',}} type="submit">Sign Up</Button>
                </form>}
            {loading && <CircularProgress style={{color: '#ff5a3c'}} />}
            <NavLink style={{ textDecoration: 'none' }} to="/login">
                <Button style={{ color: '#0a2c3d', fontSize: '1.1rem', marginBottom: '2rem'}} variant="text" type="submit">Already Ragistered? Please Login</Button>
            </NavLink>
            <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">- - - - - - - - - - - - - - - - - OR - - - - - - - - - - - - - - - - -</Typography>
            <Button style={{ width: '20%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '3rem', marginBottom: '2rem' }} type="submit">Sign Up With Google</Button>
        </Container>
    );
};

export default SignUp;