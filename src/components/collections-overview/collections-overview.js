import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

import { CollectionsOverviewContainer } from './collection-overview.styles';

import CollectionPreview from '../collection-preview/collection-preview';

const CollectionsOverview = ({ collections }) => (
	<CollectionsOverviewContainer>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
