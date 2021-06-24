import React, { Fragment, useState, useEffect } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import styles from './Carasoul.module.css';
import beautyHeader from './img/BeautyHeader.jpg';
import electronicsHeader from './img/ElectronicsHeader.jpg';
import shopHeader from './img/ShopHeader.jpg';
import toysHeader from './img/ToysHeader.jpg';
import basic from '../ProductCardLayout/components/ProductCard/img/basics.jpg';
import ProductCardLayout from '../ProductCardLayout/ProductCardLayout';

interface Props {
	styleCarasoul: string;
}

const Carasoul: React.FC<Props> = (props) => {
	const imgArray = [ shopHeader, beautyHeader, electronicsHeader, toysHeader ];
	const [ clickCount, setClickCount ] = useState(0);

	const slideLeft = () => {
		if (clickCount === imgArray.length - 1) {
			setClickCount(0);
		} else {
			setClickCount(clickCount + 1);
		}
	};

	const slideRight = () => {
		if (clickCount === imgArray.length - 1) {
			setClickCount(0);
		} else {
			setClickCount(clickCount + 1);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (clickCount === imgArray.length - 1) {
				setClickCount(0);
			} else {
				setClickCount(clickCount + 1);
			}
		}, 10000);
		return () => clearTimeout(timer);
	});

	return (
		<Fragment>
			{/* 
			<div className={styles.carasoulContainer} style={{ backgroundImage: `url(${headerIMG})` }}>
			 */}
			<div className={props.styleCarasoul}>
				<div className={styles.carasoulContainer}>
					{imgArray.map((image, index) => {
						return (
							<div
								className={index === clickCount ? styles.slideActive : styles.slide}
								style={{ marginBottom: 'auto' }}
								key={index}
							>
								{index === clickCount && <img src={image} className={styles.carasoulCard} />}
							</div>
						);
					})}
					<div className={styles.buttonSection}>
						{/* Left Arrow Button*/}
						<div
							onClick={() => {
								slideLeft();
							}}
							className={styles.leftArrow}
						>
							<div className={styles.arrowIMG}>
								<BsChevronLeft size={40} />
							</div>
						</div>

						{/* Right Arrow Button*/}
						<div
							onClick={() => {
								slideRight();
							}}
							className={styles.rightArrow}
						>
							<div className={styles.arrowIMG}>
								<BsChevronRight size={40} style={{ marginLeft: '9px' }} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Carasoul;
