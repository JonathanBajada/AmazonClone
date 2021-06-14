import React from 'react';
import styles from './Nav.module.css';
import amazonLogo from './img/amazonLogo.png';
import { TiLocationOutline } from 'react-icons/ti';

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
	return (
		<div>
			{/* Top Nav  */}
			<div className={styles.topHalfNav}>
				{/* Left Nav  */}
				<div className={styles.leftNav}>
					<img src={amazonLogo} className={styles.homePageIMG} style={{ margin: 'auto' }} />

					<div className={styles.buttonStyle} style={{ display: 'flex' }}>
						<div style={{ alignSelf: 'center', marginLeft: '2px' }}>
							<TiLocationOutline size={20} color={'white'} />
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
							<span style={{ color: '#ccc', fontSize: '12px', fontWeight: 400, letterSpacing: '-0.5px' }}>
								Deliver to
							</span>
							<span
								style={{ color: 'white', fontSize: '14px', fontWeight: 400, letterSpacing: '-0.5px' }}
							>
								Canada
							</span>
						</div>
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
