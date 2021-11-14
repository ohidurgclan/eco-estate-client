import { Avatar, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Slider from "react-slick";
import useReview from '../../../hooks/useReview';
const HomeReview = () => {
    const [review] = useReview();
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    
    return (
        <Container sx={{ mb: 5 }}>
        <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '600', color: '#0a2c3d', mt: 5, mb: 5 }} variant="h4">*Happy Client Reviews</Typography>
        <Slider sx={{mt:4}} {...settings}>
            {review.map(item => <Box>
                <Avatar alt={item.serviceName} src={item.Image} sx={{ border: '0.38rem solid #0a2c3d', margin: '0 auto', width: 180, height: 180 }}/>
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '600', color: '#0a2c3d', textAlign: 'center', mt: 2 }} variant="h5">{item.feedbackName}</Typography>
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '500', color: '#ff5a3c', textAlign: 'center', mt: 1 }} variant="subtitle1">{item.serviceName}</Typography>
                <Typography sx={{ fontFamily: 'ubuntu', fontWeight: '400', color: '#0a2c3d', textAlign: 'center', m: 2 }} variant="body2">{item.review}</Typography>
            </Box>)}
        </Slider>
      </Container>
    );
};

export default HomeReview;