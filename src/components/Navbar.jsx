import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
	return (
		<div>
			<nav>
				<Link to="/">Articles </Link>
				<Link to="/topics">Topics </Link>
				<Link to="/profile">Profile </Link>
				<Link to="/users">Users </Link>
			</nav>
		</div>
	);
}
