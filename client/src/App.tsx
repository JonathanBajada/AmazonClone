import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';

function App() {
	return (
		<Fragment>
			<Route exact path="/" component={HomePage} />
			<Route path="/signin" component={LoginPage} />
			<Route path="/register" component={RegisterPage} />
		</Fragment>
	);
}

export default App;
