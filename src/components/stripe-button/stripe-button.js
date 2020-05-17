import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_ySJOUJNZ1HLjgbA7UQIy9BHQ00ohGhC3S0';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Success');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CROWN Clothing'
			billingAddress
			shippingAddress
			// image={'https://sendeyo.com/up/d/f3eb2117da'}
			image={'crown.svg'}
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
