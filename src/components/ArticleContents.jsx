import { useEffect, useState } from 'react';
import CommentList from './lists/CommentList';
import { getSingleArticle } from '../utils';
import Article from './Lists/list-items/Article';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function ArticleContents({ currentUser }) {
	const article_id = useParams().article_id;
	const [selectedArticle, setSelectedArticle] = useState({});

	useEffect(() => {
		getSingleArticle(article_id).then((response) => {
			setSelectedArticle(response);
		});
	}, [article_id]);

	return (
		<>
			<Article article={selectedArticle} />
			<Box
				my={3}
				sx={{
					border: 1,
					boxShadow: 5,
					padding: 3,
				}}
			>
				<Typography>{selectedArticle.body}</Typography>
			</Box>
			<CommentList
				currentUser={currentUser}
				selectedArticle={selectedArticle}
			/>
		</>
	);
}
