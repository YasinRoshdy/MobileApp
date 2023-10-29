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

const initState = {
	isHadithBooksListLoading: true,
	isHadithBookChaptersListLoading: true,
	isHadithListLoading: true,
	isHadithDetailsLoading: true,
	hadithBooksList: [],
	hadithBookChaptersList: [],
	hadithList: [],
	hadith: {},
	hadithTafsir: {},
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_IS_HADITH_BOOKS_LIST_LOADING:
			return {
				...state,
				isHadithBooksListLoading: action.payload,
			};
		case SET_IS_HADITH_BOOK_CHAPTERS_LIST_LOADING:
			return {
				...state,
				isHadithBookChaptersListLoading: action.payload,
			};
		case SET_IS_HADITH_LIST_LOADING:
			return {
				...state,
				isHadithListLoading: action.payload,
			};
		case SET_IS_HADITH_DETAILS_LOADING:
			return {
				...state,
				isHadithDetailsLoading: action.payload,
			};
		case SET_HADITH_BOOKS_LIST:
			return {
				...state,
				hadithBooksList: action.payload,
			};
		case SET_HADITH_BOOK_CHAPTERS_LIST:
			return {
				...state,
				hadithBookChaptersList: action.payload,
			};
		case SET_HADITH_LIST:
			return {
				...state,
				hadithList: action.payload,
			};
		case SET_HADITH:
			return {
				...state,
				hadith: action.payload,
			};
		case SET_HADITH_TAFSIR:
			return {
				...state,
				hadithTafsir: action.payload,
			};
		default:
			return state;
	}
};
