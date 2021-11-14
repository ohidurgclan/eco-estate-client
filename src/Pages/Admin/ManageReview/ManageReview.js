import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';

const ManageReview = () => {
    const [review, setReview] = React.useState([]);
    const deleteFeedback = (id) => {
    const url = `http://localhost:5030/user_review/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
      if (data.deletedCount) {
        alert("Review Item Deleted");
        const deleteItem = review.filter(book => book._id !== id);
        setReview(deleteItem);
      }
      });
    }; 
    React.useEffect(() => {
        fetch(`http://localhost:5030/user_review/`)
        .then((res) => res.json())
        .then((data) => {
            setReview(data);
        });
    }, []); 
    
    return (
        <Container style={{marginTop: '5rem'}}>    
            <TableContainer component={Paper} elevation={4}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow >
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>User Review</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Service Name</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>User Name</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}} align='right'>Cancil Feedback</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {review.map((row) => (
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

export default ManageReview;