import { useEffect, useState } from 'react';

export default function Article({ comment }) {
	const [selectedComment, setSelectedComment] = useState({});

	useEffect(() => {
		setSelectedComment(comment);
	}, []);

	return (
		<div>
			{selectedComment.votes}
			{selectedComment.created_at}
			{selectedComment.author}
			{selectedComment.body}
		</div>
	);
}
