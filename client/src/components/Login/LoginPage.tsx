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
				{/* Home Button */}
				<Link style={{ alignSelf: 'center' }} to={'/'}>
					<img src={logo} style={{ width: '200px', height: '75px' }} />
				</Link>

				{/* Form Input */}
				<div className={styles.formBox} style={{ height: showHelp === false ? '281px' : '327px' }}>
					<h1>Sign-In</h1>

					<div id="email" style={{ marginBottom: '14px' }}>
						<label htmlFor="ap_email">Enter email address</label>
						<input maxLength={128} id="ap_email" type="email" name="email" tabIndex={1} autoFocus />
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
							By continuing, you agree to Amazon's <span className={styles.span1}>Conditions of Use</span>{' '}
							and <span className={styles.span1}>Privacy Notice.</span>
						</div>
					</div>

					{/* help button and list */}
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<div
							className={styles.helpWrapper}
							onClick={() => {
								showHelp === true ? setShowHelp(false) : setShowHelp(true);
							}}
						>
							{showHelp === false ? (
								<AiFillCaretRight size={10} className={styles.arrow} />
							) : (
								<AiOutlineCaretDown size={9} className={styles.arrow} />
							)}
							<span className={styles.span1} style={{ marginLeft: '4px' }}>
								Need Help?
							</span>
						</div>
						{showHelp === true ? (
							<div style={{ marginLeft: '10px' }}>
								<li>
									<span className={styles.span1}>Forget your password?</span>
								</li>
								<li>
									<span className={styles.span1}>Other issues with Sign-In</span>
								</li>
							</div>
						) : null}
					</div>
				</div>
				{/* Sign Up Section */}
				<div className={styles.registerBox}>
					<div className={styles.container} style={{ flexDirection: 'row' }}>
						<div className={styles.registerLine} />
						<span className={styles.span4}>New to Amazon?</span>
						<div className={styles.registerLine} />
					</div>
					<input
						style={{ marginTop: '10px' }}
						className={styles.buttonRegister}
						id="continue"
						value="Create your Amazon account"
						type="submit"
						name="submit"
						tabIndex={5}
					/>
				</div>

				{/* Buttom Section */}
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

export default LoginPage;
