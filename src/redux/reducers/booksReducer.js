import {
	SET_IS_BOOKS_LOADING,
	SET_IS_BOOK_DETAILS_LOADING,
	SET_BOOKS,
} from '../types';

const initState = {
	isBooksLoading: true,
	isBookDetailsLoading: true,
	books: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_IS_BOOKS_LOADING:
			return {
				...state,
				isBooksLoading: action.payload,
			};
		case SET_IS_BOOK_DETAILS_LOADING:
			return {
				...state,
				isBookDetailsLoading: action.payload,
			};
		case SET_BOOKS:
			return {
				...state,
				books: action.payload,
			};
		default:
			return state;
	}
};
