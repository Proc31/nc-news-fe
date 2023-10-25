import axios from 'axios';

const api = axios.create({
	baseURL: 'https://nc-news-ej32.onrender.com/api',
});

export function getArticles(topic, searchParams) {
	const params = {
		topic: topic,
		order: searchParams.get('order'),
		sort_by: searchParams.get('sort_by'),
	};
	return api.get('./articles', { params }).then((response) => {
		return response.data.articles;
	});
}

export function getArticleBody(article) {
	const article_id = article.article_id;
	return api.get(`./articles/${article_id}`).then((response) => {
		return response.data.article.body;
	});
}

export function getTopics() {
	return api.get('./topics').then((response) => {
		return response.data.topics;
	});
}

export function getComments(article) {
	const article_id = article.article_id;
	return api.get(`./articles/${article_id}/comments`).then((response) => {
		return response.data.comments;
	});
}

export function postComment(body, article, user) {
	const article_id = article.article_id;
	const comment = {
		username: user.username,
		body: body,
	};
	return api
		.post(`articles/${article_id}/comments`, comment)
		.then((response) => {
			return response.data.comment;
		});
}

export function incrementVote(num, article) {
	const article_id = article.article_id;
	const voteChange = {
		inc_votes: num,
	};
	return api.patch(`/articles/${article_id}`, voteChange);
}


export function formatTime (dateString) {
	const options = { year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute:'numeric' };
	return new Date(dateString).toLocaleDateString('en-GB', options);
};
