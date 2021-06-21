import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.module.css';
import styles from './LoginPage.module.css';

const LoginPage = () => {
	return (
		<Fragment>
			<div className={styles.container} style={{ display: 'flex', justifyContent: 'center' }}>
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
								className={styles.inputText}
								style={{
									display: 'block',
									height: '23px',
									borderRadius: '2px',
									padding: '3px 7px 3px 7px',
									lineHeight: 'normal',
									width: '280px',
									border: '1px solid #a6a6a6',
									boxShadow: '0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset',
									outline: '0',
									borderTopColor: '#949494;',
									borderColor: '#e77600'
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
								width: '280px',
								border: '1px solid #a6a6a6',
								boxShadow: '0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset',
								outline: '0',
								borderTopColor: '#949494;',
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
