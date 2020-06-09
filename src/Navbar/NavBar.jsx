import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className="navbar">
			<div className="item">
				<NavLink to="/first">нереальные</NavLink>
			</div>
			<div className="item">
				<NavLink to="/second">пасхалочки</NavLink>
			</div>
		</div>
	);
};

export default NavBar;
