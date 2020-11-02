import React from 'react';
import { connect } from 'react-redux';

import './SignIn.scss';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import { signInTitle, signInDescription, requiredFieldError, invalidEmailError } from '../../constants';
import { emailValidator, requiredValidator } from '../../utils/validator.util';
import { useForm } from '../../effects/useForm';
import { signInWithGoogle, signInWithEmail } from '../../redux/user/userActions';


const initialState = {
    email: {
        value: '',
        error: null,
        validators: [
            requiredValidator(requiredFieldError),
            emailValidator(invalidEmailError)
        ]
    },
    password: {
        value: '',
        error: null,
        validators: [
            requiredValidator(requiredFieldError)
        ]
    }
}

const SignIn = (props) => {
    const { signInWithEmail, signInWithGoogle } = props;

    const onSubmit = async (state, setState) => {
        const { email, password } = state;
        try {
            signInWithEmail(email.value, password.value);
            setState(initialState);
            alert('Successful Sign In')
        }
        catch(error) {
            console.error(error.message);
        }
    }

    const { state, handleBlur, handleChange, handleSubmit } = useForm({ initialState, onSubmit })
    const { email, password } = state;
    return (
        <div className='sign-in'>
            <h2 className='title'>{signInTitle}</h2>
            <p className='description'>{signInDescription}</p>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email.value}
                    error={email.error}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label='Email'
                    mandatory
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password.value}
                    error={password.error}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label='Password'
                    mandatory
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} signInType='google'>Sign In With Google</CustomButton>
                    {/* <CustomButton type='button' onClick={signInWithFacebook} signInType='facebook'>Sign In With Facebook</CustomButton> */}
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(signInWithGoogle()),
    signInWithEmail: (email, password) => dispatch(signInWithEmail(email, password))
})

export default connect(null, mapDispatchToProps)(SignIn);