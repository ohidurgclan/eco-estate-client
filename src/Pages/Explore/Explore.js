import React from 'react';
import useServices from '../../hooks/useServices';

const Explore = () => {
    const [services] = useServices();
    return (
        <div>
            <h2>{services?.img}</h2>
        </div>
    );
};

export default Explore;