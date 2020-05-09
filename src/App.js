import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
);

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				{/* <Route path='/shop/hats' component={HatsPage} /> */}
			</Switch>
		</div>
	);
}

export default App;
