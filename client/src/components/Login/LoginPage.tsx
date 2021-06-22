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
						<input maxLength={128} id="ap_email" type="email" name="email" tabIndex={1} autoFocus />
					</div>
					<input
						className={styles.buttonStyle}
						id="continue"
						value="Continue"
						type="submit"
						name="submit"
						tabIndex={5}
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default LoginPage;
