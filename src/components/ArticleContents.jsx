import { useEffect, useState } from 'react';
import CommentList from './lists/CommentList';
import { getSingleArticle } from '../utils';
import Article from './Lists/list-items/Article';
import Loading from './page-items/Loading';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Error from './Error';

export default function ArticleContents({ currentUser }) {
	const article_id = useParams().article_id;
	const [selectedArticle, setSelectedArticle] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getSingleArticle(article_id)
			.then((response) => {
				setError(false);
				setSelectedArticle(response);
				setLoading(false);
			})
			.catch((err) => {
				setError(true);
			});
	}, []);

	if (error) {
		return <Error />;
	} else if (loading) {
		return <Loading />;
	} else {
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
}
