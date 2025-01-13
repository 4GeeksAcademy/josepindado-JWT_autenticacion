import React from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css';

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/">
				<img className="navbar-logo" src="https://assets.turbologo.com/blog/es/2019/10/19133021/ferrari-logo-illustration.jpg" alt="Ferrari Land" />
				</Link>
				<div className="navbar-links">
					<Link to="/login">
						<button className="btn btn-secondary">Login</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-secondary">Sign Up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};