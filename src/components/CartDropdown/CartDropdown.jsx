import React from 'react';

import './CartDropdown.scss';

import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import Scroll from '../Scroll/Scroll';
import { selectCartItems } from '../../redux/cart/cartSelectors';

const CartDropdown = (props) => {
    const {cartItems} = props;
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                <Scroll>
                    {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
                </Scroll>
            </div>
            <CustomButton inverted>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);