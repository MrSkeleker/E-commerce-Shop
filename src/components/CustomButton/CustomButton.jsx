import React from 'react';

import './CustomButton.scss';

const CustomButton = (props) => {
    const {children, signInType, ...otherProps} = props;
    return (
        <button className={`custom-button ${signInType}`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;