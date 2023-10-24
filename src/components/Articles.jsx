import { useEffect, useState } from 'react';

import ArticleList from './Lists/ArticleList';
import { getTopics } from '../utils';
import TopicSelect from './page-items/TopicSelect';
import { useParams } from 'react-router-dom';

export default function Articles() {
	const [topics, setTopics] = useState([]);

	const topic = useParams().topic;

	useEffect(() => {
		getTopics().then((response) => {
			setTopics(response);
		});
	}, []);

	return (
		<div>
			<div>
				<h2>Articles</h2>
				<TopicSelect topics={topics} />
			</div>
			<ArticleList topic={topic} />
			<div>
				<h2>Footer</h2>
			</div>
		</div>
	);
}
