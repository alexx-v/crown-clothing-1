import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out';
import Header from './components/header/header';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		// this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
		// 	if (userAuth) {
		// 		const userRef = await createUserProfileDocument(userAuth);
		// 		userRef.onSnapshot((snapShot) => {
		// 			setCurrentUser({
		// 				id: snapShot.id,
		// 				...snapShot.data(),
		// 			});
		// 		});
		// 	} else {
		// 		setCurrentUser(userAuth); // userAuth = null
		// 	}
		// });
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						exact
						path='/signin'
						render={() =>
							this.props.currentUser ? (
								<Redirect to='/' />
							) : (
								<SignInAndSignUpPage />
							)
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
