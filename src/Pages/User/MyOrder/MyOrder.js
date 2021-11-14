import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const [booking, setBooking] = useState([]);
    const { user } = useAuth();
    // Delete Booking API
  const handleDelete = (id) => {
    const url = `http://localhost:5030/user_order/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Booking Item Deleted");
          const deleteItem = booking.filter(book => book._id !== id);
          setBooking(deleteItem);
        }
      });
  };

  // load data useEffect
    useEffect(() => {
    fetch(`http://localhost:5030/user_order/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);
    
    
    
    return (
        <Container style={{marginTop: '5rem'}}>    
            <TableContainer component={Paper} elevation={4}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow >
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Client Name</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Service Name</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Client Email</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Client Phone</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Status</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}} align='right'>Cancil Order</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {booking.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.orderName}</TableCell>
                            <TableCell>{row.serviceName}</TableCell>
                            <TableCell>{row.orderMail}</TableCell>
                            <TableCell>{row.mobile}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell align='right'><Button onClick={() => handleDelete(row._id)} variant="contained" size="small">Cancel</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrder;