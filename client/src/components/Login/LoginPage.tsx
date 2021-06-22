import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.module.css';
import logo from './img/amazonLogoWhite.jpeg';
import styles from './LoginPage.module.css';

const LoginPage = () => {
	return (
		<Fragment>
			<div className={styles.container}>
				<Link style={{ alignSelf: 'center' }} to={'/'}>
					<img src={logo} style={{ width: '200px', height: '75px' }} />
				</Link>

				<div className={styles.formBox}>
					<h1>Sign In</h1>

					<div id="email" style={{ marginBottom: '14px' }}>
						<label htmlFor="ap_email">Enter email address</label>
						<input
							maxLength={128}
							className={styles.inputText}
							id="ap_email"
							type="email"
							name="email"
							tabIndex={1}
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
		</Fragment>
	);
};

export default LoginPage;
