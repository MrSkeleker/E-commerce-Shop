import React from 'react';

import { CustomButtonContainer } from './StyledCustomButton';

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;