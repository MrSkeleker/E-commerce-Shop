import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CheckOut.scss';

import { selectCartItems, selectCartTotalPrice } from '../../../redux/cart/cartSelectors';
import CheckoutItem from '../../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../../components/StripeButton/StripeButton';

const CheckOutPage = (props) => {
    const { cartItems, total } = props;
    const checkoutHeaders = ['Product', 'Description', 'Quantity', 'Price', 'Remove']
    return (
        <main className='checkout-page'>
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
            <p className='test-warning'>
                *Please use the following payment information for testing* <br/>
                4242 4242 4242 4242 - Exp: 01/21 (22) - CVV: 123
            </p>
            <StripeButton price={total}/>
        </main>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckOutPage);