import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';

const ManageOrder = () => {
    const [orderBooking, setOrderBooking] = React.useState([]);
    const handleUpdate = (id) => {
    const updateStatus = { status: "Approved" };
    const url = `https://mighty-mountain-95987.herokuapp.com/user_order/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Updated Succefully");
          fetch(`https://mighty-mountain-95987.herokuapp.com/user_order`)
            .then((res) => res.json())
            .then((data) => {
              setOrderBooking(data);
            });
        }
      });
    };
    React.useEffect(() => {
    fetch(`https://mighty-mountain-95987.herokuapp.com/user_order`)
      .then((res) => res.json())
      .then((data) => {
        setOrderBooking(data);
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
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}} align='right'>Update</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orderBooking.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.orderName}</TableCell>
                            <TableCell>{row.serviceName}</TableCell>
                            <TableCell>{row.orderMail}</TableCell>
                            <TableCell>{row.mobile}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell align='right'><Button onClick={() => handleUpdate(row._id)} variant="contained" size="small">Update Status</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageOrder;