import React from 'react';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './CartDropdown.scss';

import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import Scroll from '../Scroll/Scroll';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { emptyCartMessage } from '../../constants';
import { toggleCartHidden } from '../../redux/cart/cartActions';


const CartDropdown = (props) => {
    const { cartItems, history, dispatch } = props;
    console.log(props);
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length
                    ? (
                        <Scroll>
                            {cartItems.map(item => <CartItem key={item.id} item={item} />)}
                        </Scroll>)
                    : <span className='empty-message'>{emptyCartMessage}</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }} inverted>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));