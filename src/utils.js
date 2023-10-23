import axios from 'axios';

const api = axios.create({
	baseURL: 'https://nc-news-ej32.onrender.com/api',
});

export function getArticles() {
	return api.get('./articles').then((response) => {
		return response.data.articles;
	});
}
