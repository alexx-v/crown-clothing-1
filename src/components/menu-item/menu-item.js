import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
	// console.log('MenuItem -> history', history);
	// console.log('MenuItem -> linkUrl', linkUrl);
	// console.log('MenuItem -> match', match);

	return (
		<div
			className={`${size} menu-item`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<h1 className='subtitle'>SHOP NOW</h1>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
