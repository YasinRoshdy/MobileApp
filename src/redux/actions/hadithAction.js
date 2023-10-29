import {
	SET_IS_HADITH_BOOKS_LIST_LOADING,
	SET_IS_HADITH_BOOK_CHAPTERS_LIST_LOADING,
	SET_IS_HADITH_LIST_LOADING,
	SET_IS_HADITH_DETAILS_LOADING,
	SET_HADITH_BOOKS_LIST,
	SET_HADITH_BOOK_CHAPTERS_LIST,
	SET_HADITH_LIST,
	SET_HADITH,
	SET_HADITH_TAFSIR,
} from '../types';

export const setIsHadithBooksListLoading = (isHadithBooksListLoading) => ({
	type: SET_IS_HADITH_BOOKS_LIST_LOADING,
	payload: isHadithBooksListLoading,
});

export const setIsHadithBookChaptersListLoading = (
	isHadithBookChaptersListLoading,
) => ({
	type: SET_IS_HADITH_BOOK_CHAPTERS_LIST_LOADING,
	payload: isHadithBookChaptersListLoading,
});

export const setIsHadithListLoading = (isHadithListLoading) => ({
	type: SET_IS_HADITH_LIST_LOADING,
	payload: isHadithListLoading,
});

export const setIsHadithDetailsLoading = (isHadithDetailsLoading) => ({
	type: SET_IS_HADITH_DETAILS_LOADING,
	payload: isHadithDetailsLoading,
});

export const setHadithBooksList = (hadithBooksList) => ({
	type: SET_HADITH_BOOKS_LIST,
	payload: hadithBooksList,
});

export const setHadithBookChaptersList = (hadithBookChaptersList) => ({
	type: SET_HADITH_BOOK_CHAPTERS_LIST,
	payload: hadithBookChaptersList,
});

export const setHadithList = (hadithList) => ({
	type: SET_HADITH_LIST,
	payload: hadithList,
});

export const setHadith = (hadith) => ({
	type: SET_HADITH,
	payload: hadith,
});

export const setHadithTafsir = (hadithTafsir) => ({
	type: SET_HADITH_TAFSIR,
	payload: hadithTafsir,
});
