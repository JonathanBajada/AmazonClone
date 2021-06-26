import React, { Fragment } from 'react';
import Carasoul from '../Carasoul/Carasoul';
import ProductCardLayout from '../ProductCardLayout/ProductCardLayout';
import styles from './HomeBody.module.css';
import { Grid } from '@material-ui/core';

const Body: React.FC = () => {
	return (
		<Fragment>
			<div className={styles.bodyContainer}>
				<Carasoul />
				<ProductCardLayout />
			</div>
		</Fragment>
	);
};

export default Body;
