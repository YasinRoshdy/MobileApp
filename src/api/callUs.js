import { get, post } from './axios';

export const getPhoneNumbers = (options) => {
	get('phoneNumbersList', {}, options);
};

export const postFeedBack = (body, options) => {
	post('callUsCreate', body, options);
};
