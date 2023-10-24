import { useState, useEffect } from 'react';
import Article from './list-items/Article';
import { getArticles } from '../../utils';

export default function ArticleList({ topic }) {
	const [articleList, setArticleList] = useState([]);

	useEffect(() => {
		getArticles(topic).then((response) => {
			setArticleList(response);
		});
	}, [topic]);

	const articles = articleList.map((article) => {
		return (
			<li key={article.article_id}>
				<Article article={article} />
			</li>
		);
	});

	return (
		<div>
			<ol>{articles}</ol>
		</div>
	);
}
