import { useState, useEffect } from 'react';
import { getComments, postComment } from '../../utils';
import Comment from './list-items/Comment';

export default function CommentList({ selectedArticle, currentUser }) {
	const [commentList, setCommentList] = useState([]);

	useEffect(() => {
		getComments(selectedArticle).then((response) => {
			setCommentList(response);
		});
	}, []);

	function addComment(e) {
		e.preventDefault();
		const body = e.target[0].value;
		postComment(body, selectedArticle, currentUser)
			.then(() => {
				return getComments(selectedArticle);
			})
			.then((response) => {
				setCommentList(response);
			});
	}

	const comments = commentList.map((comment) => {
		return (
			<li key={comment.comment_id}>
				<Comment comment={comment} />
			</li>
		);
	});

	return (
		<div>
			<form onSubmit={addComment}>
				<textarea type="text" name="name" />
				<input type="submit" value="Submit" />
			</form>
			<ol>{comments}</ol>
		</div>
	);
}
