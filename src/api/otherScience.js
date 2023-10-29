import { get } from './axios';

export const getOtherScienceSubject = (options) => {
	get('otherScienceSubjectList', {}, options);
};

export const getOtherScienceBySubjectId = (subject_id, options) => {
	get('OtherScienceListBySubjectId', { subject_id }, options);
};
