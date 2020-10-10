import React from 'react';

import './MenuItem.scss';

const MenuItem = (props) => {
    const { title, imageUrl, size } = props;
    return (
        <div className={`menu-item ${size}`}>
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h2 className='title'>{title}</h2>
                <p className='subtitle'>SHOP NOW</p>
            </div>
        </div>
    )
}

export default MenuItem;