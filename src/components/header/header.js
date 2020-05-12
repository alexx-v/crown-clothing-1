import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = ({ currentUser }) => {
	console.log('Header. REDUX. currentUser:', currentUser);
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='shop'>
					SHOP
				</Link>
				<Link className='option' to='shop'>
					CONTACT
				</Link>
				{currentUser ? (
					<div
						className='option'
						onClick={() => {
							console.log('SIGN OUT');
							return auth.signOut();
						}}
					>
						SIGN OUT
					</div>
				) : (
					<Link className='option' to='/signin'>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};
// mapStateToPros gets root-reducer object, as a parameter.
// { user } - desctructuring root-reducer object.
const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Header);
