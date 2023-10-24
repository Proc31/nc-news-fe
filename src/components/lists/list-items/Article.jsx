import { useState } from 'react';
import { Link } from 'react-router-dom';
import { incrementVote } from '../../../utils';
import { Button, IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Article({ article }) {
	const selectedArticle = article;
	const [votes, setVotes] = useState(article.votes);

	function handleClick(num) {
		num = Number(num);
		incrementVote(num, selectedArticle).then(() => {
			setVotes((votes) => {
				return votes + num;
			});
		});
	}

	return (
		<>
			<Box
				sx={{
					display: 'grid',
					border: 1,
					gridTemplateColumns: '0.2fr 1fr 1fr 1fr',
					gridTemplateRows: 'auto',
					boxShadow: 10,
					padding: 1,
				}}
			>
				<Box
					sx={{
						gridColumn: '1',
						gridRow: '1',
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
				<Box
					sx={{
						gridColumn: '1',
						gridRow: '2',
						textAlign: 'center',
					}}
				>
					<Typography>{votes}</Typography>
				</Box>
				<Box
					sx={{
						gridColumn: '1',
						gridRow: '3',
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
					sx={{
						gridColumn: '2/5',
						gridRow: '1/3',
					}}
				>
					<Typography>{selectedArticle.title}</Typography>
				</Box>
				<Box
					sx={{
						gridColumn: '2',
						gridRow: '3',
					}}
				>
					<Typography>{selectedArticle.comment_count}</Typography>
				</Box>
				<Box
					sx={{
						gridColumn: '3',
						gridRow: '3',
					}}
				>
					<Typography>{selectedArticle.author}</Typography>
				</Box>
				<Box
					sx={{
						gridColumn: '4',
						gridRow: '3',
					}}
				>
					<Typography>{selectedArticle.created_at}</Typography>
				</Box>
			</Box>
		</>
	);
}
