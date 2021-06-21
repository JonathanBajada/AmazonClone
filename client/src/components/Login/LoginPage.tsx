import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.module.css';
import logo from './img/amazonLogoWhite.jpeg';
import styles from './LoginPage.module.css';

const LoginPage = () => {
	const [ borderColor, setBorderColor ] = useState('#a6a6a6');

	return (
		<Fragment>
			<div
				className={styles.container}
				style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
			>
				<Link style={{ alignSelf: 'center' }} to={'/'}>
					<img src={logo} style={{ width: '200px', height: '75px' }} />
				</Link>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignSelf: 'center',
						borderRadius: '4px'

						//backgroundColor: '#fff',
					}}
				>
					<div
						style={{
							height: '239px',
							width: '296px',
							backgroundColor: 'white',
							border: '1px #ddd solid',
							padding: '20px 26px 20px 26px'
						}}
					>
						<h1>Sign In</h1>

						<div style={{ marginBottom: '14px' }}>
							<label>Email or phone number</label>

							<input
								onFocus={() => setBorderColor('#e77600')}
								onBlur={() => setBorderColor('#a6a6a6')}
								maxLength={128}
								className={styles.inputText}
								style={{
									display: 'block',
									height: '23px',
									borderRadius: '3px',
									padding: '3px 7px 3px 7px',
									//lineHeight: 'normal',
									border: ' 1px solid',
									width: '279.844px',
									borderColor: borderColor,
									boxShadow: '0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset',
									outline: '0',
									borderTopColor: '#949494;'
								}}
								type="email"
								name="email"
							/>
						</div>
						<input
							className={styles.inputText}
							style={{
								display: 'block',
								height: '23px',
								borderRadius: '2px',
								padding: '3px 7px 3px 7px',
								lineHeight: 'normal',
								width: '99.948%',
								border: '1px solid #a6a6a6',
								boxShadow: '0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset',
								outline: '0',
								//borderTopColor: '#949494;',
								borderColor: '#e77600'
							}}
							type="submit"
							name="submit"
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default LoginPage;
