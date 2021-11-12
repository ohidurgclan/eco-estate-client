import React from 'react';
import HomeSlider from '../HeaderSlider/HeaderSlider';
import HomeContact from '../HomeContact/HomeContact';
import Worship from '../Worship/Worship';

const Home = () => {
    return (
        <>
            <HomeSlider></HomeSlider>
            <Worship></Worship>
            <HomeContact></HomeContact>
        </>
    );
};

export default Home;