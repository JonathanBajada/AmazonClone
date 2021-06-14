import React from 'react';
import styles from './Nav.module.css';
import amazonLogo from './img/amazonLogo.png';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import SearchBar from '../SearchBar/SearchBar';

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
	return (
		<div>
			{/* Top Nav  */}
			<div className={styles.navTopContainer}>
				{/* Left Nav  */}
				<div className={styles.leftNav}>
					<img src={amazonLogo} className={styles.homePageIMG} style={{ margin: 'auto' }} />

					<div className={styles.buttonStyle} style={{ display: 'flex' }}>
						<div style={{ alignSelf: 'center', marginLeft: '4px', marginTop: '11px', marginRight: '2px' }}>
							<HiOutlineLocationMarker size={18} color={'white'} />
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
							<span
								style={{
									color: '#ccc',
									fontSize: '12px',
									fontWeight: 400,
									lineHeight: '15px',
									marginRight: 'auto'
								}}
							>
								Deliver to
							</span>
							<span
								style={{
									color: 'white',
									fontSize: '14px',
									fontWeight: 700,
									letterSpacing: '-0.5px',
									lineHeight: '15px',
									marginRight: 'auto'
								}}
							>
								Canada
							</span>
						</div>
					</div>
				</div>

				{/* Search Bar  */}
				<SearchBar />

				{/* Right Nav  */}
				<div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto' }}>
					<div
						className={styles.buttonStyle}
						style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}
					>
						<span
							style={{
								color: '#ccc',
								fontSize: '12px',
								fontWeight: 400,
								lineHeight: '15px'
							}}
						>
							Hello, Sign in
						</span>
						<span
							style={{
								color: 'white',
								fontSize: '14px',
								fontWeight: 700,
								letterSpacing: '-0.5px',
								lineHeight: '15px'
							}}
						>
							Accounts & Lists
						</span>
					</div>

					<div
						className={styles.buttonStyle}
						style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}
					>
						<span
							style={{
								color: '#ccc',
								fontSize: '12px',
								fontWeight: 400,
								lineHeight: '15px'
							}}
						>
							Returns
						</span>
						<span
							style={{
								color: 'white',
								fontSize: '14px',
								fontWeight: 700,
								letterSpacing: '-0.5px',
								lineHeight: '15px'
							}}
						>
							& Orders
						</span>
					</div>

					<div
						className={styles.buttonStyle}
						style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}
					>
						<span
							style={{
								color: 'white',
								fontSize: '14px',
								fontWeight: 700,
								letterSpacing: '-0.5px',
								lineHeight: '15px'
							}}
						>
							Carts
						</span>
					</div>
				</div>
			</div>

			{/* Second header  */}
			<div style={{ height: 39, backgroundColor: '#232f3e' }} />
		</div>
	);
};

export default Nav;
