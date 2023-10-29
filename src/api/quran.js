import { get } from './axios';

export const getAyatList = (sura_id, options) => {
	get('ayatList', { sura_id }, options);
};

export const getAyatTafsirAudioList = (sura_id, options) => {
	get('ayatTafsirAudioList', { sura_id }, options);
};

export const getAyatTafsirVideoList = (sura_id, options) => {
	get('ayatTafsirVideoList', { sura_id }, options);
};

export const getAyatTelawaList = (sura_id, options) => {
	get('ayatTelawaList', { sura_id }, options);
};

export const getSura = (sura_id, options) => {
	get('sura', { sura_id }, options);
};

// Use This Method To Fetch Minimal Sura Details
export const getSurasList = (options) => {
	get('suraList', { limit: 115 }, options);
};

/* export const getSurasList = (options) => {
	get('SuraList?limit=120', {}, options);
};

export const getSura = (id, options) => {
	get('sura', { sura_id: id }, options);
	// getWithParams('sura', { sura_id: id }, options);
};

export const getSuraAudio = (id, options) => {
	get('AyatTelawaList', { sura_id: id }, options);
};

export const getSuraVideoTafsir = (id, options) => {
	get('AyatTafsirVideoList', { sura_id: id }, options);
};

export const getSuraAudioTafsir = (id, options) => {
	get('AyatTafsirAudioList', { sura_id: id }, options);
};

export const getSuraTextTafsir = (id, options) => {
	get('', { sura_id: id }, options);
}; */
