import { get } from './axios';

export const getGeneralInfo = (options) => {
	get('General_informationList/', options);
};
