import { useState, useEffect } from 'react';
import Article from './list-items/Article';
import Loading from '../page-items/Loading';
import { getArticles } from '../../utils';
import Stack from '@mui/material/Stack';

export default function ArticleList({
	topic,
	searchParams,
	setError,
	setArticleCount,
}) {
	const [articleList, setArticleList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getArticles(topic, searchParams)
			.then((response) => {
				setArticleList(response.articles);
				setArticleCount(response.total_count);
				setError(false);
				setLoading(false);
			})
			.catch(() => {
				setError(true);
			});
	}, [topic, searchParams]);

	const articles = articleList.map((article) => {
		return (
			<div key={article.article_id}>
				<Article article={article} />
			</div>
		);
	});

	if (loading) {
		return <Loading />;
	} else {
		return (
			<Stack spacing={1} alignItems="stretch" mx={4} my={1}>
				{articles}
			</Stack>
		);
	}
}
