import { get } from './axios';

export const getSessionsCategoriesByType = (type, options) => {
	get('SessionsCategorysListByType', { type }, options);
};

export const getSessionByCategoryId = (category_id, options) => {
	get('SessionsListByCategory', { category_id }, options);
};
