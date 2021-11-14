import { Alert, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';

const CreateAdmin = () => {
    const [adminSuccess, setAdminSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const adminSubmit = e => {
        const user = { email };
        fetch('https://mighty-mountain-95987.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setAdminSuccess(true)
                }
            })
        e.preventDefault();
    };
    
    
    return (
        <Container style={{ marginTop: '10rem', marginBottom: '10rem'}}>
            {adminSuccess && <Alert style={{ width: '50%' }} severity="success">New Admin Successfully Added * Congratulations *</Alert>}
            <form className="login-form" onSubmit={adminSubmit}>
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#0a2c3d', mb: 4 }} variant="h4">Create Admin With Email</Typography>
                <input onBlur={handleOnBlur} type="email" placeholder="Email" required />
                <Button style={{ width: '15%', height: '2.5rem', backgroundColor: '#ff5a3c', color: '#fff', marginTop: '4rem',}} type="submit">Make Admin</Button>
            </form>
        </Container>
    );
};

export default CreateAdmin;