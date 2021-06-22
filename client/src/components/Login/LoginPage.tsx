import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/amazonLogoWhite.jpeg';
import styles from './LoginPage.module.css';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';

const LoginPage = () => {
	const [ showHelp, setShowHelp ] = useState(false);
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
					<div>
						<input
							className={styles.buttonStyle}
							id="continue"
							value="Continue"
							type="submit"
							name="submit"
							tabIndex={5}
						/>
						<div id="legalTextRow" className={styles.legalText}>
							By continuing, you agree to Amazon's <span>Conditions of Use</span> and{' '}
							<span>Privacy Notice.</span>
						</div>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<div
							className={styles.helpWrapper}
							onClick={() => {
								showHelp === true ? setShowHelp(false) : setShowHelp(true);
							}}
						>
							{showHelp === false ? (
								<AiFillCaretRight size={9} style={{ color: '#656565', alignSelf: 'center' }} />
							) : (
								<AiOutlineCaretDown size={9} style={{ color: '#656565', alignSelf: 'center' }} />
							)}
							<span style={{ marginLeft: '4px' }}>Need Help?</span>
						</div>
						{showHelp === true ? (
							<div style={{ marginLeft: '13px' }}>
								<li>
									<span>Forget your password?</span>
								</li>
								<li>
									<span>Other issues with Sign-In</span>
								</li>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default LoginPage;
