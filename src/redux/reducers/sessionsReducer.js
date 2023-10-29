import {
	SET_IS_SESSIONS_LOADING,
	SET_IS_SESSION_VIDEO_LOADING,
	SET_SESSIONS,
	SET_SESSION,
} from '../types';

const initState = {
	isSessionsLoading: true,
	isSessionVideoLoading: true,
	sessions: [],
	session: {},
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_IS_SESSIONS_LOADING:
			return {
				...state,
				isSessionsLoading: action.payload,
			};
		case SET_IS_SESSION_VIDEO_LOADING:
			return {
				...state,
				isSessionVideoLoading: action.payload,
			};
		case SET_SESSIONS:
			return {
				...state,
				sessions: action.payload,
			};
		case SET_SESSION:
			return {
				...state,
				session: action.payload,
			};
		default:
			return state;
	}
};
