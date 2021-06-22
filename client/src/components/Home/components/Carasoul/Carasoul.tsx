import React, { Fragment, useState } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import styles from './Carasoul.module.css';
import beautyHeader from './img/BeautyHeader.jpg';
import electronicsHeader from './img/ElectronicsHeader.jpg';
import shopHeader from './img/ShopHeader.jpg';
import toysHeader from './img/ToysHeader.jpg';

interface Props {}

const Carasoul: React.FC<Props> = () => {
	const imgArray = [ beautyHeader, electronicsHeader, shopHeader, toysHeader ];
	const [ clickCount, setClickCount ] = useState(0);
	const [ headerIMG, setHeaderIMG ] = useState(imgArray[clickCount]);
	return (
		<Fragment>
			<div className={styles.carasoulContainer} style={{ backgroundImage: `url(${headerIMG})` }}>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div
						onClick={() => {
							if (clickCount === imgArray.length - 1) {
								setClickCount(0);
							} else {
								setClickCount(clickCount + 1);
							}
							setHeaderIMG(imgArray[clickCount]);
						}}
						className={styles.leftArrow}
					>
						<div style={{ display: 'flex', alignSelf: 'center' }}>
							<BsChevronLeft size={40} style={{ marginRight: '9px' }} />
						</div>
					</div>

					<div
						onClick={() => {
							if (clickCount === 0) {
								setClickCount(3);
							} else {
								setClickCount(clickCount - 1);
							}
							setHeaderIMG(imgArray[clickCount]);
						}}
						className={styles.rightArrow}
					>
						<div style={{ display: 'flex', alignSelf: 'center' }}>
							<BsChevronRight size={40} style={{ marginLeft: '9px' }} />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Carasoul;
