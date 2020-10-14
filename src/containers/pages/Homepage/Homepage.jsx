import React from 'react';
import Directory from '../../../components/Directory/Directory';

import './Homepage.scss';

const HomePage = () => (
    <main className='homepage'>
        <div className='directory-menu'>
            <Directory />
        </div>
    </main>
)

export default HomePage;