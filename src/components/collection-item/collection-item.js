import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
	ItemContainer,
	ImageContainer,
	FooterContainer,
	FooterName,
	FooterPrice,
	CollectionButton,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<ItemContainer>
			<ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
			<FooterContainer>
				<FooterName>{name}</FooterName>
				<FooterPrice>{price}</FooterPrice>
			</FooterContainer>
			<CollectionButton inverted onClick={() => addItem(item)}>
				Add to cart
			</CollectionButton>
		</ItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
