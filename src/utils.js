import axios from 'axios';

const api = axios.create({
	baseURL: 'https://nc-news-ej32.onrender.com/api',
});

export function getArticles() {
	return api.get('./articles').then((response) => {
		return response.data.articles;
	});
}

export function getArticleBody(article) {
	const article_id = article.article_id;
	return api.get(`./articles/${article_id}`).then((response) => {
		return response.data.article.body;
	});
}

export function getComments(article) {
	const article_id = article.article_id;
	return api.get(`./articles/${article_id}/comments`).then((response) => {
		return response.data.comments;
	});
}

