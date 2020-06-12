import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
	ItemContainer,
	BackgroundImage,
	FooterContainer,
	FooterName,
	FooterPrice,
	AddButton,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<ItemContainer>
			<BackgroundImage imageUrl={imageUrl} />
			<FooterContainer>
				<FooterName>{name}</FooterName>
				<FooterPrice>{price}</FooterPrice>
			</FooterContainer>
			<AddButton inverted onClick={() => addItem(item)}>
				Add to cart
			</AddButton>
		</ItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
