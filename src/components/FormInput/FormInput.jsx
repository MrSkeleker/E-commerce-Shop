import React from 'react';

import './FormInput.scss';

const FormInput = (props) => {
    const { handleChange, handleBlur, label, mandatory, error, ...otherProps } = props;

    return (
        <div className={`form-group ${error ? 'error' : ''}`}>
            <input className='form-input' onChange={handleChange} onBlur={handleBlur} {...otherProps}/>
            {
                label && (<label
                    className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
                    {label} {mandatory && '*'}
                </label>)
            }
            {error && <span className='error-message'>{error}</span>}
        </div>
    )
}

export default FormInput;