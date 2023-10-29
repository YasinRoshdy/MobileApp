import {
	SET_IS_SURAS_LIST_LOADING,
	SET_IS_SURA_DETAILS_LOADING,
	SET_IS_SURA_TELAWA_LOADING,
	SET_IS_SURA_VIDEO_TAFSIR_LOADING,
	SET_IS_SURA_AUDIO_TAFSIR_LOADING,
	// SET_IS_SURA_TEXT_TAFSIR_LOADING,
	SET_SURAS_LIST,
	SET_SURA,
	SET_SURA_AUDIO_LIST,
	SET_SURA_AUDIO_TAFSIR_LIST,
	SET_SURA_VIDEO_TAFSIR_LIST,
} from '../types';

const initState = {
	isSurasListLoading: true,
	isSuraDetailsLoading: true,
	isSuraTelawaLoading: true,
	isSuraVideoTafsirLoading: true,
	isSuraAudioTafsirLoading: true,
	// isSuraTextTafsirLoading: true,
	suras: [],
	sura: {},
	suraAudioList: [],
	suraAudioTafsirList: [],
	suraVideoTafsirList: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_IS_SURAS_LIST_LOADING:
			return {
				...state,
				isSurasListLoading: action.payload,
			};
		case SET_IS_SURA_DETAILS_LOADING:
			return {
				...state,
				isSuraDetailsLoading: action.payload,
			};
		case SET_IS_SURA_TELAWA_LOADING:
			return {
				...state,
				isSuraTelawaLoading: action.payload,
			};
		case SET_IS_SURA_VIDEO_TAFSIR_LOADING:
			return {
				...state,
				isSuraVideoTafsirLoading: action.payload,
			};
		case SET_IS_SURA_AUDIO_TAFSIR_LOADING:
			return {
				...state,
				isSuraAudioTafsirLoading: action.payload,
			};
		/* case SET_IS_SURA_TEXT_TAFSIR_LOADING:
			return {
				...state,
				isSuraTextTafsirLoading: action.payload,
			}; */
		case SET_SURAS_LIST:
			return {
				...state,
				suras: action.payload,
			};
		case SET_SURA:
			return {
				...state,
				sura: action.payload,
			};
		case SET_SURA_AUDIO_LIST:
			return {
				...state,
				suraAudioList: action.payload,
			};
		case SET_SURA_AUDIO_TAFSIR_LIST:
			return {
				...state,
				suraAudioTafsirList: action.payload,
			};
		case SET_SURA_VIDEO_TAFSIR_LIST:
			return {
				...state,
				suraVideoTafsirList: action.payload,
			};
		default:
			return state;
	}
};
