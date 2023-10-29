import { get } from './axios';

export const getFatwas = (options) => {
	get('fatwaList', {}, options);
};
