import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Article({ article }) {
	const [selectedArticle, setSelectedArticle] = useState({});

	useEffect(() => {
		setSelectedArticle(article);
	}, []);

	return (
		<div>
			<Link to="/article" state={{ selectedArticle }}>
				{selectedArticle.title}
			</Link>
			<br></br>
			{selectedArticle.topic}
			{selectedArticle.author}
			{selectedArticle.created_at}
			{selectedArticle.votes}
			{selectedArticle.comment_count}
		</div>
	);
}
