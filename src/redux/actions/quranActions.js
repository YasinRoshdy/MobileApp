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

export const setIsSurasListLoading = (isSurasListLoading) => ({
	type: SET_IS_SURAS_LIST_LOADING,
	payload: isSurasListLoading,
});

export const setIsSuraDetailsLoading = (isSuraDetailsLoading) => ({
	type: SET_IS_SURA_DETAILS_LOADING,
	payload: isSuraDetailsLoading,
});

export const setIsSuraTelawaLoading = (isSuraTelawaLoading) => ({
	type: SET_IS_SURA_TELAWA_LOADING,
	payload: isSuraTelawaLoading,
});

export const setIsSuraVideoTafsirLoading = (isSuraVideoTafsirLoading) => ({
	type: SET_IS_SURA_VIDEO_TAFSIR_LOADING,
	payload: isSuraVideoTafsirLoading,
});

export const setIsSuraAudioTafsirLoading = (isSuraAudioTafsirLoading) => ({
	type: SET_IS_SURA_AUDIO_TAFSIR_LOADING,
	payload: isSuraAudioTafsirLoading,
});

/* export const setIsSuraTextTafsirLoading = (isSuraTextTafsirLoading) => ({
	type: SET_IS_SURA_TEXT_TAFSIR_LOADING,
	payload: isSuraTextTafsirLoading,
}); */

export const setSurasList = (suras) => ({
	type: SET_SURAS_LIST,
	payload: suras,
});

export const setSura = (sura) => ({
	type: SET_SURA,
	payload: sura,
});

export const setSuraAudioList = (suraAudioList) => ({
	type: SET_SURA_AUDIO_LIST,
	payload: suraAudioList,
});

export const setSuraAudioTafsirList = (suraAudioTafsirList) => ({
	type: SET_SURA_AUDIO_TAFSIR_LIST,
	payload: suraAudioTafsirList,
});

export const setSuraVideoTafsirList = (suraVideoTafsirList) => ({
	type: SET_SURA_VIDEO_TAFSIR_LIST,
	payload: suraVideoTafsirList,
});
