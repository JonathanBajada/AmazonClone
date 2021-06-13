import React from 'react';
import styles from './Nav.module.css';
import amazonLogo from './img/amazonLogo.png';

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
	return (
		<div>
			{/* Top Nav  */}
			<div style={{ height: 60, backgroundColor: '#131921', display: 'flex' }}>
				{/* Left Nav  */}
				<div className={styles.leftNav}>
					<img src={amazonLogo} className={styles.homePageIMG} style={{ margin: 'auto' }} />

					<button className={styles.buttonStyle}>
						{/*<img src={amazonLogo} className={styles.homePageIMG} />*/}
					</button>
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

/*
const Nav: React.FC<NavProps> = () => {
	return (
		<div>
		
			<div style={{ height: 60, backgroundColor: '#131921', display: 'flex' }}>
			
				<div style={{ alignSelf: 'center' }}>
					<button className={styles.buttonStyle}>
						<h1 style={{ color: 'white', fontSize: 14 }}>Home</h1>
					</button>
					<button className="button" style={{ height: 60 }}>
						<h1 style={{ color: 'black', fontSize: 14 }}>Deliver</h1>
					</button>
				</div>

				
				<div style={{ alignSelf: 'center', color: 'white' }}>
					<h1>Search</h1>
				</div>

			
				<div style={{ alignSelf: 'center', marginLeft: 'auto' }}>
					<button>Language</button>
					<button>Sign In</button>
					<button>Deliver</button>
					<button>Cart</button>
				</div>
			</div>

			
			<div style={{ height: 39, backgroundColor: '#232f3e' }} />
		</div>
	);
};*/
