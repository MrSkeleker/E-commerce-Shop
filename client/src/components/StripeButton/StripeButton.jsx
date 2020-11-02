import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import { publishableStripeKey } from '../../constants';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(_response => {
                alert('Payment successful');
            })
            .catch(error => {
                console.log('Payment error: ', error);
                alert('There was an issue with your payment. Please make sure you use the provided credit card.');
            })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableStripeKey}
        />
    )
}

export default StripeButton;