import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
	CollectionPageContainer,
	TitleContainer,
	ItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection, match }) => {
	const { title, items } = collection;

	return (
		<CollectionPageContainer>
			<TitleContainer>{title}</TitleContainer>
			<ItemsContainer>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</ItemsContainer>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		collection: selectCollection(ownProps.match.params.collectionId)(state),
	};
};

export default connect(mapStateToProps)(CollectionPage);
