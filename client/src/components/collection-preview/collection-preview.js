import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';

import {
	CollectionPreviewContainer,
	TitleContainer,
	PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName, history, match }) => {
	return (
		<CollectionPreviewContainer>
			<TitleContainer>
				<button
					type='button'
					onClick={() => history.push(`${match.url}/${routeName}`)}
				>
					{title.toUpperCase()} &#10093;
				</button>
			</TitleContainer>
			<PreviewContainer>
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default withRouter(CollectionPreview);
