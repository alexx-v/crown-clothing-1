import React from 'react';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, quantity, price } }) => (
	<div className='checkout-item'>
		<div className='image-container'>
			<img src={imageUrl} alt='item' />
		</div>
		<span className='name'>{name}</span>

		<span className='quantity'>
			<i>&#10094;</i>
			{quantity} <i>&#10095;</i>
		</span>

		<span className='price'>{price}</span>
		<div className='remove-button'>&#10005;</div>
	</div>
);

export default CheckoutItem;
