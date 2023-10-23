import { useState } from 'react';
import { Link } from 'react-router-dom';
import { incrementVote } from '../../../utils';

export default function Article({ article }) {
	const selectedArticle = article;
	const [votes, setVotes] = useState(article.votes);

	function handleClick(event) {
		const num = Number(event.target.id);
		incrementVote(num, selectedArticle).then(() => {
			setVotes((votes) => {
				return votes + num;
			});
		});
	}

	return (
		<div>
			<button id="1" onClick={handleClick}>
				+
			</button>
			{votes}
			<button id="-1" onClick={handleClick}>
				-
			</button>
			<Link to="/article" state={{ selectedArticle }}>
				{selectedArticle.title}
			</Link>
			<br></br>
			{selectedArticle.topic}
			{selectedArticle.author}
			{selectedArticle.created_at}
			{selectedArticle.comment_count}
		</div>
	);
}
