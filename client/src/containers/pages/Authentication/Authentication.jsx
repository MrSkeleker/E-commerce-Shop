import React from 'react';

import './Authentication.scss';

import SignIn from '../../../components/SignIn/SignIn';
import SignUp from '../../../components/SignUp/SignUp';

const AuthenticationPage = () => {
    return (
        <main className='authentication'>
            <SignIn />
            <SignUp />
        </main>
    )
}

export default AuthenticationPage;