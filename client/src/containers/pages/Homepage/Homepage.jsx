import React from 'react';
import Directory from '../../../components/Directory/Directory';

import {HomePageContainer} from './StyledHomepage';

const HomePage = () => (
    <HomePageContainer>
        <div className='directory-menu'>
            <Directory />
        </div>
    </HomePageContainer>
)

export default HomePage;