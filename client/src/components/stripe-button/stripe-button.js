import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_ySJOUJNZ1HLjgbA7UQIy9BHQ00ohGhC3S0';

	const onToken = (token) => {
		console.log(token);
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then((response) => {
				alert('Payment successful');
			})
			.catch((error) => {
				console.log('Payment error: ', JSON.parse(error));
				alert(
					'There was an issue with your payment. Please make sure you use the provided credit card data.'
				);
			});
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CROWN Clothing'
			billingAddress
			shippingAddress
			image={'crown.png'}
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
