import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    margin-bottom: 2.5rem;
`

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 2.5rem;
`

export const OptionsContainer = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 50%;
    list-style: none;
`

export const OptionLiContainer = styled.li`
    display: inline-block;
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    color: #4a4a4a;
    cursor: pointer;
`