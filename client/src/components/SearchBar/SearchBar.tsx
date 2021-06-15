import React, { useState } from 'react';

const SearchBar: React.FC = () => {
	const [ borderColor, setBorderColor ] = useState('#FF9900');

	return (
		<div
			style={{
				display: 'flex',
				alignSelf: 'center',
				width: '100%',
				flexShrink: 35,
				height: '44px',
				boxSizing: 'border-box',
				borderRadius: '4px',
				backgroundColor: borderColor
			}}
		>
			<button
				style={{
					alignSelf: 'center',
					backgroundColor: '#F3F3F3',
					height: '36px',
					borderStyle: 'solid',
					borderColor: '#F3F3F3',
					marginLeft: '4px',
					outline: 'none',
					borderTopLeftRadius: '4px',
					borderBottomLeftRadius: '4px',
					cursor: 'pointer'
				}}
				type="submit"
			>
				All
			</button>
			<input
				style={{
					height: '30px',
					alignSelf: 'center',
					borderStyle: 'solid',
					borderColor: 'white',
					width: '100%',
					outline: 'none'
				}}
				type="text"
				id="header-search"
				placeholder=""
				name="s"
				onClick={() => {
					setBorderColor('#FF9900');
				}}
				onBlur={() => {
					setBorderColor('#131921');
				}}
			/>
			<button
				style={{
					alignSelf: 'center',
					backgroundColor: '#FEBD68',
					height: '36px',
					borderStyle: 'solid',
					borderColor: '#FEBD68',
					marginRight: '4px',
					outline: 'none',
					borderTopRightRadius: '4px',
					borderBottomRightRadius: '4px',
					cursor: 'pointer'
				}}
				type="submit"
			>
				Search
			</button>
		</div>
	);
};
export default SearchBar;
