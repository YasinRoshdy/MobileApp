import {
	SET_IS_OTHER_SCIENCE_LOADING,
	SET_IS_OTHER_SCIENCE_AUDIO_LOADING,
	SET_IS_OTHER_SCIENCE_VIDEO_LOADING,
	SET_OTHER_SCIENCE_AUDIO_LIST,
	SET_OTHER_SCIENCE_VIDEO_LIST,
	SET_OTHER_SCIENCE_AUDIO_SUBJECTS,
	SET_OTHER_SCIENCE_VIDEO_SUBJECTS,
} from '../types';

export const setIsOtherScienceLoading = (isOtherScienceLoading) => ({
	type: SET_IS_OTHER_SCIENCE_LOADING,
	payload: isOtherScienceLoading,
});

export const setIsOtherScienceAudioLoading = (isOtherScienceAudioLoading) => ({
	type: SET_IS_OTHER_SCIENCE_AUDIO_LOADING,
	payload: isOtherScienceAudioLoading,
});

export const setIsOtherScienceVideoLoading = (isOtherScienceVideoLoading) => ({
	type: SET_IS_OTHER_SCIENCE_VIDEO_LOADING,
	payload: isOtherScienceVideoLoading,
});

export const setOtherScienceAudioList = (otherScienceAudioList) => ({
	type: SET_OTHER_SCIENCE_AUDIO_LIST,
	payload: otherScienceAudioList,
});

export const setOtherScienceVideoList = (otherScienceVideoList) => ({
	type: SET_OTHER_SCIENCE_VIDEO_LIST,
	payload: otherScienceVideoList,
});

export const setOtherScienceAudioSubjects = (otherScienceAudioSubjects) => ({
	type: SET_OTHER_SCIENCE_AUDIO_SUBJECTS,
	payload: otherScienceAudioSubjects,
});

export const setOtherScienceVideoSubjects = (otherScienceVideoSubjects) => ({
	type: SET_OTHER_SCIENCE_VIDEO_SUBJECTS,
	payload: otherScienceVideoSubjects,
});
