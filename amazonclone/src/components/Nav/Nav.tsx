import React from 'react';
import './Nav.css';

const Nav = () => {
	return (
		<div>
			{/* Top Nav  */}
			<div style={{ height: 60, backgroundColor: '#131921', display: 'flex' }}>
				{/* Left Nav  */}
				<div style={{ alignSelf: 'center' }}>
					<button className="button">
						<h1 style={{ color: 'white', fontSize: 14 }}>Home</h1>
					</button>
					<button className="button" style={{ height: 60 }}>
						<h1 style={{ color: 'black', fontSize: 14 }}>Deliver</h1>
					</button>
				</div>

				{/* Search Bar  */}
				<div style={{ alignSelf: 'center', color: 'white' }}>
					<h1>Search</h1>
				</div>

				{/* Right Nav  */}
				<div style={{ alignSelf: 'center', marginLeft: 'auto' }}>
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
