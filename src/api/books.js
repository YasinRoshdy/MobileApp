import { get } from './axios';

export const getBooksList = (options) => {
	get('BooksList', {}, options);
};
