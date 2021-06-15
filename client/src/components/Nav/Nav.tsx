import React from 'react';
import styles from './Nav.module.css';
import amazonLogo from './img/amazonLogo.png';
import usaFlag from './img/usa.jpg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';

import SearchBar from '../SearchBar/SearchBar';

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
	return (
		<div>
			{/* Top Nav  */}
			<div className={styles.navTopContainer}>
				{/* Left Nav  */}
				<div className={styles.leftNav}>
					<img
						onClick={() => {
							console.log('hi');
						}}
						src={amazonLogo}
						className={styles.homePageIMG}
						style={{ margin: 'auto' }}
					/>

					<div
						className={styles.buttonStyle}
						style={{
							display: 'flex',
							paddingLeft: '4px',
							paddingRight: '8px'
						}}
						onClick={() => {
							console.log('hi');
						}}
					>
						<div
							style={{
								alignSelf: 'center',
								marginTop: '11px',
								marginRight: '2px'
							}}
						>
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
				<div className={styles.rightNav} style={{}}>
					<div
						className={styles.buttonStyle}
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignSelf: 'center',
							paddingLeft: '10px',
							paddingRight: '10px',
							marginLeft: '12px'
						}}
					>
						<div style={{ marginTop: 'auto', marginBottom: '8px', marginLeft: '4px' }}>
							<img src={usaFlag} style={{ width: '22px', height: '15px' }} />
						</div>
						<div style={{ marginTop: 'auto', marginBottom: '6px', marginLeft: '4px' }}>
							<AiFillCaretDown color={'#A7ACB1'} size={12} />
						</div>
					</div>
					<div
						className={styles.buttonStyle}
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignSelf: 'center',
							paddingLeft: '10px',
							paddingRight: '10px'
						}}
					>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<span
								style={{
									marginTop: 'auto',
									marginRight: 'auto',
									color: 'white',

									fontSize: '12px',
									fontWeight: 600,
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
									lineHeight: '15px',
									marginBottom: 'auto'
								}}
							>
								Accounts & Lists
							</span>
						</div>
						<div style={{ marginTop: 'auto', marginBottom: '6px', marginLeft: '4px' }}>
							<AiFillCaretDown color={'#A7ACB1'} size={12} />
						</div>
					</div>

					<div
						className={styles.buttonStyle}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignSelf: 'center',
							paddingLeft: '10px',
							paddingRight: '10px'
						}}
					>
						<span
							style={{
								marginTop: 'auto',
								marginRight: 'auto',
								color: 'white',

								fontSize: '12px',
								fontWeight: 600,
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
								lineHeight: '15px',
								marginBottom: 'auto'
							}}
						>
							& Orders
						</span>
					</div>

					<div
						className={styles.buttonStyle}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignSelf: 'center',
							paddingLeft: '10px',
							paddingRight: '10px'
						}}
					>
						<span
							style={{
								marginTop: 'auto',
								marginBottom: '10px',
								color: 'white',
								fontSize: '14px',
								fontWeight: 700,
								letterSpacing: '-0.5px',
								lineHeight: '15px'
							}}
						>
							Cart
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
