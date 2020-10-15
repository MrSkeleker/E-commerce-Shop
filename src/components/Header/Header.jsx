import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Header.scss'

import { auth } from '../../utils/firebase.utils';
import { ReactComponent as Logo } from '../../assets/images/crown.svg'
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelector';


const Header = (props) => {
    const { currentUser, hidden } = props;
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
                    <li className='option'>
                        <CartIcon />
                    </li>
                </ul>
                {!hidden ? <CartDropdown /> : null}
            </nav>
        </header>
    )
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header);