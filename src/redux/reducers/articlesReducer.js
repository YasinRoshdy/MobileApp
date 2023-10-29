import {
	SET_IS_ARTICLES_LOADING,
	SET_IS_ARTICLE_DETAILS_LOADING,
	SET_ARTICLES,
} from '../types';

const initState = {
	isArticlesLoading: true,
	isArticlesDetailsLoading: true,
	articles: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_IS_ARTICLES_LOADING:
			return {
				...state,
				isArticlesLoading: action.payload,
			};
		case SET_IS_ARTICLE_DETAILS_LOADING:
			return {
				...state,
				isArticlesDetailsLoading: action.payload,
			};
		case SET_ARTICLES:
			return {
				...state,
				articles: action.payload,
			};
		default:
			return state;
	}
};
