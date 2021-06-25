import React, { Fragment, useState, useEffect } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import styles from './Carasoul.module.css';
import beautyHeader from './img/BeautyHeader.jpg';
import electronicsHeader from './img/ElectronicsHeader.jpg';
import shopHeader from './img/ShopHeader.jpg';
import toysHeader from './img/ToysHeader.jpg';
import { Grid } from '@material-ui/core';

interface Props {}

const Carasoul: React.FC<Props> = (props) => {
	const focused = {
		boxShadow: 'inset 0 0 0 2px #fff, inset 0 0 0 4px #008296'
	};

	const unfocused = {
		boxShadow: 'none'
	};
	const imgArray = [ shopHeader, beautyHeader, electronicsHeader, toysHeader ];
	const [ leftFocus, setLeftFocus ] = useState(unfocused);
	const [ rightFocus, setRightFocus ] = useState(unfocused);
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
			<div className={styles.root}>
				<Grid className={styles.outerDivButton} container>
					<Grid container item xs={12}>
						<Grid className={styles.item} item xs={6}>
							<div
								className={styles.leftButton}
								tabIndex={1}
								onClick={() => {
									slideLeft();
								}}
								onFocus={() => {
									setLeftFocus(focused);
								}}
								onBlur={() => {
									setLeftFocus(unfocused);
								}}
								style={leftFocus}
							>
								<div className={styles.leftArrow}>
									<BsChevronLeft size={40} />
								</div>
							</div>
						</Grid>
						<Grid className={styles.item2} item xs={6}>
							<div
								className={styles.rightButton}
								tabIndex={2}
								onClick={() => {
									slideRight();
								}}
								onFocus={() => {
									setRightFocus(focused);
								}}
								onBlur={() => {
									setRightFocus(unfocused);
								}}
								style={rightFocus}
							>
								<div className={styles.rightArrow}>
									<BsChevronRight size={40} />
								</div>
							</div>
						</Grid>
					</Grid>
				</Grid>

				<Grid container xs={12}>
					<img src={shopHeader} className={styles.carasoulIMG} />
				</Grid>
			</div>
		</Fragment>
	);
};
export default Carasoul;

/*
/*
	<Grid container xs={12}>
					{imgArray.map((image, index) => {
						return (
							index === clickCount && (
								<img src={image} className={index === clickCount ? styles.slideActive : styles.slide} />
							)
						);
					})}
				</Grid>
				*/
