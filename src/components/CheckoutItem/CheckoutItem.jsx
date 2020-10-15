import React from 'react';
import { connect } from 'react-redux';
import { addCartItem, clearCartItem, removeCartItem } from '../../redux/cart/cartActions';

import './CheckoutItem.scss';

const CheckoutItem = (props) => {
    const { clearCartItem, addCartItem, removeCartItem, item } = props;
    const { name, price, quantity, imageUrl } = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div 
                    className='arrow'
                    onClick={()=>removeCartItem(item)}
                >&#10094;</div>
                <span className='value'>{quantity}</span>
                <div 
                    className='arrow'
                    onClick={()=>addCartItem(item)}
                >&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div
                className='remove-button'
                onClick={() => clearCartItem(item)}
            >&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearCartItem: item => dispatch(clearCartItem(item)),
    addCartItem: item => dispatch(addCartItem(item)),
    removeCartItem: item => dispatch(removeCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);