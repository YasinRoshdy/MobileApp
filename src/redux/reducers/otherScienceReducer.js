import {
	SET_IS_OTHER_SCIENCE_LOADING,
	SET_IS_OTHER_SCIENCE_AUDIO_LOADING,
	SET_IS_OTHER_SCIENCE_VIDEO_LOADING,
	SET_OTHER_SCIENCE_AUDIO_LIST,
	SET_OTHER_SCIENCE_VIDEO_LIST,
	SET_OTHER_SCIENCE_AUDIO_SUBJECTS,
	SET_OTHER_SCIENCE_VIDEO_SUBJECTS,
} from '../types';

const initState = {
	isOtherScienceLoading: true,
	isOtherScienceAudioLoading: true,
	isOtherScienceVideoLoading: true,
	otherScienceAudioList: [],
	otherScienceVideoList: [],
	otherScienceAudioSubjects: [],
	otherScienceVideoSubjects: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_IS_OTHER_SCIENCE_LOADING:
			return {
				...state,
				isOtherScienceLoading: action.payload,
			};
		case SET_IS_OTHER_SCIENCE_AUDIO_LOADING:
			return {
				...state,
				isOtherScienceAudioLoading: action.payload,
			};
		case SET_IS_OTHER_SCIENCE_VIDEO_LOADING:
			return {
				...state,
				isOtherScienceVideoLoading: action.payload,
			};
		case SET_OTHER_SCIENCE_AUDIO_LIST:
			return {
				...state,
				otherScienceAudioList: action.payload,
			};
		case SET_OTHER_SCIENCE_VIDEO_LIST:
			return {
				...state,
				otherScienceVideoList: action.payload,
			};
		case SET_OTHER_SCIENCE_AUDIO_SUBJECTS:
			return {
				...state,
				otherScienceAudioSubjects: action.payload,
			};
		case SET_OTHER_SCIENCE_VIDEO_SUBJECTS:
			return {
				...state,
				otherScienceVideoSubjects: action.payload,
			};
		default:
			return state;
	}
};
