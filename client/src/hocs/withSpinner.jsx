import React from 'react';
import Spinner from '../components/Loading/Loaders/Spinner/Spinner';
import { LoadingContainer } from '../components/Loading/StyledLoading';

const withSpinner = WrappedComponent => ({ isLoading, ...props }) => {
    return isLoading
        ? (<LoadingContainer>
            <Spinner />
        </LoadingContainer>)
        : <WrappedComponent {...props} />
}

export default withSpinner;