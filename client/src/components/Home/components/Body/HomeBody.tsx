import React, { Fragment } from 'react';
import Carasoul from '../Carasoul/Carasoul';
import ProductCardLayout from '../ProductCardLayout/ProductCardLayout';
import styles from './HomeBody.module.css';

const Body: React.FC = () => {
	return (
		<Fragment>
			<div className={styles.bodyContainer} style={{ position: 'relative' }}>
				<Carasoul styleCarasoul={styles.styleCarasoul} />
				<ProductCardLayout styleCard={styles.styleCardLayout} />
			</div>
		</Fragment>
	);
};

export default Body;
