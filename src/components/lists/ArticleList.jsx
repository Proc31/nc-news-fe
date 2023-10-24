import { useState, useEffect, useMemo } from 'react';
import Article from './list-items/Article';
import { getArticles } from '../../utils';
import { useParams } from 'react-router-dom';

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

function setParams() {
	const topic = useParams().topic;
	return useMemo(() => {
		return topic;
	});
}
