import { useEffect, useState } from 'react';
import CommentList from './lists/CommentList';
import { useLocation } from 'react-router-dom';
import { getArticleBody } from '../utils';

export default function ArticleContents() {
	const selectedArticle = useLocation().state.selectedArticle;
	const [body, setBody] = useState('');

	useEffect(() => {
		getArticleBody(selectedArticle).then((response) => {
			setBody(response);
		});
	});

	return (
		<div>
			{body}
			<CommentList selectedArticle={selectedArticle} />
		</div>
	);
}
