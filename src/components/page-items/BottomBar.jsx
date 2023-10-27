import {
	FormControl,
	Select,
	MenuItem,
	InputLabel,
	Container,
	Toolbar,
	Box,
	Pagination,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

export default function BottomBar({
	searchParams,
	setSearchParams,
	articleCount,
}) {
	const [pageCount, setPageCount] = useState(0);

	useEffect(() => {
		setPageCount(Math.ceil(articleCount / searchParams.get('limit')));
	}, [articleCount, searchParams]);

	function changeLimit(event) {
		window.scrollTo(0, 0);
		setSearchParams({
			order: searchParams.get('order'),
			sort_by: searchParams.get('sort_by'),
			p: searchParams.get('p'),
			limit: event.target.value,
		});
	}

	function changePage(event) {
		window.scrollTo(0, 0);
		setSearchParams({
			order: searchParams.get('order'),
			sort_by: searchParams.get('sort_by'),
			p: event.target.innerText,
			limit: searchParams.get('limit'),
		});
	}

	return (
		<Container maxWidth="xl">
			<Toolbar disableGutters>
				<Box sx={{ flexGrow: 1 }}>
					<Typography>Total Articles: {articleCount}</Typography>
				</Box>
				<Box sx={{ flexGrow: 1, alignItems: 'center' }}>
					<Pagination
						count={pageCount}
						color="primary"
						onClick={changePage}
					/>
				</Box>
				<Box sx={{ flexGrow: 0, width: 150 }}>
					<FormControl fullWidth>
						<InputLabel>Articles Per Page</InputLabel>
						<Select
							label="Select Articles per Page"
							value={searchParams.get('limit')}
							onChange={changeLimit}
						>
							<MenuItem value={5}>5</MenuItem>
							<MenuItem value={10}>10</MenuItem>
							<MenuItem value={20}>20</MenuItem>
							<MenuItem value={30}>30</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Toolbar>
		</Container>
	);
}
