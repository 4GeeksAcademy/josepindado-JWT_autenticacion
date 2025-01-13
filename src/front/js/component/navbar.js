import React from "react";
import { Link } from "react-router-dom";
import '../../styles/index.css';

export const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/">
				<img className="navbar-logo" src="https://i.imgur.com/tFLDi3u.png" alt="GeekGym" />
				</Link>
				<div className="navbar-links">
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary">Sign Up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};