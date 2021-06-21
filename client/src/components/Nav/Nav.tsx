import React from 'react';
import styles from './Nav.module.css';
import amazonLogo from './img/amazonLogo.png';
import usaFlag from './img/usa.jpg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
	return (
		<div>
			{/* Top Nav  */}
			<div className={styles.navTopContainer}>
				{/* Left Nav  */}
				<div className={styles.leftNav}>
					<Link to={'/'}>
						<div>
							<img
								onClick={() => {
									console.log('hi');
								}}
								src={amazonLogo}
								className={styles.homePageIMG}
								style={{ margin: 'auto', marginTop: '2px', marginRight: '4px' }}
							/>
						</div>
					</Link>

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
							<span className={styles.buttonTitle}>Canada</span>
						</div>
					</div>
				</div>

				{/* Search Bar  */}
				<SearchBar />

				{/* Right Nav  */}
				<div className={styles.rightNav}>
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
						<Link to={'/signin'} style={{ alignSelf: 'center', textDecoration: 'none' }}>
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
									className={styles.buttonTitle}
									style={{
										marginBottom: 'auto'
									}}
								>
									Accounts & Lists
								</span>
							</div>
						</Link>
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
							className={styles.buttonTitle}
							style={{
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
							flexDirection: 'row',
							alignSelf: 'center',
							paddingLeft: '10px',
							paddingRight: '10px'
						}}
					>
						<div style={{ marginTop: 'auto', marginBottom: '6px', marginRight: '2px' }}>
							<RiShoppingCartLine color={'white'} size={34} />
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column'
							}}
						>
							<span style={{ color: '#FF9900', marginTop: 'auto', fontWeight: 800, fontSize: '15px' }}>
								0
							</span>
							<span
								className={styles.buttonTitle}
								style={{
									marginBottom: '9px'
								}}
							>
								Cart
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Second header  */}
			<div style={{ height: 39, backgroundColor: '#232f3e' }} />
		</div>
	);
};

export default Nav;
