import { useState, useEffect } from 'react';
import { getComments } from '../../utils';
import Comment from './list-items/Comment';

export default function CommentList({ selectedArticle }) {
	const [commentList, setCommentList] = useState([]);

	useEffect(() => {
		getComments(selectedArticle).then((response) => {
			setCommentList(response);
		});
	}, []);

	return (
		<ol>
			{commentList.map((comment, index) => {
				return (
					<li key={comment + index}>
						<Comment comment={comment} />
					</li>
				);
			})}
		</ol>
	);
}
