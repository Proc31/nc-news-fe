import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Topics from './components/Topics';
import Profile from './components/Profile';
import Users from './components/Users';

function App() {
	const [currentUser, setCurrentUser] = useState({});

	return (
		<div>
			<h1>NC-News</h1>
			<Navbar />
			<Routes>
				<Route path="/" element={<Articles />} />
				<Route path="/topics" element={<Topics />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/users" element={<Users />} />
			</Routes>
		</div>
	);
}

export default App
