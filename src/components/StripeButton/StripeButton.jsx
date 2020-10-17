import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { publishableStripeKey } from '../../constants';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;

    const onToken = (token) => {
        console.log(token);
        alert('Successful Payment')
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