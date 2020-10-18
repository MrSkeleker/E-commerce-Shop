import React from 'react';
import Spinner from '../Loading/Loaders/Spinner/Spinner';
import { LoadingContainer } from '../Loading/StyledLoading';

const withSpinner = WrappedComponent => ({ isLoading, ...props }) => {
    return isLoading
        ? (<LoadingContainer>
            <Spinner />
        </LoadingContainer>)
        : <WrappedComponent {...props} />
}

export default withSpinner;