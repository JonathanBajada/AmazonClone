import React, { Fragment } from 'react';
import Nav from '../Nav/Nav';
import Carasoul from './components/Carasoul/Carasoul';
import ProductCardLayout from './components/ProductCardLayout/ProductCardLayout';

const HomePage = () => {
	return (
		<Fragment>
			<Nav />
			<div style={{ backgroundColor: '#EAEDED' }}>
				<Carasoul />
				<ProductCardLayout />
			</div>
		</Fragment>
	);
};

export default HomePage;

/*
			
*/
