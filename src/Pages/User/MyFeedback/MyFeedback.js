import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MyFeedback = () => {
    const { user } = useAuth();
    const [item, setItem] = React.useState([]);
    const deleteFeedback = (id) => {
    const url = `https://mighty-mountain-95987.herokuapp.com/user_review/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
      if (data.deletedCount) {
        alert("Feedback Deleted");
        const deleteItem = item.filter(book => book._id !== id);
        setItem(deleteItem);
      }
      });
    }; 
    React.useEffect(() => {
        fetch(`https://mighty-mountain-95987.herokuapp.com/user_review/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
            setItem(data);
        });
    }, [user.email]); 
    
    return (
        <Container style={{marginTop: '5rem'}}>    
            <TableContainer component={Paper} elevation={4}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow >
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>My Feedback</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Service Name</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Feedback Name</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}} align='right'>Cancil Feedback</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {item.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.review}</TableCell>
                            <TableCell>{row.serviceName}</TableCell>
                            <TableCell>{row.feedbackName}</TableCell>
                            <TableCell align='right'><Button onClick={() => deleteFeedback(row._id)} variant="contained" size="small">Cancel</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MyFeedback;<h2>I am my feedback</h2>