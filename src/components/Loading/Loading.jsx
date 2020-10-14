import React from 'react';

import './Loading.scss';

import LoaderWheel from './Loaders/LoaderWheel/LoaderWheel';

const Loading = (props) => {
    const {message} = props;
    return (
        <div className='loading'>
            <p className='message'>{message} ...</p>
            <div className='loader-container'>
                <LoaderWheel />
            </div>
        </div>)
}

export default Loading;