import { useState, useEffect } from 'react';
import Article from './list-items/Article';
import { getArticles } from '../../utils';

export default function ArticleList() {
	const [articleList, setArticleList] = useState([]);
	useEffect(() => {
		getArticles().then((response) => {
			setArticleList(response);
		});
	}, []);

	console.log('Articlelist =', articleList);

	return (
		<ol>
			{articleList.map((article, index) => {
				return (
					<li key={article + index}>
						<Article article={article} />
					</li>
				);
			})}
		</ol>
	);
}
