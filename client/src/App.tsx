import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';

function App() {
	return (
		<Fragment>
			<Route exact path="/" component={HomePage} />
			<Route path="/signin" component={LoginPage} />
		</Fragment>
	);
}

export default App;
