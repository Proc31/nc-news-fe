import { useState } from 'react';
import { Link } from 'react-router-dom';
import { incrementVote } from '../../../utils';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

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
		<Grid
			container
			spacing={3}
			border={2}
			borderRadius={3}
			justifyContent="center"
			alignItems="center"
		>
			<Grid container>
				<Grid item xs={1}>
					<Button
						variant="contained"
						id="1"
						onClick={handleClick}
						sx={{
							borderRadius: 2,
						}}
					>
						<Typography
							sx={{
								fontSize: 20,
							}}
						>
							+
						</Typography>
					</Button>
				</Grid>
				<Grid item>
					<Typography
						sx={{
							fontSize: 26,
							fontWeight: 'regular',
							paddingX: 2,
						}}
					>
						{votes}
					</Typography>
				</Grid>
				<Grid item>
					<Button
						variant="contained"
						id="-1"
						onClick={handleClick}
						sx={{
							borderRadius: 2,
						}}
					>
						<Typography
							sx={{
								fontSize: 20,
							}}
						>
							-
						</Typography>
					</Button>
				</Grid>
			</Grid>
			<Grid>
				<Typography>
					<Link to="/article" state={{ selectedArticle }}>
						{selectedArticle.title}
					</Link>
				</Typography>
			</Grid>
			<Grid>
				<Typography>{selectedArticle.comment_count}</Typography>
			</Grid>
		</Grid>
	);
}