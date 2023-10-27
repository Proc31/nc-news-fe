import TopicList from './lists/TopicList';
import { Box, Typography } from '@mui/material';

export default function Topics() {
	return (
		<>
			<Box textAlign="center" sx={{ flexGrow: 1 }}>
				<Typography
					variant="h3"
					noWrap
					component="a"
					href="/topics"
					sx={{
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
