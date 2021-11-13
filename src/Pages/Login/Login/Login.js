import { Alert, Button, Container, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const { user, loginUser, loading, signInWithGoogle, authError} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        loginUser(data?.email, data?.password, location, history);
  };
    const handleGoogleLogin = (data) => {
        signInWithGoogle(location, history)
    };
    
    return (
        <>
            <Header />
                <Container>
                    <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d', mt: 5, mb: 5 }} variant="h4">*Please Login</Typography>
                    {user?.email && <Alert style={{ width: '37.8%' }} severity="success">Log in Successfully</Alert>}
                    {authError && <Alert style={{ width: '37.8%' }} severity="error">{authError}</Alert>}
                    {!loading && <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">Your Email</Typography>
                        <input type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">Your Password</Typography>
                        <input type="password" placeholder="Password" {...register("password", {required: true})} />

                        <Button style={{ width: '12%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '4rem',}} type="submit">Login</Button>
                    </form>}
                        {loading && <CircularProgress style={{color: '#ff5a3c'}} />}
                    <NavLink style={{ textDecoration: 'none' }} to="/signup">
                        <Button style={{ color: '#0a2c3d', fontSize: '1.1rem', marginBottom: '2rem'}} variant="text" type="submit">New User? Please Sign Up</Button>
                    </NavLink>
                    <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d' }} variant="h5">- - - - - - - - - - - - - - - - - OR - - - - - - - - - - - - - - - - -</Typography>
                    <Button onClick={handleGoogleLogin} style={{ width: '20%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '3rem', marginBottom: '2rem' }} type="submit">Login With Google</Button>
                </Container>
            <Footer/>
        </>
    );
};

export default Login;