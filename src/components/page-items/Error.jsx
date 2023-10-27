import { Box, Button, Typography } from '@mui/material';

export default function Error({ type }) {
	let content = 'Page not found!';

	if (type === 'topic') {
		content = 'Topic not found!';
	}

	if (type === 'article') {
		content = 'Article not found!';
	}

	return (
		<Box
			mt={25}
			sx={{
				display: 'flex',
				justifyContent: 'top',
				alignItems: 'center',
				flexDirection: 'column',
				minHeight: '100vh',
				backgroundColor: 'primary',
			}}
		>
			<Typography variant="h1" style={{ color: 'black' }}>
				404
			</Typography>
			<Typography variant="h6" style={{ color: 'black' }}>
				{content}
			</Typography>
			<Button variant="contained" href="/">
				Back Home
			</Button>
		</Box>
	);
}
