import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import LocationIcon from '@mui/icons-material/RoomRounded';


const Services = (props) => {
    const { name, detail, location, rate, price, status, img } = props.service;
    return (
        <Grid item xs={12} md={4} sm={4}>
            <Card sx={{ maxWidth: 368 }}>
                <Box sx={{margin: '1rem 0 1rem'}}>
                    <Typography sx={{ fontFamily: 'ubuntu', color: '#0a2c3d', marginLeft: '1rem' }} variant="h6">
                        {name}
                    </Typography>
                    <Box style={{display: 'flex'}}>
                        <LocationIcon sx={{ color: '#ff5a3c', fontSize: '1.2rem', marginLeft: '0.8rem' }}/>
                        <Typography sx={{ fontFamily: 'ubuntu', color: '#0a2c3d', marginLeft: '0.2rem' }} variant="caption">{location}</Typography>
                    </Box>
                </Box>
            <CardMedia
                component="img"
                height="194"
                image={img}
                alt={name}
            />
            <CardContent>
                <Box style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <Rating name="read-only" value={rate} readOnly />
                    <Typography sx={{ fontFamily: 'ubuntu', color: '#0a2c3d', }} variant="h6">
                        Price: $ {price}
                    </Typography>        
                </Box>
                <Typography sx={{ fontFamily: 'ubuntu', color: '#0a2c3d' }} variant="body2">
                    {detail.slice(0, 80)}
                </Typography>
                    <Box style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
                        <Button style={{ backgroundColor: '#ff5a3c' }} variant="contained">Details</Button>
                        <Typography sx={{ fontFamily: 'ubuntu', color: '#0a2c3d', marginLeft: '0.2rem', textTransform: 'capitalize' }} variant="h6">{status}</Typography>
                    </Box>
            </CardContent>
            </Card> 
        </Grid>
    );
};

export default Services;