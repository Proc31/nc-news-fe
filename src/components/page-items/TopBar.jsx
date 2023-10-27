import { Container, Toolbar, Box, Typography } from '@mui/material';
import TopicSelect from './TopicSelect';
import SortSelect from './SortSelect';

export default function TopBar({ searchParams, setSearchParams, topics }) {
	return (
		<Container maxWidth="xl">
			<Toolbar disableGutters>
				<Box sx={{ flexGrow: 1 }}>
					<TopicSelect searchParams={searchParams} topics={topics} />
				</Box>
				<Box sx={{ alignItems: 'center', flexGrow: 1 }}>
					<Typography
						variant="h3"
						noWrap
						component="a"
						href="/"
						sx={{
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.5rem',
							color: 'inherit',
							textDecoration: 'none',
							textTransform: 'uppercase',
						}}
					>
						Articles
					</Typography>
				</Box>
				<Box sx={{ flexGrow: 0 }}>
					<SortSelect
						searchParams={searchParams}
						setSearchParams={setSearchParams}
					/>
				</Box>
			</Toolbar>
		</Container>
	);
}
