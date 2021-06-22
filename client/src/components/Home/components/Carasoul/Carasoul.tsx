import React, { Fragment } from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import styles from './Carasoul.module.css';

interface Props {}

const Carasoul: React.FC<Props> = () => {
	return (
		<Fragment>
			<div className={styles.carasoulContainer}>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div className={styles.leftArrow}>
						<div style={{ display: 'flex', alignSelf: 'center' }}>
							<BsChevronLeft size={40} style={{ marginRight: '9px' }} />
						</div>
					</div>

					<div className={styles.rightArrow}>
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
