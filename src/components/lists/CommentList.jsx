import { useState } from 'react';
import { getComments, postComment } from '../../utils';
import Comment from './list-items/Comment';

export default function CommentList({ selectedArticle, currentUser }) {
	const [commentList, setCommentList] = useState([]);

	getComments(selectedArticle).then((response) => {
		setCommentList(response);
	});

	function addComment(e) {
		e.preventDefault();
		const body = e.target[0].value;
		postComment(body, selectedArticle, currentUser).then(() => {
			getComments(selectedArticle).then((response) => {
				setCommentList(() => [...response]);
			});
		});
	}

	return (
		<div>
			<form onSubmit={addComment}>
				<textarea type="text" name="name" />
				<input type="submit" value="Submit" />
			</form>
			<ol>
				{commentList.map((comment, index) => {
					return (
						<li key={comment + index}>
							<Comment comment={comment} />
						</li>
					);
				})}
			</ol>
		</div>
	);
}
