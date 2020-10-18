import React from 'react';

import {LoaderContainer, LoadingContainer, MessageContainer} from './StyledLoading';

import Spinner from './Loaders/Spinner/Spinner';

const Loading = (props) => {
    const {message} = props;
    return (
        <LoadingContainer>
            <MessageContainer>{message} ...</MessageContainer>
            <LoaderContainer>
                <Spinner />
            </LoaderContainer>
        </LoadingContainer>)
}

export default Loading;