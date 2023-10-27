import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatTime, incrementVote } from '../../../utils';
import { IconButton, Typography, Box } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Article({ article }) {
	const [votes, setVotes] = useState(article.votes);

	function handleClick(num) {
		incrementVote(num, article).then(() => {
			setVotes((votes) => {
				return votes + num;
			});
		});
	}

	return (
		<>
			<Box //Base box
				mt={2}
				sx={{
					display: 'grid',
					border: 1,
					gridTemplateColumns: '0.2fr 1fr 1fr 1fr',
					gridTemplateRows: 'auto',
					boxShadow: 10,
					padding: 1,
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
				<Box // Title box
					sx={{
						gridColumn: '2/5',
						gridRow: '1/3',
					}}
				>
					<Link
						to={`/article/${article.article_id}`}
						state={{ article }}
					>
						<Typography align="center" sx={{ fontSize: 28 }}>
							{article.title}
						</Typography>
					</Link>
				</Box>
				<Box //Comment count box
					sx={{
						display: 'flex',
						gridColumn: '2',
						gridRow: '3',
						justifyContent: 'start',
						alignItems: 'end',
					}}
				>
					<Typography sx={{ fontSize: 14 }}>
						Comments: {article.comment_count}
					</Typography>
				</Box>
				<Box //Author box
					sx={{
						display: 'flex',
						gridColumn: '3',
						gridRow: '3',
						justifyContent: 'center',
						alignItems: 'end',
					}}
				>
					<Typography sx={{ fontSize: 14 }}>
						User: {article.author}
					</Typography>
				</Box>
				<Box //Created at box
					sx={{
						display: 'flex',
						gridColumn: '4',
						gridRow: '3',
						justifyContent: 'end',
						alignItems: 'end',
					}}
				>
					<Typography sx={{ fontSize: 14 }}>
						Created On: {formatTime(article.created_at)}
					</Typography>
				</Box>
			</Box>
		</>
	);
}
