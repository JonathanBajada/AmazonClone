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
							<img src={amazonLogo} className={styles.homePageIMG} />
						</div>
					</Link>

					<div
						className={styles.buttonStyle}
						onClick={() => {
							console.log('hi');
						}}
					>
						<div className={styles.locationIMG}>
							<HiOutlineLocationMarker size={18} color={'white'} />
						</div>
						<div className={styles.spacingSection} style={{ alignSelf: 'center' }}>
							<span className={styles.span1}>Deliver to</span>
							<span className={styles.buttonTitle}>Canada</span>
						</div>
					</div>
				</div>

				{/* Search Bar  */}
				<SearchBar />

				{/* Right Nav  */}
				<div className={styles.rightNav}>
					<div className={styles.buttonStyle2}>
						<div className={styles.rightNavButton} style={{ marginBottom: '8px!important' }}>
							<img src={usaFlag} style={{ width: '22px', height: '15px' }} />
						</div>
						<div className={styles.rightNavButton}>
							<AiFillCaretDown color={'#A7ACB1'} size={12} />
						</div>
					</div>
					<div className={styles.buttonStyle2}>
						<Link to={'/signin'} style={{ alignSelf: 'center' }}>
							<div className={styles.spacingSection}>
								<span className={styles.span2}>Hello, Sign in</span>
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
						<div className={styles.rightNavButton}>
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
						<span className={styles.span2}>Returns</span>
						<span
							className={styles.buttonTitle}
							style={{
								marginBottom: 'auto'
							}}
						>
							& Orders
						</span>
					</div>

					<div className={styles.buttonStyle3}>
						<div style={{ marginTop: 'auto', marginBottom: '6px', marginRight: '2px' }}>
							<RiShoppingCartLine color={'white'} size={34} />
						</div>
						<div className={styles.spacingSection}>
							<span
								style={{
									color: '#FF9900',
									alignSelf: 'center',
									marginTop: 'auto',
									fontWeight: 800,
									fontSize: '15px'
								}}
							>
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

			{/* Top Nav  */}
			<div className={styles.bottomNavigation}>{/* Second header  */}</div>
		</div>
	);
};

export default Nav;
