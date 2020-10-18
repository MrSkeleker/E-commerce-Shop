import styled, {css} from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`

const googleButtonStyles = css`
    background-color: #4285f4;
    color: white;
    border: none;

    &:hover{
        background-color: #357ae8;
        color: white;
        border: none;
    }
`

const facebookButtonStyles = css`
    background-color: #4267b2;
    color: white;
    border: none;
    
    &:hover{
        background-color: #37538b;
        color: white;
        border: none;
    }
`

const getButtonStyles = props => {
    if(props.signInType === 'google') {
        return googleButtonStyles;
    } else if(props.signInType === 'facebook') {
        return facebookButtonStyles;
    }
    return  props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 3rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    cursor: pointer;

    ${getButtonStyles}
`