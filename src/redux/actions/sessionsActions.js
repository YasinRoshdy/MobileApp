import {
	SET_IS_SESSIONS_LOADING,
	SET_IS_SESSION_VIDEO_LOADING,
	SET_SESSIONS,
	SET_SESSION,
} from '../types';

export const setIsSessionsLoading = (isSessionsLoading) => ({
	type: SET_IS_SESSIONS_LOADING,
	payload: isSessionsLoading,
});

export const setIsSessionVideoLoading = (isSessionVideoLoading) => ({
	type: SET_IS_SESSION_VIDEO_LOADING,
	payload: isSessionVideoLoading,
});

export const setSessions = (sessions) => ({
	type: SET_SESSIONS,
	payload: sessions,
});

export const setSession = (session) => ({
	type: SET_SESSION,
	payload: session,
});
