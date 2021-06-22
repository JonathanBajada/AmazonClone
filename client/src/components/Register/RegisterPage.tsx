import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/amazonLogoWhite.jpeg';
import styles from './RegisterPage.module.css';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';

const RegisterPage = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	return (
		<Fragment>
			<div className={styles.container}>
				{/* Home Button */}
				<Link style={{ alignSelf: 'center' }} to={'/'}>
					<img src={logo} />
				</Link>

				{/* Form Input */}
				<div className={styles.formBox}>
					<h1>Create Account</h1>

					<div id="email" style={{ marginBottom: '14px' }}>
						<label htmlFor="ap_email">Your name</label>
						<input
							onChange={(e: string) => {
								setName(e.target.value);
							}}
							maxLength={128}
							id="ap_email"
							type="email"
							name="email"
							tabIndex={1}
							autoFocus
						/>
					</div>

					<div id="email" style={{ marginBottom: '14px' }}>
						<label htmlFor="ap_email">Email address</label>
						<input
							onChange={(e: string) => {
								setEmail(e.target.value);
							}}
							maxLength={128}
							id="ap_email"
							type="email"
							name="email"
							tabIndex={2}
						/>
					</div>

					<div id="email" style={{ marginBottom: '14px' }}>
						<label htmlFor="ap_email">Password</label>
						<input
							onChange={(e: string) => {
								setPassword(e.target.value);
							}}
							placeHolder={'At least 6 characters'}
							axLength={128}
							id="ap_email"
							type="email"
							name="email"
							tabIndex={3}
						/>
					</div>

					<div id="email" style={{ marginBottom: '14px' }}>
						<label htmlFor="ap_email">Re-enter password</label>
						<input
							onChange={(e: string) => {
								setConfirmPassword(e.target.value);
							}}
							maxLength={128}
							id="ap_email"
							type="email"
							name="email"
							tabIndex={4}
						/>
					</div>

					<div>
						<input
							className={styles.buttonContinue}
							id="continue"
							value="Continue"
							type="submit"
							name="submit"
							tabIndex={5}
						/>
						<div id="legalTextRow" className={styles.legalText}>
							By creating an account, you agree to Amazon's{' '}
							<a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=508088">
								<span className={styles.span1}>Conditions of Use</span> and{' '}
							</a>
							<a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=468496">
								<span className={styles.span1}>Privacy Notice.</span>
							</a>
						</div>
					</div>
					<div className={styles.bottomBorder}>
						<div className={styles.borderInner} />
					</div>
					<div id="alreadyRegisterd" className={styles.registeredText}>
						Aready have an account?{' '}
						<Link to={'/signin'}>
							<span className={styles.span1}>Sign-in</span>
						</Link>
					</div>
				</div>

				{/* Bottom Section */}
				<div className={styles.bottomBorder}>
					<div className={styles.borderInner} />
				</div>
				<div className={styles.container} style={{ flexDirection: 'row' }}>
					<a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088">
						<span className={styles.span2}>Conditions of use</span>
					</a>
					<a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496">
						<span className={styles.span2}>Privacy Notice</span>
					</a>
					<a href="https://www.amazon.com/gp/help/customer/display.html">
						<span className={styles.span2}>Help</span>
					</a>
				</div>

				{/* Footer Section */}
				<div className={styles.span3}>
					<span>© 1996-2021, Amazon.com, Inc. or its affiliates</span>
				</div>
			</div>
		</Fragment>
	);
};

export default RegisterPage;
