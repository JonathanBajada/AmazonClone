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
				height: '45px',
				boxSizing: 'border-box',
				borderRadius: '4px',
				backgroundColor: borderColor
			}}
		>
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
					backgroundColor: '#FF9900',
					height: '36px',
					borderStyle: 'solid',
					borderColor: '#FF9900',
					outline: 'none'
				}}
				type="submit"
			>
				Search
			</button>
		</div>
	);
};
export default SearchBar;

{
	/*<form action="/" method="get" style={{ alignSelf: 'center', display: 'flex' }}>
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
						onBlur={() => {
							setBorderColor('#131921');
						}}
					/>
				
				</div>
			</div>
		</form>*/
}
