import { useEffect, useState } from 'react';

export default function Article({ article }) {
	const [selectedArticle, setSelectedArticle] = useState({});

	useEffect(() => {
		setSelectedArticle(article);
	}, []);

	return (
		<div>
			{selectedArticle.title}
			{selectedArticle.topic}
			{selectedArticle.author}
			{selectedArticle.body}
			{selectedArticle.created_at}
			{selectedArticle.votes}
			{selectedArticle.comment_count}
		</div>
	);
}
