import { useState } from 'react';
import CommentList from './lists/CommentList';
import { useLocation } from 'react-router-dom';
import { getArticleBody } from '../utils';
import Article from './Lists/list-items/Article';

export default function ArticleContents({ currentUser }) {
	const selectedArticle = useLocation().state.selectedArticle;
	const [body, setBody] = useState('');

	getArticleBody(selectedArticle).then((response) => {
		setBody(response);
	});

	return (
		<div>
			<Article article={selectedArticle} />
			{body}
			<CommentList
				selectedArticle={selectedArticle}
				currentUser={currentUser}
			/>
		</div>
	);
}
