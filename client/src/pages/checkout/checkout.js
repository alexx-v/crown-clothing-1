import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import {
	CheckoutPageContainer,
	HeaderContainer,
	HeaderBlock,
	TotalContainer,
	WarningContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutPageContainer>
		<HeaderContainer>
			<HeaderBlock>
				<span>Product</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Description</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Quantity</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Price</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Remove</span>
			</HeaderBlock>
		</HeaderContainer>
		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<TotalContainer>
			<span>TOTAL: ${total}</span>
		</TotalContainer>
		<WarningContainer>
			*Please use the following test credit card data for payments* <br />
			4242 4242 4242 4242 Exp: 01/25 CVV: 123
		</WarningContainer>
		<StripeCheckoutButton price={total} />
	</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
