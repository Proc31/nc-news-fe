import { Box, Button, Typography } from '@mui/material';
import { getUrlArray } from '../../utils';

export default function Error() {
	let content = 'Page not found!';

	const url = getUrlArray();

	if (url.length === 2 && url[0] === 'articles') {
		content = 'Topic not found!';
	}

	if (url.length === 2 && url[0] === 'article') {
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
