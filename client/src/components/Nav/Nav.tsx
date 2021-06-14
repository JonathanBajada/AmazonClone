import React from 'react';
import styles from './Nav.module.css';
import amazonLogo from './img/amazonLogo.png';

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
	return (
		<div>
			{/* Top Nav  */}
			<div className={styles.topHalfNav}>
				{/* Left Nav  */}
				<div className={styles.leftNav}>
					<img src={amazonLogo} className={styles.homePageIMG} style={{ margin: 'auto' }} />

					<div className={styles.buttonStyle} style={{ display: 'flex', flexDirection: 'column' }}>
						<span style={{ color: '#ccc', fontSize: '12px' }}>Deliver to</span>
						<span style={{ color: 'white', fontSize: '14px' }}>Canada</span>
					</div>
				</div>

				{/* Search Bar  */}
				<div style={{ alignSelf: 'center', color: 'white' }}>
					<h1>Search</h1>
				</div>

				{/* Right Nav  */}
				<div style={{ alignSelf: 'center' }}>
					<button>Language</button>
					<button>Sign In</button>
					<button>Deliver</button>
					<button>Cart</button>
				</div>
			</div>

			{/* Second header  */}
			<div style={{ height: 39, backgroundColor: '#232f3e' }} />
		</div>
	);
};

export default Nav;
