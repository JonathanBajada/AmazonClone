import React from 'react';

const SearchBar: React.FC = () => {
	return (
		<form action="/" method="get" style={{ alignSelf: 'center', display: 'flex' }}>
			<input
				style={{ height: '38px', borderStyle: 'solid', borderColor: '#FF9900' }}
				type="text"
				id="header-search"
				placeholder=""
				name="s"
			/>
			<button
				style={{ backgroundColor: '#FF9900', height: '43.5px', borderStyle: 'solid', borderColor: '#FF9900' }}
				type="submit"
			>
				Search
			</button>
		</form>
	);
};
export default SearchBar;
