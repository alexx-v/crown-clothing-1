import React from 'react';

import {
	CartItemContainer,
	CartItemImage,
	ItemDetails,
	CartItemName,
	CartItemPrice,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<CartItemImage src={imageUrl} alt='item' />
		<ItemDetails className='item-details'>
			<CartItemName className='name'>{name}</CartItemName>
			<CartItemPrice className='price'>
				${price} x {quantity}
			</CartItemPrice>
		</ItemDetails>
	</CartItemContainer>
);

export default CartItem;
