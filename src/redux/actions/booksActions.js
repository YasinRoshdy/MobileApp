import {
	SET_IS_BOOKS_LOADING,
	SET_BOOKS,
	SET_IS_BOOK_DETAILS_LOADING,
} from '../types';

export const setIsBooksLoading = (isBooksLoading) => ({
	type: SET_IS_BOOKS_LOADING,
	payload: isBooksLoading,
});

export const setBooks = (books) => ({
	type: SET_BOOKS,
	payload: books,
});

export const setIsBookDetailsLoading = (isBookDetailsLoading) => ({
	type: SET_IS_BOOK_DETAILS_LOADING,
	payload: isBookDetailsLoading,
});
