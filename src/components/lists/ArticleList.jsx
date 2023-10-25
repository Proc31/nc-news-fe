import { useState, useEffect } from 'react';
import Article from './list-items/Article';
import { getArticles } from '../../utils';
import Stack from '@mui/material/Stack';

export default function ArticleList({ topic, searchParams }) {
	const [articleList, setArticleList] = useState([]);

	useEffect(() => {
		getArticles(topic, searchParams).then((response) => {
			setArticleList(response);
		});
	}, [topic, searchParams]);

	const articles = articleList.map((article) => {
		return (
			<div key={article.article_id}>
				<Article article={article} />
			</div>
		);
	});

	return (
		<Stack spacing={4} alignItems="stretch" m={4}>
			{articles}
		</Stack>
	);
}
