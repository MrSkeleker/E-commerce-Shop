import React from 'react';
import Directory from '../../components/Directory/Directory';

import './Homepage.scss';

const Homepage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <Directory />
        </div>
    </div>
)

export default Homepage;