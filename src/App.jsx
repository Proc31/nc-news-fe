import { useState } from 'react'
import { Route, Routes, Navigate, useSearchParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Topics from './components/Topics';
import Profile from './components/Profile';
import Users from './components/Users';
import Error from './components/page-items/Error';
import ArticleContents from './components/ArticleContents';

function App() {
	const [currentUser, setCurrentUser] = useState({
		username: 'weegembump',
		name: 'Gemma Bump',
		avatar_url:
			'https://vignette.wikia.nocookie.net/mrmen/images/7/7e/MrMen-Bump.png/revision/latest?cb=20180123225553',
	});
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<div>
			<Navbar currentUser={currentUser} searchParams={searchParams} />
			<Routes>
				<Route
					path="/"
					element={<Navigate to="/articles" replace={true} />}
				></Route>
				<Route
					path="/articles"
					element={
						<Articles
							searchParams={searchParams}
							setSearchParams={setSearchParams}
						/>
					}
				/>
				<Route
					path="/articles/:topic"
					element={
						<Articles
							searchParams={searchParams}
							setSearchParams={setSearchParams}
						/>
					}
				/>
				<Route
					path="/article/:article_id"
					element={<ArticleContents currentUser={currentUser} />}
				/>
				<Route path="/topics" element={<Topics />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/users" element={<Users />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App
