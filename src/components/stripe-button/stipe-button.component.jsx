import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import {PUBLISHABLE_KEY} from '../../stripe/stripe.config';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRN clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={PUBLISHABLE_KEY}
        />
    )

}


export default StripeCheckoutButton;
