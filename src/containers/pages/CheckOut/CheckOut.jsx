import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CheckOut.scss';

import { selectCartItems, selectCartTotalPrice } from '../../../redux/cart/cartSelectors';
import CheckoutItem from '../../../components/CheckoutItem/CheckoutItem';

const CheckOutPage = (props) => {
    const { cartItems, total } = props;
    const checkoutHeaders = ['Product', 'Description', 'Quantity', 'Price', 'Remove']
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                {checkoutHeaders.map(header =>
                    <div key={header} className='header-block'>
                        <span>{header}</span>
                    </div>)
                }
            </div>
            {cartItems.map(item => (
                <CheckoutItem key={item.id} item={item} />
            ))}
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckOutPage);