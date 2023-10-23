import { useState } from 'react';
import ArticleList from './Lists/ArticleList';

export default function Articles() {
	return (
		<div>
			<div>
				<h2>Header</h2>
			</div>
			<ArticleList />
			<div>
				<h2>Footer</h2>
			</div>
		</div>
	);
}
