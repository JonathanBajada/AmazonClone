import React, { useState } from 'react';

const SearchBar: React.FC = () => {
	const [ borderColor, setBorderColor ] = useState('#131921');

	return (
		<form action="/" method="get" style={{ alignSelf: 'center', display: 'flex' }}>
			<div style={{ backgroundColor: borderColor, width: '100%', borderRadius: '5px', height: '50px' }}>
				<div
					style={{
						display: 'inline-block',
						margin: '0 auto;',
						padding: '3px'
					}}
				>
					<input
						style={{ height: '38px', borderStyle: 'solid', borderColor: '#FF9900' }}
						type="text"
						id="header-search"
						placeholder=""
						name="s"
						onClick={() => {
							setBorderColor('#FF9900');
						}}
					/>
					<button
						style={{
							backgroundColor: '#FF9900',
							height: '43.5px',
							borderStyle: 'solid',
							borderColor: '#FF9900'
						}}
						type="submit"
					>
						Search
					</button>
				</div>
			</div>
		</form>
	);
};
export default SearchBar;
