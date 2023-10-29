import { Item, ItemType } from '../models/Item';

export const articleFavoriteObject = (article: any) => {
	const tempItem: Item = {
		itemType: ItemType.PDF,
		id: article.id,
		title: article.title,
		page_count: article.page_count,
		type: article.type,
		cover: article.cover,
		file: article.file,
		file_data: {
			size: article.file_data.size,
			sizify: article.file_data.sizify,
			type: article.file_data.type,
		},
	};

	return tempItem;
};

export const bookFavoriteObject = (book: any) => {
	const tempItem: Item = {
		itemType: ItemType.PDF,
		id: book.id,
		title: book.title,
		page_count: book.page_count,
		type: book.type,
		cover: book.cover,
		file: book.file,
		file_data: {
			size: book.file_data.size,
			sizify: book.file_data.sizify,
			type: book.file_data.type,
		},
	};

	return tempItem;
};

export const fatwaFavoriteObject = (fatwa: any) => {
	const tempItem: Item = {
		itemType: ItemType.AUDIO,
		id: fatwa.id,
		title: fatwa.title,
		file: fatwa.file,
	};

	return tempItem;
};

export const hadithAudioTafsirFavoriteObject = (hadithAudioTafsir: any) => {
	const tempItem: Item = {
		itemType: ItemType.AUDIO,
		id: hadithAudioTafsir.id,
		book: hadithAudioTafsir.book,
		chapter: hadithAudioTafsir.chapter,
		hadith: hadithAudioTafsir.hadith,
		audio_tafsir: hadithAudioTafsir.audio_tafsir,
		title: hadithAudioTafsir.title,
	};

	return tempItem;
};

export const hadithVideoTafsirFavoriteObject = (hadithVideoTafsir: any) => {
	const tempItem: Item = {
		itemType: ItemType.VIDEO,
		id: hadithVideoTafsir.id,
		video_url: hadithVideoTafsir.video_url,
		book: hadithVideoTafsir.book,
		chapter: hadithVideoTafsir.chapter,
		hadith: hadithVideoTafsir.hadith,
		video_tafsir: hadithVideoTafsir.video_tafsir,
		title: hadithVideoTafsir.title,
	};

	return tempItem;
};

export const otherScienceAudioFavoriteObject = (otherScienceAudio: any) => {
	const tempItem: Item = {
		itemType: ItemType.AUDIO,
		id: otherScienceAudio.id,
		title: otherScienceAudio.title,
		file: otherScienceAudio.file,
		subject: otherScienceAudio.subject,
	};

	return tempItem;
};

export const otherScienceVideoFavoriteObject = (otherScienceVideo: any) => {
	const tempItem: Item = {
		itemType: ItemType.VIDEO,
		id: otherScienceVideo.id,
		title: otherScienceVideo.title,
		video_url: otherScienceVideo.video_url,
		file: otherScienceVideo.file,
		subject: otherScienceVideo.subject,
	};

	return tempItem;
};

export const quranSuraTelawaFavoriteObject = (quranSuraTelawa: any) => {
	const tempItem: Item = {
		itemType: ItemType.AUDIO,
		id: quranSuraTelawa.id,
		sura: quranSuraTelawa.sura,
		file: quranSuraTelawa.file,
		aya_start_count: quranSuraTelawa.aya_start_count,
		aya_end_count: quranSuraTelawa.aya_end_count,
		title: quranSuraTelawa.title,
	};

	return tempItem;
};

export const quranSuraAudioTafsirFavoriteObject = (
	quranSuraAudioTafsir: any,
) => {
	const tempItem: Item = {
		itemType: ItemType.AUDIO,
		id: quranSuraAudioTafsir.id,
		sura: quranSuraAudioTafsir.sura,
		file: quranSuraAudioTafsir.file,
		aya_start_count: quranSuraAudioTafsir.aya_start_count,
		aya_end_count: quranSuraAudioTafsir.aya_end_count,
		title: quranSuraAudioTafsir.title,
	};

	return tempItem;
};

export const quranSuraVideoTafsirFavoriteObject = (
	quranSuraVideoTafsir: any,
) => {
	const tempItem: Item = {
		itemType: ItemType.VIDEO,
		id: quranSuraVideoTafsir.id,
		video_url: quranSuraVideoTafsir.video_url,
		sura: quranSuraVideoTafsir.sura,
		file: quranSuraVideoTafsir.file,
		aya_start_count: quranSuraVideoTafsir.aya_start_count,
		aya_end_count: quranSuraVideoTafsir.aya_end_count,
		title: quranSuraVideoTafsir.title,
	};

	return tempItem;
};

export const sessionVideoFavoriteObject = (sessionVideo: any) => {
	const tempItem: Item = {
		itemType: ItemType.VIDEO,
		id: sessionVideo.id,
		title: sessionVideo.title,
		type: sessionVideo.type,
		file: sessionVideo.file,
		category: sessionVideo.category,
	};

	return tempItem;
};
