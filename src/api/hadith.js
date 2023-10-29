import { get } from './axios';

export const getBooksInAlSaheh = (options) => {
	get('bookInAlSahehList', {}, options);
};

export const getHadithByChapterList = (book_id, options) => {
	get('chapterByBookInAlSahehList', { book_id }, options);
};

export const getHadithListByChapter = (chapter_id, options) => {
	get('hadithListByChapter', { chapter_id }, options);
};

export const getHadithTafsir = (hadith_id, options) => {
	get('TafsirHadithInAlSaheh', { hadith_id }, options);
};
