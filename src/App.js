import React from 'react';
import './App.css';
<<<<<<< Updated upstream
import FirstComponent from './FirstComponent/FirsrComponent';
import SecondComponent from './SecondComponent/SecondComponent';
import ThirdComponent from './ThirdComponent/ThirdComponent';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './Navbar/NavBar';

function App() {
	return (
		<div className="app-wrapper">
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/first" component={FirstComponent} />

					<Route exact path="/second" component={SecondComponent} />

					<Route path="/second/:id" component={ThirdComponent} />
					<Redirect path="/" to="/second/first" />
				</Switch>
			</BrowserRouter>
=======
import List from './components/List/List';

function App() {
	return (
		<div className="App-wrapper">
			<List />
>>>>>>> Stashed changes
		</div>
	);
}

export default App;
