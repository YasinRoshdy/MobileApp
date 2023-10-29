import { SET_IS_FATWAS_LIST_LOADING, SET_FATWAS_LIST } from '../types';

const initState = {
	isFatwasListLoading: true,
	fatwasList: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_IS_FATWAS_LIST_LOADING:
			return {
				...state,
				isFatwasListLoading: action.payload,
			};
		case SET_FATWAS_LIST:
			return {
				...state,
				fatwasList: action.payload,
			};
		default:
			return state;
	}
};
