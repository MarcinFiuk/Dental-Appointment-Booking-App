import React from 'react';
import useFetchData from '../../hooks/useFetchData';

const DisplayData = () => {
    const data = useFetchData('specialists');

    console.log('data from display', data);
    return <div>NEW Data</div>;
};

export default DisplayData;
