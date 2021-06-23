import React, { Fragment } from 'react';
import Nav from '../Nav/Nav';
import Carasoul from './components/Carasoul/Carasoul';
import ProductCardLayout from './components/ProductCardLayout/ProductCardLayout';
import basic from './components/ProductCard/img/basics.jpg';

const HomePage = () => {
	return (
		<Fragment>
			<Nav />
			<Carasoul />
			<ProductCardLayout />
		</Fragment>
	);
};

export default HomePage;

/*
			<ProductCard name={'AmazonBasics'} link={'see'} image={basic} />
*/
