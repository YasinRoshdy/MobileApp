import { get } from './axios';

export const getArticlesList = (options) => {
	get('ArticalsList', {}, options);
};
