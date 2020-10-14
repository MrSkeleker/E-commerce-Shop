import React from 'react';

import './Authentication.scss';

import SignIn from '../../../components/SignIn/SignIn';
import SignUp from '../../../components/SignUp/SignUp';

const AuthenticationPage = () => {
    return (
        <div className='authentication'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default AuthenticationPage;