import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import styles from './SearchBar.module.css';

const SearchBar: React.FC = () => {
	const [ borderColor, setBorderColor ] = useState('#131921');

	return (
		<div
			className={styles.container}
			style={{
				backgroundColor: borderColor
			}}
		>
			<div
				className={styles.buttonContainer}
				style={{
					backgroundColor: '#F3F3F3',
					borderColor: '#F3F3F3',
					marginLeft: '3px',
					borderTopLeftRadius: '4px',
					borderBottomLeftRadius: '4px'
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
					<AiFillCaretDown size={10} color={'#666666'} />
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
				className={styles.buttonContainer}
				style={{
					backgroundColor: '#FEBD68',
					borderStyle: 'solid',
					borderColor: '#FEBD68',
					paddingLeft: '4px',
					paddingRight: '4px',
					marginRight: '3px',
					borderTopRightRadius: '4px',
					borderBottomRightRadius: '4px'
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
