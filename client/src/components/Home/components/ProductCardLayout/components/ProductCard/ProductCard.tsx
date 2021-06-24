import React, { Fragment, useState, useEffect } from 'react';
import styles from './ProductCard.module.css';

interface Props {
	name: string;
	link: string;
	image: string;
}

const ProductCard: React.FC<Props> = (props) => {
	return (
		<Fragment>
			<div className={styles.cardContainer}>
				<div className={styles.Header}>
					<h2 style={{}}>{props.name}</h2>
				</div>
				<div className={styles.imageContainer}>
					<img className={styles.cardImage} src={props.image} />
				</div>
				<div className={styles.cardFooter}>
					<a href={props.link}>See more</a>
				</div>
			</div>
		</Fragment>
	);
};

export default ProductCard;
