import { useState, useEffect } from 'react';
import { getComments, postComment, deleteComment } from '../../utils';
import Comment from './list-items/Comment';
import { useParams } from 'react-router-dom';
import {
	Box,
	Stack,
	TextField,
	Button,
	IconButton,
	Tooltip,
	Alert,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

export default function CommentList({ currentUser, selectedArticle }) {
	const article_id = useParams().article_id;
	const [commentList, setCommentList] = useState([]);
	const [comment, setComment] = useState('');
	const [error, setError] = useState(false);
	const [successComment, setSuccessComment] = useState(false);
	const [successDelete, setSuccessDelete] = useState(false);

	useEffect(() => {
		getComments(article_id).then((response) => {
			setCommentList(response);
		});
	}, []);

	function addComment() {
		if (comment.length > 2) {
			postComment(comment, selectedArticle, currentUser)
				.then(() => {
					setComment('');
					setError(false);
					setSuccessComment(true);
					return getComments(article_id);
				})
				.then((response) => {
					setCommentList(response);
				});
		} else {
			setError(true);
		}
	}

	function handleDelete(comment) {
		deleteComment(comment)
			.then(() => {
				setSuccessDelete(true);
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
			<Alert
				onClose={() => {
					setSuccessComment(false);
				}}
				severity="success"
				sx={{
					position: 'fixed',
					visibility: successComment ? 'visible' : 'hidden',
					bottom: (theme) => theme.spacing(5),
					left: (theme) => theme.spacing(50),
				}}
			>
				Comment Submitted!
			</Alert>
			<Alert
				onClose={() => {
					setSuccessDelete(false);
				}}
				severity="success"
				sx={{
					position: 'fixed',
					visibility: successDelete ? 'visible' : 'hidden',
					bottom: (theme) => theme.spacing(5),
					left: (theme) => theme.spacing(50),
				}}
			>
				Comment Deleted!
			</Alert>
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
					error={error}
					label={
						error
							? 'Comment must be at least 3 characters!'
							: 'Add your comment!'
					}
					onChange={(e) => {
						if (e.target.value.length === 0) {
							setError(false);
						}
						setComment(e.target.value);
					}}
					InputProps={{
						endAdornment: (
							<Tooltip title="Clear comment">
								<IconButton
									sx={{
										visibility: comment
											? 'visible'
											: 'hidden',
									}}
									onClick={() => {
										setComment('');
										setError(false);
									}}
								>
									<ClearIcon />
								</IconButton>
							</Tooltip>
						),
					}}
					value={comment}
					sx={{
						gridRow: '1/3',
					}}
					fullWidth
					multiline
					maxRows={4}
				/>
				<Button
					variant="outlined"
					color={error ? 'error' : 'primary'}
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