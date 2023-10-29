import { get } from './axios';

export const getDailyPublish = (options) => {
	get('dailyPublishList', {}, options);
};
