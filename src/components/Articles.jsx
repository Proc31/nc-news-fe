import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTopics } from '../utils';
import ArticleList from './lists/ArticleList';
import Error from './page-items/Error';
import BottomBar from './page-items/BottomBar';
import TopBar from './page-items/TopBar';

export default function Articles({ searchParams, setSearchParams }) {
	const [topics, setTopics] = useState([]);
	const [error, setError] = useState(false);
	const [articleCount, setArticleCount] = useState(0);
	const topic = useParams().topic;

	useEffect(() => {
		setSearchParams({
			order: 'desc',
			sort_by: 'created_at',
			limit: 10,
			p: 1,
		});
		getTopics().then((response) => {
			return setTopics(response);
		});
	}, []);

	if (error) {
		return <Error type="topic" />;
	} else {
		return (
			<>
				<TopBar
					searchParams={searchParams}
					setSearchParams={setSearchParams}
					topics={topics}
				/>
				<ArticleList
					searchParams={searchParams}
					topic={topic}
					setError={setError}
					setArticleCount={setArticleCount}
				/>
				<BottomBar
					articleCount={articleCount}
					searchParams={searchParams}
					setSearchParams={setSearchParams}
				/>
			</>
		);
	}
}

