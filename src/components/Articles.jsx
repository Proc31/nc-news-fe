import { useEffect, useState } from 'react';

import ArticleList from './Lists/ArticleList';
import { getTopics } from '../utils';
import TopicSelect from './page-items/TopicSelect';
import { useParams } from 'react-router-dom';
import { AppBar, Box, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

export default function Articles() {
	const [topics, setTopics] = useState([]);

	const topic = useParams().topic;

	useEffect(() => {
		getTopics().then((response) => {
			setTopics(response);
		});
	}, []);

	return (
		<>
			<Toolbar
				disableGutters
				sx={{
					display: { xs: 'flex' },
					flexDirection: 'row',
					justifyContent: 'start',
					gap: '37.5%',
				}}
			>
				<TopicSelect topics={topics} />
				<Typography sx={{ color: 'black', fontSize: 40 }}>
					Articles
				</Typography>
				<TopicSelect topics={topics} />
			</Toolbar>
			<ArticleList topic={topic} />
			<div>
				<h2>Footer</h2>
			</div>
		</>
	);
}
