import {
	SET_IS_ARTICLES_LOADING,
	SET_IS_ARTICLE_DETAILS_LOADING,
	SET_ARTICLES,
} from '../types';

export const setIsArticlesLoading = (isArticlesLoading) => ({
	type: SET_IS_ARTICLES_LOADING,
	payload: isArticlesLoading,
});

export const setArticles = (articles) => ({
	type: SET_ARTICLES,
	payload: articles,
});

export const setIsArticlesDetailsLoading = (isArticlesDetailsLoading) => ({
	type: SET_IS_ARTICLE_DETAILS_LOADING,
	payload: isArticlesDetailsLoading,
});
