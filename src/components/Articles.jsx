import { useEffect, useState } from 'react';
import ArticleList from './lists/ArticleList';
import Error from './page-items/Error';
import { getTopics } from '../utils';
import TopicSelect from './page-items/TopicSelect';
import SortSelect from './page-items/SortSelect';
import { useParams } from 'react-router-dom';
import { Typography, Toolbar } from '@mui/material';

export default function Articles({ searchParams, setSearchParams }) {
	const [topics, setTopics] = useState([]);
	const [error, setError] = useState(false);
	const topic = useParams().topic;

	useEffect(() => {
		setSearchParams({
			order: 'desc',
			sort_by: 'created_at',
		});
		getTopics()
			.then((response) => {
				return setTopics(response);
			})
			.then(() => {});
	}, []);


	if (!error) {
		return <Error />;
	} else {
		return (
			<>
				<Toolbar
					disableGutters
					sx={{
						display: { xs: 'flex' },
						flexDirection: 'row',
						justifyContent: 'start',
						gap: '30%',
					}}
				>
					<TopicSelect searchParams={searchParams} topics={topics} />
					<Typography sx={{ color: 'black', fontSize: 40 }}>
						Articles
					</Typography>
					<SortSelect
						searchParams={searchParams}
						setSearchParams={setSearchParams}
					/>
				</Toolbar>
				<ArticleList
					searchParams={searchParams}
					setSearchParams={setSearchParams}
					topic={topic}
				/>
				<div>
					<h2>Footer</h2>
				</div>
			</>
		);
	}
}
