import React from 'react';

//gif
import spinner from '../gif/spinner.gif'
const Loading = () => {
    return (
        <div>
            <img src={spinner} alt="spinner" />
            <h1>Loading</h1>
        </div>
    );
};

export default Loading;