import React from 'react';

import './CustomButton.scss';

const CustomButton = (props) => {
    const {children, signInType, inversed, ...otherProps} = props;
    return (
        <button className={`custom-button ${signInType ? signInType : ''} ${inversed ? 'inversed' : ''}`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;