import { Typography, Box } from '@mui/material';

export default function Topic({ topic }) {
	return (
		<Box //Base box
			mt={2}
			sx={{
				display: 'grid',
				border: 1,
				boxShadow: 10,
				padding: 1,
				height: 150,
				width: 150,
			}}
		>
			<Box>
				<Typography sx={{ textTransform: 'capitalize' }}>
					{topic.slug}
				</Typography>
			</Box>
			<Box>
				<Typography>{topic.description}</Typography>
			</Box>
		</Box>
	);
}
