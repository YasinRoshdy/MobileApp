import { SET_IS_CALL_US_LOADING, SET_CALL_US_PHONE_NUMBERS } from '../types';

const initState = {
	isCallUsLoading: true,
	phoneNumbers: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_IS_CALL_US_LOADING:
			return {
				...state,
				isCallUsLoading: action.payload,
			};
		case SET_CALL_US_PHONE_NUMBERS:
			return {
				...state,
				phoneNumbers: [...action.payload],
			};
		default:
			return state;
	}
};
