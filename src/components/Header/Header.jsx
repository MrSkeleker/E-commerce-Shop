import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss'

import { auth } from '../../utils/firebase.utils';
import { ReactComponent as Logo } from '../../assets/images/4.4 crown.svg'

const Header = (props) => {
    const { currentUser } = props;
    return (
        <header className='header'>
            <nav className='nav'>
                <Link className='logo-container' to="/">
                    <Logo className='logo' />
                </Link>
                <ul className='options'>
                    <li className='option'>
                        <Link to="/shop">SHOP</Link>
                    </li>
                    <li className='option'>
                        <Link to="/shop">CONTACT</Link>
                    </li>
                    <li className='option'>
                        {currentUser
                            ? <div onClick={() => auth.signOut()}>SIGN OUT</div>
                            : <Link to='/signin'>SIGN IN</Link>
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;