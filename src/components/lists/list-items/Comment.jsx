import { useEffect, useState } from 'react';
import { formatTime, incrementCommentVote } from '../../../utils';
import { IconButton, Tooltip, Typography, Box } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Article({ comment, currentUser, handleDelete }) {
	const [votes, setVotes] = useState(0);
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		setVotes(comment.votes);
	}, []);

	function handleClick(num) {
		num = Number(num);
		incrementCommentVote(num, comment).then(() => {
			setVotes((votes) => {
				return votes + num;
			});
		});
	}

	function addDelete() {
		let content = '';
		if (currentUser.username === comment.author) {
			content = (
				<Tooltip title="Delete Comment">
					<IconButton
						disabled={isClicked}
						onClick={() => {
							handleDelete(comment);
							if (!isClicked) setIsClicked(true);
						}}
					>
						<DeleteForeverIcon />
					</IconButton>
				</Tooltip>
			);
		}
		return content;
	}

	return (
		<Box
			sx={{
				display: 'grid',
				border: 1,
				boxShadow: 10,
				padding: 1,
				gridTemplateColumns: '0.05fr 1fr 0.3fr',
				gridTemplateRows: 'auto',
			}}
		>
			<Box //Up arrow box
				sx={{
					gridColumn: '1',
					gridRow: '1',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<IconButton
					id="1"
					onClick={() => {
						handleClick(1);
					}}
					aria-label="up-vote"
				>
					<ArrowDropUpIcon />
				</IconButton>
			</Box>
			<Box //Votes Box
				sx={{
					display: 'flex',
					gridColumn: '1',
					gridRow: '2',
					justifyContent: 'center',
				}}
			>
				<Typography sx={{ fontSize: 20 }}>{votes}</Typography>
			</Box>
			<Box //Down arrow box
				sx={{
					gridColumn: '1',
					gridRow: '3',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<IconButton
					id="-1"
					onClick={() => {
						handleClick(-1);
					}}
					aria-label="down-vote"
				>
					<ArrowDropDownIcon />
				</IconButton>
			</Box>
			<Box
				mx={2}
				sx={{
					display: 'flex',
					gridColumn: '2/3',
					gridRow: '1/4',
				}}
			>
				<Typography>{comment.body}</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					gridColumn: '3/4',
					gridRow: '1/2',
					justifyContent: 'end',
				}}
			>
				<Typography sx={{ fontSize: 14 }}>
					Posted By: {comment.author}
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					gridColumn: '3/4',
					gridRow: '2/3',
					justifyContent: 'end',
				}}
			>
				{addDelete()}
			</Box>
			<Box
				sx={{
					display: 'flex',
					gridColumn: '3/4',
					gridRow: '3/4',
					justifyContent: 'end',
					alignItems: 'end',
				}}
			>
				<Typography sx={{ fontSize: 12 }}>
					Created On: {formatTime(comment.created_at)}
				</Typography>
			</Box>
		</Box>
	);
}
