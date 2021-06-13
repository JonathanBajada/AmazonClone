import React from 'react';

const Nav = () => {
	return (
		<div>
			{/* Top Nav  */}
			<div style={{ height: 60, backgroundColor: '#131921' }}>
				{/* Left Nav  */}
				<div style={{}}>
					<button>Home</button>
					<button>Deliver</button>
				</div>

				{/* Search Bar  */}
				<div>
					<h1>Search</h1>
				</div>

				{/* Right Nav  */}
				<div>
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
