import React from 'react';

import './CustomButton.scss';

const CustomButton = (props) => {
    const {children, signInType, inverted, ...otherProps} = props;
    return (
        <button className={`custom-button ${signInType ? signInType : ''} ${inverted ? 'inverted' : ''}`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;