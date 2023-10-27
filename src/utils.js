import axios from 'axios';

const api = axios.create({
	baseURL: 'https://nc-news-ej32.onrender.com/api',
});

export function getArticles(topic, searchParams) {
	const params = {
		topic: topic,
		order: searchParams.get('order'),
		sort_by: searchParams.get('sort_by'),
		p: searchParams.get('p'),
		limit: searchParams.get('limit'),
	};
	return api.get('./articles', { params }).then((response) => {
		return response.data;
	});
}

export function getSingleArticle(article_id) {
	return api.get(`./articles/${article_id}`).then((response) => {
		return response.data.article;
	});
}

export function getTopics() {
	return api.get('./topics').then((response) => {
		return response.data.topics;
	});
}

export function getComments(article_id) {
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

export function deleteComment(comment) {
	const comment_id = comment.comment_id;
	return api.delete(`/comments/${comment_id}`);
}

export function incrementCommentVote(num, comment) {
	const comment_id = comment.comment_id;
	const voteChange = {
		inc_votes: num,
	};
	return api.patch(`/comments/${comment_id}`, voteChange);
}

export function incrementVote(num, article) {
	const article_id = article.article_id;
	const voteChange = {
		inc_votes: num,
	};
	return api.patch(`articles/${article_id}`, voteChange);
}


export function formatTime (dateString) {
	const options = { year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute:'numeric' };
	return new Date(dateString).toLocaleDateString('en-GB', options);
};

