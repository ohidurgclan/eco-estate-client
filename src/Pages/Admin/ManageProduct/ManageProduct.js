import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';

const ManageProduct = () => {
    const [product, setProduct] = React.useState([]);
    const deleteProduct = (id) => {
    const url = `http://localhost:5030/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
      if (data.deletedCount) {
        alert("Product Item Deleted");
        const deleteItem = product.filter(book => book._id !== id);
        setProduct(deleteItem);
      }
      });
  };
    
    
    React.useEffect(() => {
    fetch(`http://localhost:5030/services`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

    return (
        <Container style={{marginTop: '5rem'}}>    
            <TableContainer component={Paper} elevation={4}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow >
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Service Name</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Location</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Rating</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Price</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}}>Status</TableCell>
                        <TableCell style={{color: '#ff5a3c', fontSize: '1.4rem', fontWeight: '500'}} align='right'>Delete Product</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {product.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.location}</TableCell>
                            <TableCell>{row.rate}</TableCell>
                            <TableCell>$ {row.price}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell align='right'><Button onClick={() => deleteProduct(row._id)} variant="contained" size="small">Delete</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageProduct;