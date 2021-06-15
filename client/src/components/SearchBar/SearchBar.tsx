import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';

const SearchBar: React.FC = () => {
	const [ borderColor, setBorderColor ] = useState('#FF9900');

	return (
		<div
			style={{
				display: 'flex',
				alignSelf: 'center',
				width: '100%',
				flexShrink: 100,
				height: '47px',
				boxSizing: 'border-box',
				borderRadius: '5px',
				backgroundColor: borderColor
			}}
		>
			<div
				style={{
					display: 'flex',
					alignSelf: 'center',
					backgroundColor: '#F3F3F3',
					height: '35px',
					borderStyle: 'solid',
					borderColor: '#F3F3F3',
					marginLeft: '3px',
					outline: 'none',
					borderTopLeftRadius: '4px',
					borderBottomLeftRadius: '4px',
					cursor: 'pointer'
				}}
			>
				<span
					style={{
						marginLeft: '4px',
						alignSelf: 'center',
						fontSize: '14px',
						fontWeight: 400,
						fontFamily: 'Arial'
					}}
				>
					All
				</span>
				<div style={{ alignSelf: 'center', marginLeft: '4px', marginRight: '4px' }}>
					<AiFillCaretDown size={10} color={'gray'} />
				</div>
			</div>
			<input
				style={{
					height: '35px',
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

			<div
				style={{
					display: 'flex',
					alignSelf: 'center',
					backgroundColor: '#FEBD68',
					height: '35px',
					borderStyle: 'solid',
					borderColor: '#FEBD68',
					paddingLeft: '4px',
					paddingRight: '4px',
					marginRight: '3px',
					outline: 'none',
					borderTopRightRadius: '4px',
					borderBottomRightRadius: '4px',
					cursor: 'pointer'
				}}
			>
				<div
					style={{
						alignSelf: 'center',
						marginTop: '5px',
						marginLeft: '4px',
						marginRight: '4px',
						cursor: 'pointer'
					}}
				>
					<GoSearch size={20} color={'black'} />
				</div>
			</div>
		</div>
	);
};
export default SearchBar;
