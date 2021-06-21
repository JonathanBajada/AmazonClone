import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	return (
		<Fragment>
			<div style={{ marginBottom: '22px' }}>
				<div
					style={{ display: 'block', borderRadius: '4px', border: '1px #ddd solid', backgroundColor: '#fff' }}
				>
					<h1>Sign In</h1>
					<label>Email or phone number</label>
					<input type="email" maxLength={128} name="email" />
				</div>
			</div>
		</Fragment>
	);
};

export default LoginPage;
