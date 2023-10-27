import { useEffect, useState } from 'react';
import { getTopics } from '../utils';
import TopicList from './lists/TopicList';
import { Box, Typography } from '@mui/material';

export default function Topics() {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then((response) => {
			setTopics(response);
		});
	});

	return (
		<>
			<Box sx={{ alignItems: 'center', flexGrow: 1 }}>
				<Typography
					variant="h3"
					noWrap
					component="a"
					href="/topics"
					sx={{
						display: 'flex',
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.5rem',
						color: 'inherit',
						textDecoration: 'none',
						textTransform: 'uppercase',
					}}
				>
					Topics
				</Typography>
			</Box>
			<TopicList />
		</>
	);
}
