import React from 'react';

import './SignUp.scss';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { invalidEmailError, passwordMatchError, requiredFieldError, signUpDescription, signUpTitle } from '../../constants';
import { emailValidator, requiredValidator} from '../../utils/validator.util';
import { useForm } from '../../effects/useForm';
import { connect } from 'react-redux';
import { signUpWithEmail } from '../../redux/user/userActions';

const initialState = {
    displayName: {
        value: '',
        error: null,
        validators: [
            requiredValidator(requiredFieldError)
        ]
    },
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
    },
    confirmPassword: {
        value: '',
        error: null,
        validators: [
            requiredValidator(requiredFieldError)
        ]
    }
}

const SignUp = (props) => {
    const {signUpWithEmail} = props;

    const onSubmit = async (state, setState) => {
        const { displayName, email, password, confirmPassword } = state;
        if(confirmPassword.value !== password.value){
            setState(prev => ({
                ...prev,
                confirmPassword: {
                    ...prev.confirmPassword,
                    error: passwordMatchError
                }
            }));
            return;
        }
        try {
            signUpWithEmail({
                email: email.value,
                password: password.value, 
                displayName: displayName.value
            });
            setState(initialState);
            alert('Successful Sign Up');
        }
        catch (error) {
            console.error(error.message)
        }
    }
    const {state, handleBlur, handleChange, handleSubmit } = useForm({initialState, onSubmit})
    const { displayName, email, password, confirmPassword } = state;

    return (
        <div className='sign-up'>
            <h2 className='title'>{signUpTitle}</h2>
            <p className='description'>{signUpDescription}</p>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName.value}
                    error={displayName.error}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label='Display Name'
                    mandatory
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email.value}
                    error={email.error}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label='Email'
                    mandatory
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password.value}
                    error={password.error}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label='Password'
                    mandatory
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword.value}
                    error={confirmPassword.error}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label='Confirm Password'
                    mandatory
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({
    signUpWithEmail: (userCredentials) => dispatch(signUpWithEmail(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);