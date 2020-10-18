import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {HeaderContainer, OptionsContainer, NavContainer, OptionLiContainer, LogoContainer} from './StyledHeader';

import { auth } from '../../utils/firebase.utils';
import { ReactComponent as Logo } from '../../assets/images/crown.svg'
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';


const Header = (props) => {
    const { currentUser, hidden } = props;
    return (
        <HeaderContainer>
            <NavContainer>
                <LogoContainer to="/">
                    <Logo className='logo' />
                </LogoContainer>
                <OptionsContainer>
                    <OptionLiContainer>
                        <Link to="/shop">SHOP</Link>
                    </OptionLiContainer>
                    <OptionLiContainer>
                        <Link to="/contact">CONTACT</Link>
                    </OptionLiContainer>
                    <OptionLiContainer>
                        {currentUser
                            ? <div onClick={() => auth.signOut()}>SIGN OUT</div>
                            : <Link to='/signin'>SIGN IN</Link>
                        }
                    </OptionLiContainer>
                    <OptionLiContainer>
                        <CartIcon />
                    </OptionLiContainer>
                </OptionsContainer>
                {!hidden ? <CartDropdown /> : null}
            </NavContainer>
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header);