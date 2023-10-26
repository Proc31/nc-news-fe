import { useState, useEffect } from 'react';
import { getComments, postComment, deleteComment } from '../../utils';
import Comment from './list-items/Comment';
import { useParams } from 'react-router-dom';
import { Box, Stack, TextField, Button } from '@mui/material';

export default function CommentList({ currentUser, selectedArticle }) {
	const article_id = useParams().article_id;
	const [commentList, setCommentList] = useState([]);
	const [comment, setComment] = useState('');

	useEffect(() => {
		getComments(article_id).then((response) => {
			setCommentList(response);
		});
	}, []);

	function addComment() {
		postComment(comment, selectedArticle, currentUser)
			.then(() => {
				return getComments(article_id);
			})
			.then((response) => {
				setCommentList(response);
			});
	}

	function buildComment(e) {
		setComment(e.target.value);
	}

	function handleDelete(comment) {
		deleteComment(comment)
			.then(() => {
				return getComments(article_id);
			})
			.then((response) => {
				setCommentList(response);
			});
	}

	const comments = commentList.map((comment) => {
		return (
			<div key={comment.comment_id}>
				<Comment
					comment={comment}
					currentUser={currentUser}
					handleDelete={handleDelete}
				/>
			</div>
		);
	});

	return (
		<>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '85% 15%',
					gridTemplateRows: '50% 50%',
				}}
				component="form"
				autoComplete="off"
			>
				<TextField
					onChange={buildComment}
					sx={{
						gridRow: '1/3',
					}}
					fullWidth
					multiline
					maxRows={4}
					label="Add your comment!"
				/>
				<Button
					variant="outlined"
					sx={{
						gridColumn: '2/3',
						gridRow: '1/3',
					}}
					onClick={addComment}
				>
					Submit
				</Button>
			</Box>
			<Stack spacing={2} alignItems="stretch" mt={4}>
				{comments}
			</Stack>
		</>
	);
}