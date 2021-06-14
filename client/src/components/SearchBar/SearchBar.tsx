import React from 'react';

const SearchBar: React.FC = () => {
	return (
		<form action="/" method="get" style={{ alignSelf: 'center', display: 'flex' }}>
			<input style={{ height: '38px' }} type="text" id="header-search" placeholder="Search blog posts" name="s" />
			<button style={{ backgroundColor: '#FF9900', height: '45px', borderStyle: 'solid' }} type="submit">
				Search
			</button>
		</form>
	);
};
export default SearchBar;
