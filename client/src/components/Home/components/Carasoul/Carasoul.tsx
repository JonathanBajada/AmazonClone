import React, { Fragment, useState, useEffect } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import styles from './Carasoul.module.css';
import beautyHeader from './img/BeautyHeader.jpg';
import electronicsHeader from './img/ElectronicsHeader.jpg';
import shopHeader from './img/ShopHeader.jpg';
import toysHeader from './img/ToysHeader.jpg';

interface Props {
	styleCarasoul: string;
}

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
			{/* 
			<div className={styles.carasoulContainer} style={{ backgroundImage: `url(${headerIMG})` }}>
			 */}
			<div className={props.styleCarasoul}>
				<div className={styles.carasoulContainer}>
					{imgArray.map((image, index) => {
						return (
							<div
								className={index === clickCount ? styles.slideActive : styles.slide}
								style={{}}
								key={index}
							>
								{index === clickCount && <img src={image} className={styles.carasoulCard} />}
							</div>
						);
					})}
					<div className={styles.buttonSection}>
						{/* Left Arrow Button*/}
						<div
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
							className={styles.leftArrow}
							style={leftFocus}
						>
							<div className={styles.arrowIMG}>
								<BsChevronLeft size={40} />
							</div>
						</div>

						{/* Right Arrow Button*/}
						<div
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
							className={styles.rightArrow}
							style={rightFocus}
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
